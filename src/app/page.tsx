import Script from "next/script";
import LandingTemplate from "@/components/templates/LandingTemplate";

import HeroSection from "@/components/organisms/HeroSection";
import StatsSection from "@/components/organisms/StatsSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import CategoriesSection from "@/components/organisms/CategoriesSection";
import PainPointsSection from "@/components/organisms/PainPointsSection";
import DemoSection from "@/components/organisms/DemoSection";
import FaqSection from "@/components/organisms/FaqSection";
import CtaSection from "@/components/organisms/CtaSection";

export default function Home() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-G397DGSNC6"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-G397DGSNC6');
        `}
      </Script>
      <LandingTemplate>
        <HeroSection />
        <StatsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CategoriesSection />
        <PainPointsSection />
        <DemoSection />
        <FaqSection />
        <CtaSection />
      </LandingTemplate>
    </>
  );
}
