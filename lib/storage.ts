"use client";
// Per-browser storage only. Nothing here is sent to a server or shared.
// Every access is wrapped because storage can be unavailable (private mode, blocked).

import type { Plan, Profile } from "./schema";

const KEYS = { profile: "reroute.profile", plan: "reroute.plan", done: "reroute.done", lang: "reroute.lang" } as const;

function read<T>(key: string): T | null {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}
function write(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable: the app still works for this visit */
  }
}

export const store = {
  getProfile: () => read<Profile>(KEYS.profile),
  setProfile: (p: Profile) => write(KEYS.profile, p),
  getPlan: () => read<Plan>(KEYS.plan),
  setPlan: (p: Plan) => write(KEYS.plan, p),
  getDone: () => read<string[]>(KEYS.done) ?? [],
  toggleDone: (id: string) => {
    const done = new Set(read<string[]>(KEYS.done) ?? []);
    if (done.has(id)) done.delete(id);
    else done.add(id);
    write(KEYS.done, [...done]);
    return [...done];
  },
  getLang: () => read<string>(KEYS.lang),
  setLang: (l: string) => write(KEYS.lang, l),
  clearAll: () => {
    try {
      Object.values(KEYS).forEach((k) => window.localStorage.removeItem(k));
    } catch {}
  },
};
