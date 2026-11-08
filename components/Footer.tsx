"use client";
import Link from "next/link";
import { useState } from "react";
import { store } from "@/lib/storage";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const [cleared, setCleared] = useState(false);
  return (
    <footer className="border-t border-line mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-sm text-ink-soft flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        <p>
          {t("footerNote")}{" "}
          <Link href="/about" className="underline">
            {t("footerHow")}
          </Link>
          .
        </p>
        <div className="flex items-center gap-3">
          <span role="status" aria-live="polite">{cleared ? t("cleared") : ""}</span>
          <button
            className="btn btn-ghost !min-h-[40px] !py-1 text-sm"
            onClick={() => {
              store.clearAll();
              setCleared(true);
            }}
          >
            {t("clearData")}
          </button>
        </div>
      </div>
    </footer>
  );
}
