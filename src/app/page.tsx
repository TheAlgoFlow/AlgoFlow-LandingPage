import Image from "next/image";
import { Questrial } from "next/font/google";
import Script from "next/script";
import TextType from "@/components/atoms/TextType";
import LandingTemplate from "@/components/templates/LandingTemplate";

import HeroSection from "@/components/organisms/HeroSection";
import HowItWorksSection from "@/components/organisms/HowItWorksSection";
import PainPointsSection from "@/components/organisms/PainPointsSection";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import DemoSection from "@/components/organisms/DemoSection";
import FaqSection from "@/components/organisms/FaqSection";
import CtaSection from "@/components/organisms/CtaSection";

const questrial = Questrial({ weight: '400', subsets: ["latin"] });

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
        {/* Main Content */}
        <HeroSection questrialClassName={questrial.className} />
        <HowItWorksSection />
        <PainPointsSection />
        <FeaturesSection />
        <DemoSection />
        <FaqSection />
        <CtaSection />
      </LandingTemplate>
    </>
  );
}
