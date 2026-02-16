"use client";

import { useLoader } from "@/contexts/LoaderContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Loading() {
    const { isLoading, showLoader, hideLoader } = useLoader();
    const pathname = usePathname();

    // 1. Mount effect: Check if we were loading (e.g. after language switch remount)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const wasLoading = sessionStorage.getItem("is-loading") === "true";
            if (wasLoading) {
                showLoader();
            }
        }
    }, [showLoader]);

    // 2. Navigation effect: When pathname changes, we are "arriving"
    useEffect(() => {
        // Clear the loading flag
        if (typeof window !== "undefined") {
            sessionStorage.removeItem("is-loading");
        }

        const timer = setTimeout(() => {
            hideLoader();
        }, 1000); // 1s delay to smooth out the end of transition

        return () => clearTimeout(timer);
    }, [pathname, hideLoader]);

    // 3. Global click interceptor for all links
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (anchor && anchor.href) {
                const url = new URL(anchor.href);
                // Check if it's an internal link
                if (url.origin === window.location.origin) {
                    // Ignore modifier clicks (new tab)
                    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                    // Ignore download links
                    if (anchor.hasAttribute('download')) return;
                    // Ignore target="_blank"
                    if (anchor.target === "_blank") return;
                    // Ignore same-page anchors
                    if (url.pathname === window.location.pathname && url.hash) return;

                    // It's a valid internal navigation -> Show loader
                    if (typeof window !== "undefined") {
                        sessionStorage.setItem("is-loading", "true");
                    }
                    showLoader();
                }
            }
        };

        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [showLoader]);

    if (!isLoading) return null;

    return <LoadingSpinner />;
}
