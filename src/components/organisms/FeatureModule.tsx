"use client";

import { useState } from "react";
import Button from "@/components/atoms/Button";
import { useTranslation } from "@/hooks/useTranslation";

interface FeatureModuleProps {
  moduleIndex: number;
  reverse?: boolean;
  accentColor: string;
}

export default function FeatureModule({
  moduleIndex,
  reverse = false,
  accentColor,
}: FeatureModuleProps) {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const badge = t(`features.modules.${moduleIndex}.badge`);
  const title = t(`features.modules.${moduleIndex}.title`);
  const subtitle = t(`features.modules.${moduleIndex}.subtitle`);
  const cta = t(`features.modules.${moduleIndex}.cta`);
  const items = [0, 1, 2].map((i) => ({
    label: t(`features.modules.${moduleIndex}.items.${i}.label`),
    description: t(`features.modules.${moduleIndex}.items.${i}.description`),
  }));

  const videoSrc = `/assets/features/module-${moduleIndex}-${activeItem}.mp4`;

  return (
    <div
      className={`flex flex-col gap-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:grid md:grid-cols-5 md:p-10 ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.06]"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accentColor}, transparent)`,
        }}
        aria-hidden
      />

      {/* Left text stack — 2 cols */}
      <div
        className={`relative flex flex-col gap-5 md:col-span-2 ${reverse ? "[direction:ltr]" : ""}`}
      >
        {/* Badge */}
        <span
          className="inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white"
          style={{ backgroundColor: accentColor }}
        >
          {badge}
        </span>

        <div>
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-[#121317] md:text-3xl">
            {title}
          </h3>
          <p className="text-zinc-500 leading-relaxed">{subtitle}</p>
        </div>

        {/* Clickable feature list */}
        <ul className="flex flex-col gap-2">
          {items.map((item, i) => {
            const isActive = activeItem === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveItem(i);
                    setVideoLoaded(false);
                  }}
                  className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                    isActive
                      ? "border-transparent shadow-sm text-[#121317]"
                      : "border-zinc-200 bg-transparent text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: `${accentColor}14`, borderColor: `${accentColor}40` }
                      : {}
                  }
                >
                  <span
                    className="mb-0.5 flex items-center gap-2 font-medium"
                    style={isActive ? { color: accentColor } : {}}
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: isActive ? accentColor : "#d1d5db" }}
                      aria-hidden
                    />
                    {item.label}
                  </span>
                  {isActive && (
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500 pl-3.5">
                      {item.description}
                    </p>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div>
          <Button
            as="a"
            href="https://app.thealgoflow.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            size="md"
          >
            {cta}
          </Button>
        </div>
      </div>

      {/* Right video panel — 3 cols */}
      <div
        className={`relative overflow-hidden rounded-xl bg-zinc-900 md:col-span-3 ${reverse ? "[direction:ltr]" : ""}`}
        style={{ minHeight: "280px" }}
      >
        {/* Skeleton shown while video is loading */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-full w-full animate-pulse bg-zinc-800 rounded-xl" />
            <div className="absolute flex flex-col items-center gap-3 opacity-30">
              <div className="h-10 w-10 rounded-full border-2 border-zinc-500" />
              <div className="h-2 w-24 rounded-full bg-zinc-600" />
            </div>
          </div>
        )}

        <video
          key={`${moduleIndex}-${activeItem}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`h-full w-full rounded-xl object-cover transition-opacity duration-300 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Subtle inner border overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" aria-hidden />
      </div>
    </div>
  );
}
