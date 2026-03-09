import React from "react";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

interface LandingTemplateProps {
    children: React.ReactNode;
}

export default function LandingTemplate({ children }: LandingTemplateProps) {
    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans relative flex flex-col">
            {/* Background decoration to match the image's subtle dotted/starry background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>

            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
