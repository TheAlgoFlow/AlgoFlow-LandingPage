"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "@/components/atoms/Button";

const CATEGORIES = [
  { name: "Sorting", description: "Bubble, Merge, Quick, Heap, and more", accent: "#CCFF00", icon: "⇅" },
  { name: "Searching", description: "Binary Search, BFS, DFS, A*", accent: "#FF6B00", icon: "⌕" },
  { name: "Data Structures", description: "Arrays, Trees, Graphs, Heaps", accent: "#F900FF", icon: "⬡" },
  { name: "Dynamic Programming", description: "Fibonacci, Knapsack, LCS", accent: "#5200FF", icon: "◈" },
];

export default function CategoriesSection() {
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
    <section ref={sectionRef} className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Intro */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-accent-orange">
            Categories
          </p>
          <h2 className="mb-4 text-3xl font-display font-semibold tracking-tight text-foreground md:text-4xl">
            Four pillars of computer science
          </h2>
          <p className="mx-auto max-w-2xl text-muted leading-relaxed">
            Every algorithm you need for interviews and beyond, visualized and explained.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.name}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="group relative overflow-hidden bg-surface border border-border rounded-2xl p-7"
            >
              {/* Corner glow */}
              <div
                className="pointer-events-none absolute top-0 right-0 w-32 h-32 rounded-bl-full"
                style={{ background: `${cat.accent}1F` }}
              />

              {/* Icon */}
              <div
                className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-xl text-xl font-bold relative z-10"
                style={{ backgroundColor: `${cat.accent}20`, color: cat.accent }}
              >
                {cat.icon}
              </div>

              <h3 className="mb-1 text-lg font-semibold text-foreground relative z-10">{cat.name}</h3>
              <p className="text-sm text-muted leading-relaxed mb-4 relative z-10">{cat.description}</p>

              {/* Bottom hover line */}
              <div
                className="h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded-full relative z-10"
                style={{ backgroundColor: cat.accent }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Button as="a" href="https://app.thealgoflow.com" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
            Explore All Algorithms
          </Button>
        </div>
      </div>
    </section>
  );
}
