import Anthropic from "@anthropic-ai/sdk";
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod";
import { NextResponse } from "next/server";
import { getClient, hasKey, MODEL } from "@/lib/claude";
import { planSystemPrompt, planUserMessage } from "@/lib/prompts";
import { clientIp, rateLimit } from "@/lib/rateLimit";
import { PlanSchema, ProfileSchema } from "@/lib/schema";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (!hasKey()) {
    return NextResponse.json({ error: "The AI isn't set up yet. Add ANTHROPIC_API_KEY to .env.local." }, { status: 503 });
  }
  if (!rateLimit(`plan:${clientIp(req)}`, 10, 60 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many plans created. Please try again in an hour." }, { status: 429 });
  }

  const body = await req.json().catch(() => null);
  const parsed = ProfileSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  try {
    const response = await getClient().messages.parse({
      model: MODEL,
      max_tokens: 4000,
      output_config: { effort: "low", format: zodOutputFormat(PlanSchema) },
      system: planSystemPrompt(),
      messages: [{ role: "user", content: planUserMessage(parsed.data) }],
    });

    if (response.stop_reason === "refusal" || !response.parsed_output) {
      return NextResponse.json({ error: "We couldn't build a plan this time. Please try again." }, { status: 502 });
    }
    // Double-check against our own schema (catalog ids only).
    const plan = PlanSchema.safeParse(response.parsed_output);
    if (!plan.success) {
      return NextResponse.json({ error: "We couldn't build a plan this time. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ plan: plan.data });
  } catch (err) {
    // Log the error type only, never learner content.
    if (err instanceof Anthropic.AuthenticationError) {
      console.error("plan: invalid API key");
      return NextResponse.json({ error: "The AI key is invalid. Check ANTHROPIC_API_KEY." }, { status: 500 });
    }
    if (err instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "The AI is busy right now. Please try again in a minute." }, { status: 429 });
    }
    if (err instanceof Anthropic.APIError) {
      console.error(`plan: API error ${err.status}`);
    } else {
      console.error("plan: unexpected error");
    }
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
