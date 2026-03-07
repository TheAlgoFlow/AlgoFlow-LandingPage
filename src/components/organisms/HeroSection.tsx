import TextType from "@/components/atoms/TextType";
import LogoIcon from "@/components/atoms/LogoIcon";
import Button from "@/components/atoms/Button";

interface HeroSectionProps {
    questrialClassName: string;
}

export default function HeroSection({ questrialClassName }: HeroSectionProps) {
    return (
        <section className="scroll-panel relative flex min-h-screen flex-col items-center justify-center px-4 pt-20">
            <div className="scroll-panel-inner w-full flex flex-col items-center justify-center">
                <div className="mb-8 flex items-center justify-center gap-2 text-zinc-500">
                    <LogoIcon className="w-6 h-6 opacity-80" />
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
                    <Button as="a" href="https://app.thealgoflow.com" target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
                        Test now
                    </Button>
                    <Button as="a" href="#" variant="secondary" size="lg">
                        Explore use cases
                    </Button>
                </div>
            </div>
        </section>
    );
}
