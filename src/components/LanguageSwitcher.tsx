"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useLoader } from "@/contexts/LoaderContext";

interface Language {
  code: string;
  label: string;
  flag?: string;
}

const languages: Language[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  // Add more languages here in the future
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { showLoader } = useLoader();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current language from URL
  const currentLangCode = pathname.startsWith("/fr") ? "fr" : "en";
  const currentLang =
    languages.find((l) => l.code === currentLangCode) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        // Return focus to the toggle button if possible
        if (dropdownRef.current) {
          const button = dropdownRef.current.querySelector('button');
          if (button) button.focus();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLanguageChange = (langCode: string) => {
    setIsOpen(false);
    showLoader();

    // Logic to switch language while preserving path
    let newPath = pathname;

    if (langCode === "en") {
      // Switch to English: Remove /fr prefix if present
      if (pathname.startsWith("/fr")) {
        newPath = pathname.replace("/fr", "") || "/";
      }
    } else {
      // Switch to other language (e.g., fr)
      if (currentLangCode === "en") {
        // If currently English (root), add /fr prefix
        newPath = `/${langCode}${pathname === "/" ? "" : pathname}`;
      } else {
        // If currently another language (e.g., /es in future), replace prefix
        newPath = pathname.replace(`/${currentLangCode}`, `/${langCode}`);
      }
    }

    if (typeof window !== "undefined") {
      sessionStorage.setItem("is-loading", "true");
    }
    router.push(newPath);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 hover:bg-white/10 transition-colors text-white hover:text-[#13DE00] cursor-pointer"
        aria-label="Select language"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="language-menu"
      >
        <Globe size={20} />
      </button>

      {isOpen && (
        <div
          id="language-menu"
          className="absolute right-0 mt-2 w-32 bg-black border border-[#13DE00] shadow-lg overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200"
        >
          <ul className="py-1" role="menu" aria-label="Language options">
            {languages.map((lang) => (
              <li key={lang.code} role="presentation">
                <button
                  role="menuitem"
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-xs font-medium flex items-center space-x-2 hover:bg-[#13DE00]/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:bg-[#13DE00]/20
                    ${currentLang.code === lang.code ? "text-[#13DE00] bg-[#13DE00]/10" : "text-white"}
                  `}
                >
                  <span>{lang.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
