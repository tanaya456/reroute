"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { localizeLesson, localizeTopic } from "@/lib/localize";
import { LESSONS } from "@/content/lessons";
import { SAFETY_TOPICS } from "@/content/safety";

export default function Home() {
  const { t, lang } = useI18n();
  const features = [
    { icon: "🔒", title: t("feat1Title"), body: t("feat1Body") },
    { icon: "✅", title: t("feat2Title"), body: t("feat2Body") },
    { icon: "🌍", title: t("feat3Title"), body: t("feat3Body") },
  ];
  return (
    <div className="space-y-16">
      <section className="pt-4 sm:pt-10 max-w-3xl">
        <h1 className="font-display text-4xl sm:text-6xl font-bold leading-[1.05]">{t("heroTitle")}</h1>
        <p className="text-lg sm:text-xl text-ink-soft mt-5 max-w-2xl">{t("heroBody")}</p>
        <div className="flex flex-wrap gap-3 mt-8">
          <Link href="/start" className="btn btn-primary text-lg">
            {t("ctaStart")} →
          </Link>
          <Link href="/learn" className="btn btn-ghost">
            {t("ctaBrowse")}
          </Link>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <Link href="/learn" className="card p-6 sm:p-8 hover:border-brand transition-colors group">
          <p className="text-3xl" aria-hidden>🧭</p>
          <h2 className="font-display text-2xl font-bold mt-3 group-hover:text-brand">{t("learnTitle")}</h2>
          <p className="text-ink-soft mt-2">{t("learnBody")}</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {LESSONS.slice(2, 6).map((l) => (
              <li key={l.id} className="flex gap-2">
                <span className="text-brand" aria-hidden>●</span>
                {localizeLesson(l, lang).title}
              </li>
            ))}
          </ul>
        </Link>
        <Link href="/safety" className="card p-6 sm:p-8 hover:border-brand transition-colors group">
          <p className="text-3xl" aria-hidden>🛡️</p>
          <h2 className="font-display text-2xl font-bold mt-3 group-hover:text-brand">{t("safetyTitle")}</h2>
          <p className="text-ink-soft mt-2">{t("safetyBody")}</p>
          <ul className="mt-4 space-y-1.5 text-sm">
            {SAFETY_TOPICS.slice(0, 4).map((s) => (
              <li key={s.id} className="flex gap-2">
                <span aria-hidden>{s.icon}</span>
                {localizeTopic(s, lang).title}
              </li>
            ))}
          </ul>
        </Link>
      </section>

      <section className="card p-6 sm:p-8 bg-surface-2 grid gap-6 sm:grid-cols-3">
        {features.map((f) => (
          <div key={f.icon}>
            <p className="text-2xl" aria-hidden>{f.icon}</p>
            <h3 className="font-bold mt-2">{f.title}</h3>
            <p className="text-ink-soft text-sm mt-1">{f.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
