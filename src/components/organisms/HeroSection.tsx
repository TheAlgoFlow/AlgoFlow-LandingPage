import TextType from "@/components/atoms/TextType";
import Button from "@/components/atoms/Button";
import BrandLogo from "@/components/molecules/BrandLogo";

interface HeroSectionProps {
    questrialClassName: string;
}

export default function HeroSection({ questrialClassName }: HeroSectionProps) {
    return (
        <section className="scroll-panel relative flex min-h-screen flex-col items-center justify-center px-4 pt-20">
            <div className="scroll-panel-inner w-full flex flex-col items-center justify-center">
                <BrandLogo
                    className="mb-8 text-zinc-500"
                    imageSize={48}
                    textClassName="font-medium text-[25px] leading-none text-[#202124]"
                    flowClassName="font-light text-[#202124]"
                />

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
                        Try Algo Flow
                    </Button>
                    <Button as="a" href="#" variant="secondary" size="lg">
                        Explore use cases
                    </Button>
                </div>
            </div>
        </section>
    );
}
