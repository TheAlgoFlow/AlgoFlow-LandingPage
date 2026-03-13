"use client";

import { useState } from "react";
import Image from "next/image"; // Import Image component
import Button from "@/components/atoms/Button";
import { useTranslation } from "@/hooks/useTranslation";

const STEP_ICONS = [
  // Choose - grid/list
  <svg key="choose" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
  // Visualize - play
  <svg key="visualize" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>,
  // Understand - code
  <svg key="understand" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
];

const STEP_IMAGES = [
  "/assets/Img-1.png",
  "/assets/Img-2.png",
  "/assets/Img-3.png",
];

export default function HowItWorksSection() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const stepNumber = String(activeStep + 1).padStart(2, "0");

  return (
    <section className="bg-[#F8FAFC] px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Eyebrow */}
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-[#F97316]">
          {t("howItWorks.eyebrow")}
        </p>

        {/* Heading */}
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight text-[#121317] md:text-4xl">
          {t("howItWorks.heading")}
        </h2>

        {/* Tab pills */}
        <div className="mb-8 grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-center md:gap-3">
          {[0, 1, 2].map((index) => {
            const num = String(index + 1).padStart(2, "0");
            const label = t(`howItWorks.steps.${index}.label`);
            const isActive = activeStep === index;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors md:px-5 ${
                  isActive
                    ? "bg-[#121317] text-white"
                    : "border border-zinc-200 bg-[#F8F8FB] text-zinc-600 hover:bg-[#F0F1F5]"
                }`}
              >
                <span className={isActive ? "text-[#F97316]" : "text-zinc-400"}>
                  {num}
                </span>
                {label}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-2">
            {/* Left panel - text */}
            <div className="relative p-8 sm:p-10">
              {/* Watermark */}
              <span
                className="pointer-events-none absolute left-4 top-4 text-[8rem] font-bold leading-none text-[#F97316] opacity-[0.08] md:left-6 md:top-6 md:text-[10rem]"
                aria-hidden
              >
                {stepNumber}
              </span>

              <div className="relative">
                {/* Icon chip */}
                <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-[#F97316] p-2 text-white">
                  {STEP_ICONS[activeStep]}
                </div>

                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[#F97316]">
                  {t(`howItWorks.steps.${activeStep}.stepLabel`)}
                </p>
                <h3 className="mb-4 text-2xl font-semibold text-[#121317] md:text-3xl">
                  {t(`howItWorks.steps.${activeStep}.title`)}
                </h3>
                <p className="text-zinc-600 leading-relaxed">
                  {t(`howItWorks.steps.${activeStep}.description`)}
                </p>
              </div>
            </div>

            {/* Right panel - image */}
            <div className="flex min-h-[240px] items-center justify-center border-t border-zinc-200 bg-zinc-100 p-6 sm:min-h-[320px] sm:border-l sm:border-t-0">
              <div className="relative h-full w-full">
                <Image
                  src={STEP_IMAGES[activeStep]}
                  alt={t(`howItWorks.steps.${activeStep}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Button
            as="a"
            href="https://app.thealgoflow.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="lg"
          >
            {t("howItWorks.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
