"use client";

import { useTranslation } from "@/hooks/useTranslation";
import FeatureModule from "@/components/organisms/FeatureModule";

const MODULES = [
  { accentColor: "#F97316", reverse: false },
  { accentColor: "#8B5CF6", reverse: true },
  { accentColor: "#3B82F6", reverse: false },
];

export default function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F8FAFC] px-4 py-16 md:py-24" id="features">
      <div className="mx-auto max-w-5xl">
        {/* Intro block */}
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F97316]">
            {t("features.eyebrow")}
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#121317] md:text-4xl">
            {t("features.heading")}
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-500 leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Feature modules */}
        <div className="flex flex-col gap-6">
          {MODULES.map((mod, index) => (
            <div key={index} className="relative">
              <FeatureModule
                moduleIndex={index}
                reverse={mod.reverse}
                accentColor={mod.accentColor}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
