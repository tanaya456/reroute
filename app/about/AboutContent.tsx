"use client";
import Link from "next/link";
import { ABOUT } from "@/content/about";
import { useI18n } from "@/lib/i18n";

export function AboutContent() {
  const { t, lang } = useI18n();
  return (
    <div className="max-w-3xl space-y-10">
      <h1 className="font-display text-4xl font-bold">{t("aboutTitle")}</h1>
      {ABOUT[lang].map((s) => (
        <section key={s.h} className="space-y-3">
          <h2 className="font-display text-2xl font-bold">{s.h}</h2>
          {s.p.map((p, i) => <p key={i}>{p}</p>)}
        </section>
      ))}
      <Link href="/learn" className="btn btn-primary">{t("startLearning")}</Link>
    </div>
  );
}
