import { notFound } from "next/navigation";
import { LESSONS, getLesson, type Lesson } from "@/content/lessons";
import { LessonView, type PublicLesson } from "./LessonView";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ lessonId: l.id }));
}

export default async function LessonPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = getLesson(lessonId);
  if (!lesson) notFound();
  // The sandbox's server-side instructions stay on the server.
  const idx = LESSONS.indexOf(lesson);
  const next = LESSONS[idx + 1];
  return <LessonView lesson={toPublic(lesson)} number={idx + 1} next={next ? toPublic(next) : null} />;
}

function toPublic(lesson: Lesson): PublicLesson {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { sandboxRole, ...pub } = lesson;
  return pub;
}
