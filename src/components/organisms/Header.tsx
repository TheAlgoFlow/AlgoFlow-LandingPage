"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import { usePathname } from "next/navigation";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import BrandLogo from "@/components/molecules/BrandLogo";
import LanguageSwitcher from "@/components/molecules/LanguageSwitcher";
import NavItem from "@/components/molecules/NavItem";

const NAV_LINKS = [
    { labelKey: "header.howItWorks", href: "/#how-it-works" },
    { labelKey: "header.features", href: "/#features" },
    { labelKey: "header.demo", href: "/#demo" },
];

const APP_URL = "https://app.thealgoflow.com/";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t } = useTranslation();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeDrawer = () => setIsMobileMenuOpen(false);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string,
    ) => {
        if (pathname !== "/") return;
        if (href === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }
        if (href.startsWith("/#")) {
            e.preventDefault();
            const id = href.replace("/#", "");
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-out",
                scrolled
                    ? "bg-white/80 backdrop-blur-md border-b border-[#E0E0E0] py-3"
                    : "bg-transparent py-2",
            ].join(" ")}
        >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* Desktop layout */}
                <div className="hidden md:flex items-center justify-between w-full relative">

                    {/* Logo */}
                    <BrandLogo imageSize={37} textClassName="font-semibold text-[17.5px] text-inherit" />

                    {/* Floating nav pill */}
                    <nav
                        aria-label={t("header.navLabel")}
                        className="absolute left-1/2 -translate-x-1/2 flex items-center gap-6 border border-[#E0E0E0] rounded-full px-6 py-2 bg-white/90"
                    >
                        {NAV_LINKS.map((link) => (
                            <NavItem
                                key={link.href}
                                href={link.href}
                                onClick={(e) =>
                                    handleNavClick(
                                        e as React.MouseEvent<HTMLAnchorElement>,
                                        link.href,
                                    )
                                }
                            >
                                {t(link.labelKey)}
                            </NavItem>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher variant="desktop" />
                        <Button
                            as="a"
                            href={APP_URL}
                            variant="primary"
                            size="sm"
                            className="!border-none !rounded-full hover:opacity-90"
                            style={
                                {
                                    background: "linear-gradient(to right, #CCFF00, #FF6B00)",
                                    color: "#080912",
                                    boxShadow: "0 2px 12px rgba(204,255,0,0.3)",
                                } as React.CSSProperties
                            }
                        >
                            {t("header.cta")}
                        </Button>
                    </div>
                </div>

                {/* Mobile layout */}
                <div className="flex md:hidden items-center justify-between w-full">
                    <BrandLogo imageSize={32} textClassName="font-semibold text-[16px] text-inherit" />
                    <button
                        type="button"
                        aria-label={isMobileMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="p-2 rounded-lg text-[#0A0A0A] transition-colors duration-200 hover:bg-[#F5F5F5] focus:outline-none focus:ring-2 focus:ring-[#0A0A0A] focus:ring-offset-2"
                    >
                        <Icon name={isMobileMenuOpen ? "x" : "menu"} size={20} />
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-[#E0E0E0]">
                    <nav
                        aria-label={t("header.mobileNav")}
                        className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4"
                    >
                        {NAV_LINKS.map((link) => (
                            <NavItem
                                key={link.href}
                                href={link.href}
                                onClick={(e) => {
                                    handleNavClick(
                                        e as React.MouseEvent<HTMLAnchorElement>,
                                        link.href,
                                    );
                                    closeDrawer();
                                }}
                                className="py-2 border-b border-black/5 text-[15px]"
                            >
                                {t(link.labelKey)}
                            </NavItem>
                        ))}
                        <LanguageSwitcher variant="mobile" />
                        <div className="pt-2 border-t border-[#E0E0E0] flex flex-col gap-3">
                            <Button
                                as="a"
                                href={APP_URL}
                                variant="primary"
                                size="md"
                                fullWidth
                                className="!border-none !rounded-full hover:opacity-90"
                                style={
                                    {
                                        background: "linear-gradient(to right, #CCFF00, #FF6B00)",
                                        color: "#080912",
                                    } as React.CSSProperties
                                }
                            >
                                {t("header.cta")}
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
