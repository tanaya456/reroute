// Lightweight client- and server-side check for sensitive data the learner
// may paste by accident. It's a safety nudge, not a guarantee.

export type SensitiveKind = "email" | "card" | "ssn" | "nationalId" | "passport" | "password";

const PATTERNS: { label: SensitiveKind; re: RegExp }[] = [
  { label: "email", re: /[\w.+-]+@[\w-]+\.[\w.]+/ },
  { label: "card", re: /\b(?:\d[ -]?){13,19}\b/ },
  { label: "ssn", re: /\b\d{3}-\d{2}-\d{4}\b/ },
  { label: "nationalId", re: /\b\d{4}\s?\d{4}\s?\d{4}\b|\b\d{3}[ -]\d{3}[ -]\d{3}\b/ },
  { label: "passport", re: /\bpassport\b[^\n]{0,20}\b[A-Z0-9]{6,9}\b/i },
  { label: "password", re: /\b(password|passcode|pin)\s*[:=]\s*\S+/i },
];

export function findSensitive(text: string): SensitiveKind[] {
  return PATTERNS.filter((p) => p.re.test(text)).map((p) => p.label);
}
