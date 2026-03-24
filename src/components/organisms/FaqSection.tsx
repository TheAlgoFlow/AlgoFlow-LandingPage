"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const CHEVRON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQ_ITEM_COUNT = 5;

export default function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        {/* Eyebrow */}
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-accent-orange">
          {t("faq.eyebrow")}
        </p>

        {/* Heading */}
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {t("faq.heading")}
        </h2>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {Array.from({ length: FAQ_ITEM_COUNT }, (_, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-lg border border-border bg-surface"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="font-semibold text-foreground">
                    {t(`faq.items.${i}.q`)}
                  </span>
                  <span
                    className={`shrink-0 text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    {CHEVRON}
                  </span>
                </button>
                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="px-5 pb-4 text-sm leading-relaxed text-muted"
                  >
                    {t(`faq.items.${i}.a`)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
