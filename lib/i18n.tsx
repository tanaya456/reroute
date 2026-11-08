"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { store } from "./storage";
import { STRINGS, type StringKey } from "./strings";

export type UiLang = "en" | "es" | "hi";
export type { StringKey };

type Vars = Record<string, string | number>;
type Ctx = { lang: UiLang; setLang: (l: UiLang) => void; t: (k: StringKey, vars?: Vars) => string };

function format(s: string, vars?: Vars) {
  return vars ? s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? `{${k}}`)) : s;
}

const I18nCtx = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k, v) => format(STRINGS.en[k], v) });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<UiLang>("en");
  useEffect(() => {
    const saved = store.getLang();
    if (saved === "en" || saved === "es" || saved === "hi") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: UiLang) => {
    setLangState(l);
    store.setLang(l);
  };
  const t = (k: StringKey, vars?: Vars) => format(STRINGS[lang][k] ?? STRINGS.en[k], vars);
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
}

export const useI18n = () => useContext(I18nCtx);

export const UI_TO_PROFILE_LANG = { en: "English", es: "Español", hi: "हिन्दी" } as const;
