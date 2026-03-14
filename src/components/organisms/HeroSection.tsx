"use client";

import Button from "@/components/atoms/Button";
import BrandLogo from "@/components/molecules/BrandLogo";

export default function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20">
            <BrandLogo className="mb-8" imageSize={48} textClassName="font-medium text-[25px] leading-none text-foreground" />

            <h1 className="font-display text-5xl md:text-[5rem] leading-[1.05] text-center tracking-tight mb-6 max-w-4xl text-foreground">
                Master Algorithms.{" "}
                <span className="italic" style={{ color: "#5200FF" }}>Actually.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted text-center max-w-2xl leading-relaxed mb-12">
                Step-by-step interactive visualizations for sorting, searching, data structures, and dynamic programming — the way your textbook never could.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-10">
                <Button as="a" href="https://app.thealgoflow.com" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                    Start Learning Free
                </Button>
                <Button as="a" href="#features" variant="secondary" size="lg">
                    See How It Works
                </Button>
            </div>
        </section>
    );
}
