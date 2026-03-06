"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const sections = [
    {
        id: 1,
        label: "Visualize",
        title: "See algorithms come to life",
        description:
            "Step through sorting, graph traversal, dynamic programming and more — one frame at a time. Finally understand what's happening under the hood.",
        bg: "#F5F5F8",
    },
    {
        id: 2,
        label: "Practice",
        title: "Learn by doing, not reading",
        description:
            "Interact directly with every data structure. Build intuition through play, not memorization. AlgoFlow makes abstract concepts feel obvious.",
        bg: "#F0F1F5",
    },
    {
        id: 3,
        label: "Conquer",
        title: "Ace your next interview",
        description:
            "From arrays to AVL trees, from BFS to Dijkstra — master every topic that shows up in technical interviews at top companies.",
        bg: "#ECEDF2",
    },
];

export default function ScrollSections() {
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const panels = gsap.utils.toArray<HTMLElement>(".scroll-panel");
            // animate all panels except the last one
            const animatedPanels = panels.slice(0, -1);

            animatedPanels.forEach((panel) => {
                const inner = panel.querySelector<HTMLElement>(".scroll-panel-inner");
                if (!inner) return;

                const panelHeight = inner.offsetHeight;
                const windowHeight = window.innerHeight;
                const difference = panelHeight - windowHeight;
                const fakeScrollRatio =
                    difference > 0 ? difference / (difference + windowHeight) : 0;

                if (fakeScrollRatio) {
                    panel.style.marginBottom = panelHeight * fakeScrollRatio + "px";
                }

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: panel,
                        start: "bottom bottom",
                        end: () =>
                            fakeScrollRatio
                                ? `+=${inner.offsetHeight}`
                                : "bottom top",
                        pinSpacing: false,
                        pin: true,
                        scrub: true,
                    },
                });

                if (fakeScrollRatio) {
                    tl.to(inner, {
                        yPercent: -100,
                        y: window.innerHeight,
                        duration: 1 / (1 - fakeScrollRatio) - 1,
                        ease: "none",
                    });
                }

                tl.fromTo(
                    panel,
                    { scale: 1, opacity: 1 },
                    { scale: 0.92, opacity: 0.5, duration: 0.9 }
                ).to(panel, { opacity: 0, duration: 0.1 });
            });
        }, wrapperRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="relative w-full">
            {sections.map((section) => (
                <section
                    key={section.id}
                    className="scroll-panel relative w-full min-h-[120vh] flex items-center justify-center overflow-hidden rounded-2xl"
                    style={{ backgroundColor: section.bg }}
                >
                    <div className="scroll-panel-inner w-full min-h-[120vh] flex items-center justify-center px-8">
                        <div className="max-w-3xl mx-auto text-center py-32">
                            {/* Label pill */}
                            <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/70 border border-zinc-200 text-zinc-500 text-sm font-medium tracking-wide">
                                {section.label}
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-6xl font-semibold text-zinc-900 leading-[1.1] tracking-tight mb-6">
                                {section.title}
                            </h2>

                            {/* Body */}
                            <p className="text-zinc-500 text-xl leading-relaxed max-w-2xl mx-auto">
                                {section.description}
                            </p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
