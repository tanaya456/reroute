"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLesson } from "@/content/lessons";
import { LessonCard, ProgressBar } from "@/components/LessonCard";
import { useI18n } from "@/lib/i18n";
import type { Plan, Profile } from "@/lib/schema";
import { store } from "@/lib/storage";

export default function PlanPage() {
  const { t } = useI18n();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [done, setDone] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setPlan(store.getPlan());
    setProfile(store.getProfile());
    setDone(store.getDone());
    setLoaded(true);
  }, []);

  if (!loaded) return null;
  if (!plan) {
    return (
      <div className="max-w-xl">
        <h1 className="font-display text-3xl font-bold">{t("noPlan")}</h1>
        <p className="text-ink-soft mt-2">{t("noPlanBody")}</p>
        <Link href="/start" className="btn btn-primary mt-6">{t("ctaStart")}</Link>
      </div>
    );
  }

  const completed = plan.steps.filter((s) => done.includes(s.lessonId)).length;

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-accent">{t("yourPlan")}</p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold mt-2">
          {profile?.profession ? t("planFor", { job: profile.profession }) : t("yourPath")}
          {profile?.livingIn ? t("planIn", { place: profile.livingIn }) : ""}
        </h1>
        <p className="text-lg mt-4">{plan.welcome}</p>
        <p className="text-ink-soft mt-2">🗓️ {plan.weeklyPace}</p>
      </div>

      <ProgressBar done={completed} total={plan.steps.length} />

      <ol className="space-y-4">
        {plan.steps.map((s, i) => {
          const lesson = getLesson(s.lessonId);
          if (!lesson) return null;
          return (
            <li key={s.lessonId} className="space-y-2">
              <LessonCard lesson={lesson} index={i} done={done.includes(s.lessonId)} note={s.why} />
              <p className="text-sm text-ink-soft pl-4 border-l-4 border-brand-soft ml-5">✨ {s.personalTip}</p>
            </li>
          );
        })}
      </ol>

      <div className="flex flex-wrap gap-3 no-print">
        <Link href="/start" className="btn btn-ghost">{t("changeAnswers")}</Link>
        <button className="btn btn-ghost" onClick={() => window.print()}>{t("print")}</button>
        <Link href="/safety" className="btn btn-ghost">🛡️ {t("ctaSafety")}</Link>
      </div>
      <p className="text-xs text-ink-soft">
        {t("planNote")}
      </p>
    </div>
  );
}
