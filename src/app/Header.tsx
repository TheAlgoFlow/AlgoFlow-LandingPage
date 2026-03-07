"use client";

import { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
                    <span className="font-semibold text-base flex items-center gap-1">
                        Algo <span className="font-light text-zinc-500">Flow</span>
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium text-[#45474D]">
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

                <div className="hidden lg:flex items-center">
                    <a href="https://github.com/TheAlgoFlow/AlgoFlow" target="_blank" rel="noopener noreferrer" className="bg-[#121317] text-white px-5 py-2.5 mt-1 rounded-full text-[14px] font-medium hover:bg-zinc-800 shadow-md transition-all flex items-center gap-2 hover:scale-105">
                        GitHub
                        <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-t border-black/5 shadow-lg lg:hidden flex flex-col px-6 py-4 animate-in slide-in-from-top-2 duration-200 z-50">
                    <nav className="flex flex-col gap-4 text-[15px] font-medium text-[#45474D]">
                        <a href="#" className="py-2 hover:text-black transition-colors border-b border-black/5">Product</a>
                        <a href="#" className="py-2 hover:text-black transition-colors flex items-center justify-between border-b border-black/5">
                            Use Cases
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="m6 9 6 6 6-6" /></svg>
                        </a>
                        <a href="#" className="py-2 hover:text-black transition-colors border-b border-black/5">Pricing</a>
                        <a href="#" className="py-2 hover:text-black transition-colors border-b border-black/5">Blog</a>
                        <a href="#" className="py-2 hover:text-black transition-colors flex items-center justify-between border-b border-black/5">
                            Resources
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="m6 9 6 6 6-6" /></svg>
                        </a>
                    </nav>
                    <div className="mt-6 flex flex-col gap-3">
                        <a href="https://github.com/TheAlgoFlow/AlgoFlow" target="_blank" rel="noopener noreferrer" className="bg-[#121317] text-white px-5 py-3 rounded-xl text-[14px] font-medium hover:bg-zinc-800 shadow-md transition-all flex items-center justify-center gap-2">
                            GitHub
                            <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 fill-current" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
