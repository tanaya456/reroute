"use client";
import { useEffect, useRef, useState } from "react";
import { findSensitive, type SensitiveKind } from "@/lib/sensitive";
import { UI_TO_PROFILE_LANG, useI18n } from "@/lib/i18n";
import { LANGUAGES, type Profile } from "@/lib/schema";
import { SimpleMarkdown } from "./SimpleMarkdown";

type Msg = { role: "user" | "assistant"; content: string };
const MAX_TURNS = 12;

export function Sandbox({
  lessonId,
  profile,
  starter,
}: {
  lessonId: string;
  profile: Profile | null;
  starter: string;
}) {
  const { t, lang } = useI18n();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState<string>(profile?.language ?? UI_TO_PROFILE_LANG[lang]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [warning, setWarning] = useState<SensitiveKind[] | null>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setLanguage(profile?.language ?? UI_TO_PROFILE_LANG[lang]);
  }, [profile?.language, lang]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [messages]);

  const userTurns = messages.filter((m) => m.role === "user").length;
  const limitReached = userTurns >= MAX_TURNS;

  async function send(skipCheck = false) {
    const text = input.trim();
    if (!text || busy || limitReached) return;
    if (!skipCheck) {
      const found = findSensitive(text);
      if (found.length) {
        setWarning(found);
        return;
      }
    }
    setWarning(null);
    setError(null);
    const next: Msg[] = [...messages, { role: "user", content: text }];
    setMessages([...next, { role: "assistant", content: "" }]);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/sandbox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, language, profession: profile?.profession, messages: next }),
      });
      if (!res.ok || !res.body) {
        throw new Error(res.status === 429 ? t("errBusy") : res.status === 503 ? t("errSetup") : t("errGeneric"));
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages([...next, { role: "assistant", content: acc }]);
      }
    } catch (e) {
      setMessages(next.slice(0, -1));
      setInput(text);
      setError(e instanceof Error && e.message ? e.message : t("errGeneric"));
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  return (
    <section aria-labelledby="sandbox-h" className="card overflow-hidden">
      <div className="px-5 py-4 border-b border-line bg-surface-2 flex flex-wrap gap-3 items-center justify-between">
        <div>
          <h2 id="sandbox-h" className="font-bold text-lg flex items-center gap-2">
            <span aria-hidden>💬</span> {t("sbTitle")}
          </h2>
          <p className="text-xs text-ink-soft">{t("sbNote")}</p>
        </div>
        <label className="text-sm flex items-center gap-2">
          {t("replyIn")}
          <select className="field !min-h-[40px] !py-1 !w-auto" value={language} onChange={(e) => setLanguage(e.target.value)}>
            {LANGUAGES.map((l) => (
              <option key={l}>{l}</option>
            ))}
          </select>
        </label>
      </div>

      <div ref={logRef} className="p-5 space-y-4 max-h-[460px] min-h-[180px] overflow-y-auto" role="log" aria-live="polite" aria-label={t("conversation")}>
        {messages.length === 0 && (
          <div className="text-ink-soft text-sm">
            <p>{t("sbEmpty")}</p>
            <button className="btn btn-ghost mt-3 text-sm !min-h-[40px] text-left !rounded-2xl" onClick={() => setInput(starter)}>
              {t("useExample")}
            </button>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : "flex"}>
            <div
              className={`rounded-2xl px-4 py-3 max-w-[90%] ${
                m.role === "user" ? "bg-brand text-brand-ink whitespace-pre-wrap" : "bg-surface-2"
              }`}
            >
              <span className="sr-only">{m.role === "user" ? t("youSaid") : t("aiSaid")}</span>
              {m.role === "assistant" ? (
                m.content ? <SimpleMarkdown text={m.content} /> : <span className="animate-pulse">{t("thinking")}</span>
              ) : (
                m.content
              )}
            </div>
          </div>
        ))}
      </div>

      {warning && (
        <div role="alert" className="mx-5 mb-3 rounded-xl bg-warn-bg text-warn-ink p-4 text-sm">
          <p className="font-bold">{t("sensTitle", { items: warning.map((w) => t(`sens_${w}`)).join(", ") })}</p>
          <p className="mt-1">{t("sensBody")}</p>
          <div className="flex gap-2 mt-3">
            <button className="btn btn-primary !min-h-[40px] text-sm" onClick={() => { setWarning(null); inputRef.current?.focus(); }}>
              {t("editMsg")}
            </button>
            <button className="btn btn-ghost !min-h-[40px] text-sm" onClick={() => send(true)}>
              {t("sendAnyway")}
            </button>
          </div>
        </div>
      )}
      {error && (
        <p role="alert" className="mx-5 mb-3 rounded-xl bg-warn-bg text-warn-ink p-3 text-sm">
          {error}
        </p>
      )}

      <form
        className="p-4 border-t border-line flex flex-col sm:flex-row gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <label htmlFor="sandbox-input" className="sr-only">{t("yourMessage")}</label>
        <textarea
          id="sandbox-input"
          ref={inputRef}
          className="field flex-1 resize-y min-h-[80px]"
          maxLength={4000}
          placeholder={limitReached ? t("sbLimitPlaceholder") : t("sbPlaceholder")}
          value={input}
          disabled={limitReached}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />
        <div className="flex sm:flex-col gap-2">
          <button type="submit" className="btn btn-primary flex-1" disabled={busy || !input.trim() || limitReached}>
            {busy ? "…" : t("send")}
          </button>
          {messages.length > 0 && (
            <button type="button" className="btn btn-ghost text-sm" disabled={busy} onClick={() => { setMessages([]); setError(null); }}>
              {t("restart")}
            </button>
          )}
        </div>
      </form>
      <p className="px-5 pb-4 text-xs text-ink-soft">
        {t("sbLeft", { n: MAX_TURNS - userTurns })}
      </p>
    </section>
  );
}
