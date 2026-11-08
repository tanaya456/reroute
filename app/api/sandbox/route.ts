import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { getLesson } from "@/content/lessons";
import { getClient, hasKey, MODEL } from "@/lib/claude";
import { sandboxSystemPrompt } from "@/lib/prompts";
import { clientIp, rateLimit } from "@/lib/rateLimit";
import { SandboxRequestSchema } from "@/lib/schema";

export const runtime = "nodejs";

/**
 * Streams a lesson-scoped practice reply as plain text.
 * The server is stateless: conversation history comes from the browser and is never logged or stored.
 */
export async function POST(req: Request) {
  if (!hasKey()) {
    return NextResponse.json({ error: "The AI isn't set up yet. Add ANTHROPIC_API_KEY to .env.local." }, { status: 503 });
  }
  if (!rateLimit(`sandbox:${clientIp(req)}`, 40, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "You've reached the practice limit for now. Please try again in an hour." }, { status: 429 });
  }

  const parsed = SandboxRequestSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "That message couldn't be sent. Messages must be under 4,000 characters." }, { status: 400 });
  }
  const { lessonId, language, profession, messages } = parsed.data;
  const lesson = getLesson(lessonId)!;
  if (messages[0].role !== "user" || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "Invalid conversation." }, { status: 400 });
  }

  const stream = getClient().beta.messages.stream({
    model: MODEL,
    max_tokens: 2000,
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    output_config: { effort: "low" },
    system: sandboxSystemPrompt(lesson, language, profession),
    messages: messages as Anthropic.Beta.BetaMessageParam[],
  });

  const encoder = new TextEncoder();
  const body = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
        const final = await stream.finalMessage();
        if (final.stop_reason === "refusal") {
          controller.enqueue(encoder.encode("\n\nI can't help with that one. Let's get back to practicing this lesson."));
        }
      } catch (err) {
        console.error(err instanceof Anthropic.APIError ? `sandbox: API error ${err.status}` : "sandbox: stream error");
        controller.enqueue(encoder.encode("\n\n[Sorry, something went wrong. Please try again.]"));
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
