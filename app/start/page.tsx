"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { COMFORT, GOALS, LANGUAGES, type Profile } from "@/lib/schema";
import { UI_TO_PROFILE_LANG, useI18n } from "@/lib/i18n";
import { store } from "@/lib/storage";

export default function StartPage() {
  const router = useRouter();
  const { lang, t } = useI18n();
  const [form, setForm] = useState<Profile>({
    profession: "",
    trainedIn: "",
    livingIn: "",
    goal: GOALS[0],
    comfort: COMFORT[0],
    language: UI_TO_PROFILE_LANG[lang],
    hoursPerWeek: 2,
  });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = store.getProfile();
    if (saved) setForm(saved);
  }, []);

  const set = <K extends keyof Profile>(k: K, v: Profile[K]) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (form.profession.trim().length < 2) {
      setError(t("profErr"));
      return;
    }
    setBusy(true);
    setError(null);
    store.setProfile(form);
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(res.status === 429 ? t("errBusy") : res.status === 503 ? t("errSetup") : t("errGeneric"));
      store.setPlan(data.plan);
      router.push("/plan");
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : t("errGeneric"));
      setBusy(false);
    }
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-display text-4xl font-bold">{t("startTitle")}</h1>
      <p className="text-ink-soft mt-2">
        {t("startBody")}
      </p>

      <form onSubmit={submit} className="card p-6 sm:p-8 mt-8 space-y-6" noValidate>
        <div>
          <label htmlFor="profession" className="font-bold block mb-1.5">{t("q1")}</label>
          <input id="profession" className="field" placeholder={t("q1ph")} value={form.profession} maxLength={120} onChange={(e) => set("profession", e.target.value)} required aria-describedby={error ? "form-error" : undefined} />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="trainedIn" className="font-bold block mb-1.5">{t("q2")}</label>
            <input id="trainedIn" className="field" placeholder={t("countryPh")} value={form.trainedIn} maxLength={80} onChange={(e) => set("trainedIn", e.target.value)} />
          </div>
          <div>
            <label htmlFor="livingIn" className="font-bold block mb-1.5">{t("q2b")}</label>
            <input id="livingIn" className="field" placeholder={t("countryPh")} value={form.livingIn} maxLength={80} onChange={(e) => set("livingIn", e.target.value)} />
          </div>
        </div>

        <fieldset>
          <legend className="font-bold mb-2">{t("q3")}</legend>
          <div className="grid gap-2">
            {GOALS.map((g) => (
              <label key={g} className={`flex items-center gap-3 rounded-xl border-2 px-4 py-3 cursor-pointer ${form.goal === g ? "border-brand bg-brand-soft" : "border-line"}`}>
                <input type="radio" name="goal" value={g} checked={form.goal === g} onChange={() => set("goal", g)} className="accent-[var(--brand)] w-5 h-5" />
                {t(`goal:${g}`)}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="font-bold mb-2">{t("q4")}</legend>
          <div className="flex flex-wrap gap-2">
            {COMFORT.map((c) => (
              <label key={c} className={`rounded-full border-2 px-4 py-2 cursor-pointer ${form.comfort === c ? "border-brand bg-brand-soft" : "border-line"}`}>
                <input type="radio" name="comfort" value={c} checked={form.comfort === c} onChange={() => set("comfort", c)} className="sr-only" />
                {t(`comfort:${c}`)}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="language" className="font-bold block mb-1.5">{t("q5")}</label>
            <select id="language" className="field" value={form.language} onChange={(e) => set("language", e.target.value as Profile["language"])}>
              {LANGUAGES.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="hours" className="font-bold block mb-1.5">{t("q6", { n: form.hoursPerWeek })}</label>
            <input id="hours" type="range" min={1} max={10} value={form.hoursPerWeek} onChange={(e) => set("hoursPerWeek", Number(e.target.value))} className="w-full accent-[var(--brand)] h-12" />
          </div>
        </div>

        {error && <p id="form-error" role="alert" className="rounded-xl bg-warn-bg text-warn-ink p-3">{error}</p>}

        <button type="submit" className="btn btn-primary w-full text-lg" disabled={busy}>
          {busy ? t("building") : t("buildBtn")}
        </button>
        <p className="text-xs text-ink-soft text-center">
          {t("startNote")}
        </p>
      </form>
    </div>
  );
}
