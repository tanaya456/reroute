"use client";
import { useI18n } from "@/lib/i18n";

/** Shown on every page when the interface is in a language that hasn't been reviewed by native speakers. */
export function TranslationNotice() {
  const { lang, setLang, t } = useI18n();
  if (lang === "en") return null;
  return (
    <div className="bg-surface-2 border-b border-line text-sm no-print">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 flex flex-wrap gap-x-3 gap-y-1 items-center">
        <span aria-hidden>ⓘ</span>
        <p className="text-ink-soft flex-1 min-w-[200px]">{t("translationNotice")}</p>
        <button className="underline font-bold text-brand" onClick={() => setLang("en")} lang="en">
          {t("viewEnglish")}
        </button>
      </div>
    </div>
  );
}
