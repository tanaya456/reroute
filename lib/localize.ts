import type { Lesson } from "@/content/lessons";
import { LESSONS_ES, LESSONS_HI, type LessonText } from "@/content/lessons.i18n";
import type { SafetyTopic } from "@/content/safety";
import { REGIONS, SAFETY_ES, SAFETY_HI } from "@/content/safety.i18n";
import type { UiLang } from "./i18n";

const LESSON_TEXT = { es: LESSONS_ES, hi: LESSONS_HI };
const SAFETY_TEXT = { es: SAFETY_ES, hi: SAFETY_HI };

/** Returns the lesson with its learner-facing text in the given language (falls back to English). */
export function localizeLesson<T extends Pick<Lesson, "id"> & LessonText>(lesson: T, lang: UiLang): T {
  if (lang === "en") return lesson;
  const tr = LESSON_TEXT[lang][lesson.id];
  return tr ? { ...lesson, ...tr } : lesson;
}

export function localizeTopic(topic: SafetyTopic, lang: UiLang): SafetyTopic {
  if (lang === "en") return topic;
  const tr = SAFETY_TEXT[lang][topic.id];
  const help = topic.help.map((l) => ({ ...l, region: l.region ? (REGIONS[lang][l.region] ?? l.region) : undefined }));
  return tr ? { ...topic, ...tr, help } : { ...topic, help };
}
