"use client";
import { useEffect, useState } from "react";

type Item = { id: string; title: string; icon: string };

export function SafetyNav({ topics, label }: { topics: Item[]; label: string }) {
  const [active, setActive] = useState(topics[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );
    topics.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [topics]);

  return (
    <nav aria-label={label} className="mb-8 lg:mb-0">
      <ul className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible lg:sticky lg:top-24 pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
        {topics.map((t) => (
          <li key={t.id} className="shrink-0">
            <a
              href={`#${t.id}`}
              aria-current={active === t.id ? "true" : undefined}
              className={`flex gap-2 items-center rounded-full lg:rounded-xl px-4 py-2 text-sm font-bold border whitespace-nowrap lg:whitespace-normal ${
                active === t.id ? "bg-brand-soft text-brand border-transparent" : "border-line text-ink-soft hover:text-ink"
              }`}
            >
              <span aria-hidden>{t.icon}</span>
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
