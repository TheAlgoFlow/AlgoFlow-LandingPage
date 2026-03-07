'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function AppPreviewSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const section = sectionRef.current;
        const box = boxRef.current;

        if (!section || !box) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(box,
                { scale: 0.08, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.4,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 70%', // Triggers when the top of the section is 70% down the screen
                        once: true, // Only plays once
                    }
                }
            );
        }, section);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="scroll-panel relative flex w-full flex-col items-center justify-center bg-zinc-50 min-h-[120vh]"
        >
            <div className="scroll-panel-inner w-full flex flex-col items-center justify-center min-h-[130vh]">
                <div className="w-[98vw] max-w-[2400px]">
                    <div
                        ref={boxRef}
                        className="w-full aspect-[16/10] md:aspect-video bg-[#000000] rounded-3xl shadow-2xl border border-zinc-800/50 overflow-hidden relative opacity-0"
                    >
                        {/* Inner content of the screen will go here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
