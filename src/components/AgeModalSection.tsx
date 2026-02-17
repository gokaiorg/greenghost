"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface AgeModalSectionProps {
    title: string;
    description: string;
    yesLabel: string;
    noLabel: string;
}

export default function AgeModalSection({
    title,
    description,
    yesLabel,
    noLabel,
}: AgeModalSectionProps) {
    const [mounted, setMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const yesButtonRef = useRef<HTMLButtonElement>(null);

    // First useEffect: Mark component as mounted (client-side only)
    useEffect(() => {
        setMounted(true);
    }, []);

    // Second useEffect: Check verification status after mounting
    useEffect(() => {
        if (!mounted) return;

        // Check if user has already verified
        const hasVerified = sessionStorage.getItem("age-verified");

        // Check for bots/crawlers
        const botPattern = /bot|googlebot|crawler|spider|robot|crawling/i;
        const isBot = navigator.userAgent && botPattern.test(navigator.userAgent);

        if (!hasVerified && !isBot) {
            setIsVisible(true);
        }
    }, [mounted]);

    // Focus management when modal becomes visible
    useEffect(() => {
        if (isVisible && yesButtonRef.current) {
            yesButtonRef.current.focus();
        }
    }, [isVisible]);

    const handleYes = () => {
        sessionStorage.setItem("age-verified", "true");
        setIsVisible(false);
    };

    const handleNo = () => {
        window.location.href = "https://ghostverse.org/";
    };

    // Don't render anything until mounted (prevents hydration mismatch)
    if (!mounted || !isVisible) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="age-verification-title"
            aria-describedby="age-verification-desc"
        >
            <div className="bg-black border-2 border-[#13DE00] p-8 max-w-md w-full text-center shadow-[0_0_20px_rgba(19,222,0,0.3)]">
                <div className="mb-6 flex justify-center">
                    <Image
                        src="/images/icons/older-20-only-green-ghost.avif"
                        alt="20+ Only"
                        width={200}
                        height={200}
                        className="w-48 h-48 object-contain"
                    />
                </div>

                <h2
                    id="age-verification-title"
                    className="text-xl md:text-2xl text-white mb-6"
                    style={{ fontFamily: "var(--font-pixel)" }}
                >
                    {title}
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        ref={yesButtonRef}
                        onClick={handleYes}
                        className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-3 px-8 cursor-pointer transition-colors duration-200 font-pixel text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    >
                        {yesLabel}
                    </button>
                    <button
                        onClick={handleNo}
                        className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500/10 cursor-pointer font-bold py-3 px-8 transition-colors duration-200 font-pixel text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                    >
                        {noLabel}
                    </button>
                </div>

                <p id="age-verification-desc" className="mt-6 text-xs text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    );
}
