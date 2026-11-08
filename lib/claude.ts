import Anthropic from "@anthropic-ai/sdk";

// Server-only. The key is read from ANTHROPIC_API_KEY and never sent to the browser.
export const MODEL = process.env.CLAUDE_MODEL || "claude-opus-5-5";

let client: Anthropic | null = null;
export function getClient(): Anthropic {
  if (!client) client = new Anthropic();
  return client;
}

export function hasKey(): boolean {
  const k = process.env.ANTHROPIC_API_KEY;
  return !!k && k !== "your-key-here";
}
