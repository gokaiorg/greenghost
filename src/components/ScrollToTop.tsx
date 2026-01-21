"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
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
      className={`bg-[#13DE00] text-black h-15 w-15 flex items-center justify-center border-2 border-[#13DE00] shadow-lg transition-all duration-300 hover:bg-white hover:text-[#13DE00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#13DE00] cursor-pointer ${isVisible
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
