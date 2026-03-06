import Image from "next/image";
import { Questrial, Inter } from "next/font/google";
import Script from "next/script";
import TextType from "./TextType";
import ScrollSections from "./ScrollSections";

const questrial = Questrial({ weight: '400', subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

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
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Invisible (Transparent) Header */}
        <header className={`fixed top-0 w-full z-50 px-24 pt-2 pb-6 flex items-center justify-between bg-transparent ${inter.className}`}>
          <div className="flex items-center gap-16">
            <div className="flex items-center gap-2">
              {/* Mock Logo */}
              <div className="w-8 h-8 relative flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 22H22L12 2Z" fill="url(#paint0_linear)" />
                  <defs>
                    <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#4285F4" />
                      <stop offset="0.5" stopColor="#34A853" />
                      <stop offset="1" stopColor="#FBBC05" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-semibold text-xl flex items-center gap-1">
                Algo <span className="font-light text-zinc-500">Flow</span>
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-[15.8px] font-medium text-zinc-600">
              <a href="#" className="hover:text-black transition-colors">Product</a>
              <a href="#" className="hover:text-black transition-colors flex items-center gap-1">
                Use Cases
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 mt-[2px]"><path d="m6 9 6 6 6-6" /></svg>
              </a>
              <a href="#" className="hover:text-black transition-colors">Pricing</a>
              <a href="#" className="hover:text-black transition-colors">Blog</a>
              <a href="#" className="hover:text-black transition-colors flex items-center gap-1">
                Resources
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 mt-[2px]"><path d="m6 9 6 6 6-6" /></svg>
              </a>
            </nav>
          </div>

          <div className="flex items-center">
            <a href="https://github.com/TheAlgoFlow/AlgoFlow" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-5 py-2.5 rounded-full text-[17px] font-medium hover:bg-zinc-800 shadow-md transition-all flex items-center gap-2 hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="scroll-panel relative flex min-h-screen flex-col items-center justify-center px-4 pt-20">
          <div className="scroll-panel-inner w-full flex flex-col items-center justify-center">
            <div className="mb-8 flex items-center justify-center gap-2 text-zinc-500">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 opacity-80" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H22L12 2Z" fill="url(#paint1_linear)" />
                <defs>
                  <linearGradient id="paint1_linear" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4285F4" />
                    <stop offset="0.5" stopColor="#34A853" />
                    <stop offset="1" stopColor="#FBBC05" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-medium text-xl">Algo <span className="font-light">Flow</span></span>
            </div>

            <h1 className={`text-5xl md:text-[4.5rem] leading-[1.05] text-center tracking-tight mb-12 max-w-5xl text-zinc-900 ${questrial.className}`}>
              <TextType
                text={["DSA Visualizer", "Master algorithms visually", "Learn. Visualize. Conquer."]}
                as="span"
                typingSpeed={70}
                deletingSpeed={40}
                pauseDuration={4250}
                showCursor
                cursorCharacter="|"
                loop
              />
            </h1>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 z-10 w-full justify-center">
              <a href="https://app.thealgoflow.com" target="_blank" rel="noopener noreferrer" className="bg-[#121317] text-white px-8 py-3.5 rounded-full font-medium hover:bg-[#2F3034] shadow-sm transition-all flex items-center gap-3 hover:shadow-md text-lg">
                Test now
              </a>
              <a href="#" className="bg-[#F8F8FB] border border-zinc-300 text-zinc-600 px-8 py-3.5 rounded-full font-medium hover:bg-[#F0F1F5] transition-colors text-lg">
                Explore use cases
              </a>
            </div>


          </div>
        </main>

        <ScrollSections />
      </div>
    </>
  );
}
