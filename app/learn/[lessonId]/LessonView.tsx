"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Lesson } from "@/content/lessons";
import { Sandbox } from "@/components/Sandbox";
import { useI18n } from "@/lib/i18n";
import { localizeLesson } from "@/lib/localize";
import type { Plan, Profile } from "@/lib/schema";
import { store } from "@/lib/storage";

export type PublicLesson = Omit<Lesson, "sandboxRole">;

export function LessonView({
  lesson: base,
  number,
  next,
}: {
  lesson: PublicLesson;
  number: number;
  next: PublicLesson | null;
}) {
  const { t, lang } = useI18n();
  const lesson = localizeLesson(base, lang);
  const nextLesson = next ? localizeLesson(next, lang) : null;
  const [profile, setProfile] = useState<Profile | null>(null);
  const [plan, setPlan] = useState<Plan | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setProfile(store.getProfile());
    setPlan(store.getPlan());
    setDone(store.getDone().includes(base.id));
  }, [base.id]);

  const job = profile?.profession || t("yourProfession");
  const example = lesson.example.prompt.replaceAll("{job}", job);
  const tip = plan?.steps.find((s) => s.lessonId === lesson.id)?.personalTip;

  return (
    <article className="space-y-8 max-w-3xl">
      <div>
        <Link href="/learn" className="text-sm text-brand font-bold underline">{t("backToLessons")}</Link>
        <p className="text-sm text-ink-soft mt-4">
          {t("lessonN", { n: number })} · {lesson.minutes} {t("minutes")}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-1">{lesson.title}</h1>
        <p className="text-lg text-ink-soft mt-2">{lesson.summary}</p>
      </div>

      {tip && (
        <aside className="card p-5 bg-brand-soft border-transparent">
          <p className="font-bold text-brand">{t("tipForYou")}</p>
          <p className="mt-1">{tip}</p>
        </aside>
      )}

      <section aria-labelledby="learn-h" className="space-y-3">
        <h2 id="learn-h" className="font-display text-2xl font-bold">{t("theIdea")}</h2>
        {lesson.explain.map((p, i) => <p key={i}>{p}</p>)}
      </section>

      <section aria-labelledby="ex-h" className="card p-5">
        <h2 id="ex-h" className="font-bold">📝 {t("example")}: {lesson.example.label}</h2>
        <pre className="mt-3 whitespace-pre-wrap font-sans bg-surface-2 rounded-xl p-4 text-[0.95rem]">{example}</pre>
      </section>

      <section aria-labelledby="try-h" className="space-y-3">
        <h2 id="try-h" className="font-display text-2xl font-bold">{t("yourTurn")}</h2>
        <p>{lesson.tryIt}</p>
        <Sandbox lessonId={lesson.id} profile={profile} starter={example} />
      </section>

      <aside aria-labelledby="watch-h" className="rounded-2xl bg-warn-bg text-warn-ink p-5">
        <h2 id="watch-h" className="font-bold text-lg">{t("watchOut")}</h2>
        <ul className="mt-2 space-y-2 list-disc pl-5">
          {lesson.watchOut.map((w, i) => <li key={i}>{w}</li>)}
        </ul>
        <Link href="/safety" className="inline-block mt-3 underline font-bold">{t("moreInSafety")}</Link>
      </aside>

      <div className="flex flex-wrap gap-3 items-center justify-between border-t border-line pt-6">
        <button
          className={`btn ${done ? "btn-ghost" : "btn-primary"}`}
          aria-pressed={done}
          onClick={() => setDone(store.toggleDone(base.id).includes(base.id))}
        >
          {done ? t("markedDone") : t("markDone")}
        </button>
        {nextLesson && (
          <Link href={`/learn/${nextLesson.id}`} className="btn btn-ghost">
            {t("next")}: {nextLesson.title} →
          </Link>
        )}
      </div>
    </article>
  );
}
