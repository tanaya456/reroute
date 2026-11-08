"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n, type UiLang } from "@/lib/i18n";
import { TranslationNotice } from "./TranslationNotice";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const path = usePathname();
  const tabs = [
    { href: "/learn", label: t("navLearn") },
    { href: "/safety", label: t("navSafety") },
    { href: "/about", label: t("navAbout") },
  ];
  return (
    <header className="border-b border-line bg-surface/80 backdrop-blur sticky top-0 z-20">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 btn btn-primary">
        {t("skip")}
      </a>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Link href="/" className="font-display text-2xl font-bold text-brand tracking-tight">
          Reroute
        </Link>
        <nav aria-label="Main" className="flex gap-1 order-3 sm:order-none w-full sm:w-auto">
          {tabs.map((tab) => {
            const active = path.startsWith(tab.href);
            return (
              <Link
                key={tab.href}
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={`px-4 py-2 rounded-full font-bold min-h-[44px] inline-flex items-center ${
                  active ? "bg-brand-soft text-brand" : "text-ink-soft hover:text-ink"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
        <label className="ml-auto flex items-center gap-2 text-sm text-ink-soft">
          <span aria-hidden>🌐</span>
          <span className="sr-only">{t("language")}</span>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as UiLang)}
            className="field !min-h-[40px] !py-1 !w-auto text-ink"
          >
            <option value="en">English</option>
            <option value="es" lang="es">Español</option>
            <option value="hi" lang="hi">हिन्दी</option>
          </select>
        </label>
      </div>
      <TranslationNotice />
    </header>
  );
}
