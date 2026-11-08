"use client";
import { useMemo } from "react";
import { SAFETY_LAST_REVIEWED, SAFETY_TOPICS } from "@/content/safety";
import { useI18n } from "@/lib/i18n";
import { localizeTopic } from "@/lib/localize";
import { SafetyNav } from "./SafetyNav";

const REVIEWED = { en: SAFETY_LAST_REVIEWED, es: "noviembre de 2026", hi: "नवंबर 2026" } as const;

export function SafetyContent() {
  const { t, lang } = useI18n();
  const topics = useMemo(() => SAFETY_TOPICS.map((topic) => localizeTopic(topic, lang)), [lang]);
  const navItems = useMemo(() => topics.map(({ id, title, icon }) => ({ id, title, icon })), [topics]);

  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        <h1 className="font-display text-4xl font-bold">{t("safetyTitle")}</h1>
        <p className="text-lg text-ink-soft mt-2">{t("safetyIntro")}</p>
        <p className="text-xs text-ink-soft mt-3">{t("writtenBy", { date: REVIEWED[lang] })}</p>
      </div>

      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-10">
        <SafetyNav label={t("safetyTopics")} topics={navItems} />

        <div className="space-y-10 min-w-0">
          {topics.map((topic) => (
            <section key={topic.id} id={topic.id} aria-labelledby={`${topic.id}-h`} className="card p-6 sm:p-8 scroll-mt-24">
              <h2 id={`${topic.id}-h`} className="font-display text-2xl sm:text-3xl font-bold flex gap-3 items-start">
                <span aria-hidden>{topic.icon}</span>
                {topic.title}
              </h2>
              <p className="mt-3 text-lg">{topic.intro}</p>

              <h3 className="font-bold text-lg mt-6">{t("whatItIs")}</h3>
              <ul className="mt-2 space-y-2 list-disc pl-5">
                {topic.whatItIs.map((x, i) => <li key={i}>{x}</li>)}
              </ul>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="rounded-2xl bg-warn-bg text-warn-ink p-5">
                  <h3 className="font-bold text-lg">{t("redFlags")}</h3>
                  <ul className="mt-2 space-y-2">
                    {topic.redFlags.map((x, i) => (
                      <li key={i} className="flex gap-2"><span aria-hidden>•</span><span>{x}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-brand-soft p-5">
                  <h3 className="font-bold text-lg text-brand">{t("whatToDo")}</h3>
                  <ol className="mt-2 space-y-2 list-decimal pl-5">
                    {topic.doNow.map((x, i) => <li key={i}>{x}</li>)}
                  </ol>
                </div>
              </div>

              <h3 className="font-bold text-lg mt-6">{t("whereHelp")}</h3>
              <ul className="mt-2 grid sm:grid-cols-2 gap-2">
                {topic.help.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="block rounded-xl border border-line px-4 py-3 hover:border-brand">
                      <span className="font-bold underline">{l.label}</span>
                      {l.region && <span className="block text-xs text-ink-soft">{l.region}</span>}
                      <span className="sr-only"> {t("opensNewTab")}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="text-sm text-ink-soft">{t("emergency")}</p>
        </div>
      </div>
    </div>
  );
}
