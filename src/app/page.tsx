import Image from "next/image";
import { Questrial } from "next/font/google";
import Script from "next/script";
import TextType from "@/components/atoms/TextType";
import LandingTemplate from "@/components/templates/LandingTemplate";

import HeroSection from "@/components/organisms/HeroSection";
import AppPreviewSection from "@/components/organisms/AppPreviewSection";

const questrial = Questrial({ weight: '400', subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <head>
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
      </head>
      <LandingTemplate>
        {/* Main Content */}
        <HeroSection questrialClassName={questrial.className} />

        <AppPreviewSection />
      </LandingTemplate>
    </>
  );
}
