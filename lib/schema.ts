import { z } from "zod";
import { LESSON_IDS } from "@/content/lessons";

export const LANGUAGES = ["English", "Español", "हिन्दी", "Français", "Português", "العربية", "Tagalog", "中文"] as const;
export const GOALS = [
  "Get a job in my field",
  "Switch to a new field",
  "Get my credentials recognized",
  "Start a business",
  "Use English (or the local language) at work",
] as const;
export const COMFORT = ["Beginner", "Some experience", "Comfortable"] as const;

export const ProfileSchema = z.object({
  profession: z.string().trim().min(2).max(120),
  trainedIn: z.string().trim().max(80).default(""),
  livingIn: z.string().trim().max(80).default(""),
  goal: z.enum(GOALS),
  comfort: z.enum(COMFORT),
  language: z.enum(LANGUAGES),
  hoursPerWeek: z.number().int().min(1).max(40),
});
export type Profile = z.infer<typeof ProfileSchema>;

/** What Claude must return for a learning plan. Lesson ids are constrained to the catalog. */
export const PlanSchema = z.object({
  welcome: z.string().describe("2-3 warm, encouraging sentences addressed to the learner, in their language."),
  steps: z
    .array(
      z.object({
        lessonId: z.enum(LESSON_IDS),
        why: z.string().describe("One sentence on why this lesson helps this learner's goal."),
        personalTip: z.string().describe("One concrete, specific tip or example tailored to their profession."),
      }),
    )
    .min(3)
    .max(8),
  weeklyPace: z.string().describe("One sentence suggesting a realistic pace given their hours per week."),
});
export type Plan = z.infer<typeof PlanSchema>;

export const ChatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

export const SandboxRequestSchema = z.object({
  lessonId: z.enum(LESSON_IDS),
  language: z.enum(LANGUAGES),
  profession: z.string().max(120).optional(),
  messages: z.array(ChatMessageSchema).min(1).max(30),
});
