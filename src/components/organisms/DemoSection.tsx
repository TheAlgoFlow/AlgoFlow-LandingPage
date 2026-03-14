"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Button from "@/components/atoms/Button";

export default function DemoSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface px-4 py-16 md:py-24">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent-orange">
          {t("demo.eyebrow")}
        </p>
        <h2 className="mb-8 text-3xl font-display font-semibold tracking-tight text-foreground md:text-4xl">
          {t("demo.heading")}
        </h2>

        <div className="mx-auto mb-8 max-w-3xl rounded-2xl bg-[#1a1a1a] p-3 shadow-2xl">
          <div className="aspect-video w-full rounded-lg bg-black" />
        </div>

        <div className="flex justify-center">
          <Button
            as="a"
            href="https://app.thealgoflow.com"
            variant="primary"
            size="md"
            className="w-fit px-8"
          >
            {t("demo.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
}
