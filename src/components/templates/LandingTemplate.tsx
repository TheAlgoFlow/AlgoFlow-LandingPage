import React from "react";
import Header from "@/components/organisms/Header";

interface LandingTemplateProps {
    children: React.ReactNode;
}

export default function LandingTemplate({ children }: LandingTemplateProps) {
    return (
        <div className="min-h-screen bg-white text-zinc-900 font-sans relative">
            {/* Background decoration to match the image's subtle dotted/starry background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}></div>

            {/* Invisible (Transparent) Header */}
            <Header />

            {/* Page Content */}
            {children}
        </div>
    );
}
