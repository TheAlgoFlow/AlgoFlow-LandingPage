"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "@/hooks/useTranslation";

const FEATURE_META = [
  { accent: "#CCFF00", icon: "▷" },
  { accent: "#FF6B00", icon: "{}" },
  { accent: "#F900FF", icon: "⊞" },
  { accent: "#5200FF", icon: "</>" },
];

export default function FeaturesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean);

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
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-surface px-4 py-16 md:py-24" id="features">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-orange">
            {t("features.eyebrow")}
          </p>
          <h2 className="mb-4 text-3xl font-display font-semibold tracking-tight text-foreground md:text-4xl">
            {t("features.heading")}
          </h2>
          <p className="mx-auto max-w-2xl text-muted leading-relaxed">
            {t("features.subheading")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {FEATURE_META.map((meta, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="bg-background border border-border rounded-2xl p-7"
            >
              <div
                className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl text-lg font-bold"
                style={{ backgroundColor: `${meta.accent}20`, color: meta.accent }}
              >
                {meta.icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{t(`features.items.${index}.title`)}</h3>
              <p className="text-sm text-muted leading-relaxed">{t(`features.items.${index}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
