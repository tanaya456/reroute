# Reroute: Learn AI, Stay Safe

A free, private learning site that helps **immigrant and career-changing women** use AI for their careers, and stay safe from AI-powered scams.

## What it does
- **Personalized plan** (`/start` → `/plan`): 6 questions. Claude picks and orders lessons **only from a fixed catalog** (validated with Zod).
- **8 short lessons** (`/learn`): resume rewriting, interview practice, understanding documents, credential recognition, fact-checking, and more. Each one has a **live, guardrailed Claude practice sandbox**.
- **Stay Safe** (`/safety`): human-written, sourced guidance on AI scams and fake job offers, voice-clone and deepfake scams, spotting AI content, data privacy, and automated decisions.

- **English, Spanish, and Hindi** across the whole site. Spanish and Hindi were translated with AI and are labeled as not yet reviewed by native speakers.

## Responsible-AI design
| Risk | Mitigation |
|---|---|
| Hallucinated safety or legal info | Safety and lesson content is static and human-written; the LLM only personalizes and runs practice |
| Model inventing lessons | Structured output constrained to an enum of catalog ids, re-validated server-side |
| Prompt injection | Shared rules in the system prompt, user text treated as data, lesson-scoped role, output rendered as React text (never HTML) |
| Oversharing personal data | Client-side detector warns before sending ID, card, or email patterns; prompts never ask for identifiers |
| Privacy | No accounts or DB; profile and progress live in localStorage with "Clear my data"; server logs never include message content |
| Abuse and cost | Per-IP rate limits, message-length and turn caps, `max_tokens` caps |
| Refusals | Server-side fallback (`fallbacks: "default"`), plus graceful refusal handling |
| Accessibility | Atkinson Hyperlegible font, WCAG-minded contrast, focus rings, skip link, ARIA live regions, 44px+ targets, dark mode, print styles |

## Run locally
```bash
npm install
# put your key in .env.local:  ANTHROPIC_API_KEY=sk-ant-...
npm run dev -- -p 3107
```
Optional: set `CLAUDE_MODEL` (default `claude-opus-5-5`; for example, `claude-haiku-5-5` is cheaper).

## Deploy
Push to GitHub → import in Vercel → add `ANTHROPIC_API_KEY` under Settings → Environment Variables.

## Stack
Next.js 15 (App Router), TypeScript, Tailwind v4, `@anthropic-ai/sdk`, Zod.
