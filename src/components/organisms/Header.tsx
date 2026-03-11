"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Button from "@/components/atoms/Button";
import GithubIcon from "@/components/atoms/GithubIcon";
import NavLink from "@/components/atoms/NavLink";
import BrandLogo from "@/components/molecules/BrandLogo";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [language, setLanguage] = useState<"EN" | "PT">("EN");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-50 px-16 pt-1 pb-5 flex items-center justify-between bg-[#FFFFFF] transition-transform duration-500 ease-in-out ${isScrolled ? '-translate-y-full' : 'translate-y-0'} ${inter.className}`}>

            {/* Left Side: Logo + Nav */}
            <div className="flex items-center gap-16">

                {/* Logo */}
                <BrandLogo imageSize={37} textClassName="font-semibold text-[17.5px] text-inherit" />

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium text-[#45474D]">
                    <NavLink href="#">Product</NavLink>
                    <NavLink href="#" hasDropdown>Use Cases</NavLink>
                    <NavLink href="#">Pricing</NavLink>
                    <NavLink href="#">Blog</NavLink>
                    <NavLink href="#" hasDropdown>Resources</NavLink>
                </nav>
            </div>

            {/* Right Section: Actions */}
            <div className="flex items-center gap-4">
                {/* Mobile Menu Toggle Button */}
                <div className="flex lg:hidden items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <button
                        onClick={() => setLanguage((lang) => (lang === "EN" ? "PT" : "EN"))}
                        className="mt-1 text-[14px] font-medium text-[#45474D] hover:text-black transition-colors uppercase"
                        aria-label="Switch language"
                    >
                        {language === "EN" ? "US" : "BR"}
                    </button>
                    <Button as="a" href="https://github.com/TheAlgoFlow/AlgoFlow" target="_blank" rel="noopener noreferrer" variant="primary" size="sm" className="mt-1 hover:scale-105 hover:bg-zinc-800">
                        GitHub
                        <GithubIcon />
                    </Button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-t border-black/5 shadow-lg lg:hidden flex flex-col px-6 py-4 animate-in slide-in-from-top-2 duration-200 z-50">
                    <nav className="flex flex-col gap-4 text-[15px] font-medium text-[#45474D]">
                        <NavLink href="#" mobile>Product</NavLink>
                        <NavLink href="#" mobile hasDropdown>Use Cases</NavLink>
                        <NavLink href="#" mobile>Pricing</NavLink>
                        <NavLink href="#" mobile>Blog</NavLink>
                        <NavLink href="#" mobile hasDropdown>Resources</NavLink>
                    </nav>
                    <div className="mt-6 flex flex-col gap-3">
                        <button
                            onClick={() => setLanguage((lang) => (lang === "EN" ? "PT" : "EN"))}
                            className="text-[15px] font-medium text-[#45474D] py-2 text-left"
                            aria-label="Switch language"
                        >
                            Language: {language === "EN" ? "US (English)" : "BR (Portuguese)"}
                        </button>
                        <Button as="a" href="https://github.com/TheAlgoFlow/AlgoFlow" target="_blank" rel="noopener noreferrer" variant="primary" size="md" fullWidth className="hover:bg-zinc-800">
                            GitHub
                            <GithubIcon />
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
