"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Use a ref to track visibility state to avoid stale closures in event listener
  const isVisibleRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    let rafId: number | null = null;

    const toggleVisibility = () => {
      const shouldBeVisible = window.scrollY > 300;

      // Only update state if the value has changed
      if (shouldBeVisible !== isVisibleRef.current) {
        isVisibleRef.current = shouldBeVisible;
        setIsVisible(shouldBeVisible);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(toggleVisibility);
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`bg-[#13DE00] text-black h-15 w-15 flex items-center justify-center border-2 border-[#13DE00] shadow-lg transition-all duration-300 hover:bg-white hover:text-[#13DE00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13DE00] cursor-pointer ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      title="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
