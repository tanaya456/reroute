import type { Metadata } from "next";
import { SafetyContent } from "./SafetyContent";

export const metadata: Metadata = {
  title: "Stay Safe · Reroute",
  description: "Plain-language guidance on AI scams, voice-clone and deepfake scams, spotting AI content, and protecting your data.",
};

export default function SafetyPage() {
  return <SafetyContent />;
}
