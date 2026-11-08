"use client";
import Link from "next/link";
import type { Lesson } from "@/content/lessons";
import { useI18n } from "@/lib/i18n";
import { localizeLesson } from "@/lib/localize";

export function LessonCard({
  lesson: base,
  index,
  done,
  note,
}: {
  lesson: Lesson;
  index: number;
  done: boolean;
  note?: string;
}) {
  const { t, lang } = useI18n();
  const lesson = localizeLesson(base, lang);
  return (
    <Link
      href={`/learn/${lesson.id}`}
      className={`card p-5 flex gap-4 items-start hover:border-brand transition-colors ${done ? "opacity-80" : ""}`}
    >
      <span
        className={`shrink-0 w-10 h-10 rounded-full grid place-items-center font-bold ${
          done ? "bg-brand text-brand-ink" : "bg-brand-soft text-brand"
        }`}
        aria-hidden
      >
        {done ? "✓" : index + 1}
      </span>
      <span className="flex-1 min-w-0">
        <span className="font-bold text-lg block">{lesson.title}</span>
        <span className="text-ink-soft text-sm block mt-0.5">{note ?? lesson.summary}</span>
        <span className="text-xs text-ink-soft mt-2 block">
          {lesson.minutes} {t("minutes")}
          {done && <span className="sr-only">, {t("done")}</span>}
        </span>
      </span>
    </Link>
  );
}

export function ProgressBar({ done, total }: { done: number; total: number }) {
  const { t } = useI18n();
  const pct = total ? Math.round((done / total) * 100) : 0;
  return (
    <div>
      <div className="flex justify-between text-sm text-ink-soft mb-1.5">
        <span>{t("progress", { done, total })}</span>
        <span>{pct}%</span>
      </div>
      <div
        className="h-3 rounded-full bg-surface-2 overflow-hidden"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={t("progressLabel")}
      >
        <div className="h-full bg-brand rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
