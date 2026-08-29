import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import ConnectMenu from "@/components/ConnectMenu";
import { getLocalizedUrl } from "@/lib/i18n-helpers";

export interface MenuItem {
  path: string;
  label: string;
  label_en?: string;
  label_fr?: string;
}

export default function NavBurger({
  locale,
  items,
}: {
  locale: string;
  items: MenuItem[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const currentLang = locale || "en";

  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleScroll = () => setIsOpen(false);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isOpen && event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="hover:text-[#13DE00] transition-colors p-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13DE00] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls="mobile-nav-menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <ul
          id="mobile-nav-menu"
          role="menu"
          className="fixed left-0 right-0 top-[60px] bg-black border-t border-b border-[#13DE00] shadow-lg py-1 z-50 md:absolute md:left-0 md:right-auto md:top-full md:mt-2 md:w-max md:border list-none m-0 p-0"
          aria-label="Mobile navigation menu"
        >
          {items.map((item) => (
            <li key={item.path} role="none">
              <Link
                role="menuitem"
                href={getLocalizedUrl(item.path, currentLang)}
                title={
                  currentLang === "fr" && item.label_fr
                    ? item.label_fr
                    : currentLang === "en" && item.label_en
                      ? item.label_en
                      : item.label
                }
                className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13DE00] focus-visible:ring-inset ${pathname.includes(item.path) ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname.includes(item.path) ? "page" : undefined}
              >
                {currentLang === "fr" && item.label_fr
                  ? item.label_fr
                  : currentLang === "en" && item.label_en
                    ? item.label_en
                    : item.label}
              </Link>
            </li>
          ))}
          <li className="px-4 py-2 md:hidden" role="none">
            <ConnectMenu />
          </li>
        </ul>
      )}
    </div>
  );
}
