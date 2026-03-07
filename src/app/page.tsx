import Image from "next/image";
import { Questrial } from "next/font/google";
import Script from "next/script";
import TextType from "@/components/atoms/TextType";
import Header from "@/components/organisms/Header";

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
      <div className="min-h-screen bg-white text-zinc-900 font-sans relative">
        {/* Background decoration to match the image's subtle dotted/starry background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>

        {/* Invisible (Transparent) Header */}
        <Header />

        {/* Main Content */}
        <HeroSection questrialClassName={questrial.className} />

        <AppPreviewSection />
      </div>
    </>
  );
}
