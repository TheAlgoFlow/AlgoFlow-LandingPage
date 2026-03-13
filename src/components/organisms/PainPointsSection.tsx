"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";

interface PainCard {
  badge: string;
  statement: string;
  description: string;
}

export default function PainPointsSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const transitionRef = useRef<HTMLParagraphElement>(null);

  const cards: PainCard[] = [
    {
      badge: t("painPoints.cards.0.badge"),
      statement: t("painPoints.cards.0.statement"),
      description: t("painPoints.cards.0.description"),
    },
    {
      badge: t("painPoints.cards.1.badge"),
      statement: t("painPoints.cards.1.statement"),
      description: t("painPoints.cards.1.description"),
    },
    {
      badge: t("painPoints.cards.2.badge"),
      statement: t("painPoints.cards.2.statement"),
      description: t("painPoints.cards.2.description"),
    },
    {
      badge: t("painPoints.cards.3.badge"),
      statement: t("painPoints.cards.3.statement"),
      description: t("painPoints.cards.3.description"),
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const transition = transitionRef.current;

    if (!section || cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          },
        }
      );

      if (transition) {
        gsap.fromTo(
          transition,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            delay: 0.5,
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FFF7ED] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-[#F97316]">
          {t("painPoints.eyebrow")}
        </p>

        {/* Heading */}
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#121317] md:text-4xl">
          {t("painPoints.heading")}
        </h2>

        {/* 2-column card grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={card.badge}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <span className="mb-4 block font-mono text-sm font-semibold text-[#F97316]">
                {card.badge}
              </span>
              <p className="mb-3 text-lg italic text-zinc-700">
                &ldquo;{card.statement}&rdquo;
              </p>
              <p className="text-sm text-zinc-500">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Emotional transition line */}
        <p
          ref={transitionRef}
          className="mt-12 text-center text-base italic text-zinc-500"
        >
          {t("painPoints.transitionLine")}
        </p>
      </div>
    </section>
  );
}
