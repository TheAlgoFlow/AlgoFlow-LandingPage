"use client";

import Button from "@/components/atoms/Button";
import { useTranslation } from "@/hooks/useTranslation";

export default function CtaSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl px-8 py-16 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent-orange">
            {t("cta.eyebrow")}
          </p>
          <h2 className="mb-4 text-3xl font-display font-semibold tracking-tight text-foreground md:text-4xl">
            {t("cta.heading")}
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-muted">
            {t("cta.subtext")}
          </p>
          
          {/* Wrap the button in a flex container to center it and prevent stretching */}
          <div className="flex justify-center">
            <Button 
              as="a" 
              href="https://app.thealgoflow.com" 
              variant="primary" 
              size="md" /* Changed from xs to md for better proportions */
              className="w-fit px-8" /* w-fit ensures it hugs the text */
            >
              {t("cta.cta")}
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}