import TextType from "@/components/atoms/TextType";

interface HeroSectionProps {
    questrialClassName: string;
}

export default function HeroSection({ questrialClassName }: HeroSectionProps) {
    return (
        <section className="scroll-panel relative flex min-h-screen flex-col items-center justify-center px-4 pt-20">
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
                    <span className="font-medium text-xl text-[#202124]">Algo <span className="font-light text-[#202124]">Flow</span></span>
                </div>

                <h1 className={`text-5xl md:text-[4.5rem] leading-[1.05] text-center tracking-tight mb-12 max-w-5xl text-[#121317] ${questrialClassName}`}>
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
        </section>
    );
}
