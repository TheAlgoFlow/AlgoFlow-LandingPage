"use client";

import { useTranslation } from "@/hooks/useTranslation";

const STAT_KEYS = [0, 1, 2];

export default function StatsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-foreground py-10">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
          {STAT_KEYS.map((i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="font-display text-3xl italic text-accent-lime">
                {t(`stats.items.${i}.value`)}
              </span>
              <span className="text-sm text-white/60">
                {t(`stats.items.${i}.label`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
