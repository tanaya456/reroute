"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LESSONS, getLesson } from "@/content/lessons";
import { LessonCard, ProgressBar } from "@/components/LessonCard";
import { useI18n } from "@/lib/i18n";
import type { Plan } from "@/lib/schema";
import { store } from "@/lib/storage";

export default function LearnPage() {
  const { t } = useI18n();
  const [done, setDone] = useState<string[]>([]);
  const [plan, setPlan] = useState<Plan | null>(null);

  useEffect(() => {
    setDone(store.getDone());
    setPlan(store.getPlan());
  }, []);

  const planIds = new Set(plan?.steps.map((s) => s.lessonId));
  const others = LESSONS.filter((l) => !planIds.has(l.id));

  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-display text-4xl font-bold">{t("learnTitle")}</h1>
        <p className="text-ink-soft mt-2 max-w-2xl">{t("learnBody")}</p>
      </div>

      {plan ? (
        <section aria-labelledby="plan-h" className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="plan-h" className="font-display text-2xl font-bold">{t("yourPlan")}</h2>
            <Link href="/plan" className="text-brand font-bold underline">{t("viewFullPlan")}</Link>
          </div>
          <ProgressBar done={plan.steps.filter((s) => done.includes(s.lessonId)).length} total={plan.steps.length} />
          <div className="grid gap-3">
            {plan.steps.map((s, i) => {
              const lesson = getLesson(s.lessonId);
              return lesson ? <LessonCard key={s.lessonId} lesson={lesson} index={i} done={done.includes(s.lessonId)} note={s.why} /> : null;
            })}
          </div>
        </section>
      ) : (
        <section className="card p-6 bg-brand-soft border-transparent flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <div>
            <h2 className="font-bold text-lg">{t("notSure")}</h2>
            <p className="text-ink-soft text-sm">{t("notSureBody")}</p>
          </div>
          <Link href="/start" className="btn btn-primary shrink-0">{t("ctaStart")}</Link>
        </section>
      )}

      <section aria-labelledby="all-h" className="space-y-4">
        <h2 id="all-h" className="font-display text-2xl font-bold">{plan ? t("moreLessons") : t("allLessons")}</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {(plan ? others : LESSONS).map((l) => (
            <LessonCard key={l.id} lesson={l} index={LESSONS.indexOf(l)} done={done.includes(l.id)} />
          ))}
        </div>
      </section>
    </div>
  );
}
