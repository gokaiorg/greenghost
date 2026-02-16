"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import BagPopup from "@/components/BagPopup";
import { Menu, X } from "lucide-react";
import ConnectMenu from "@/components/ConnectMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header({ locale }: { locale?: string }) {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const pathname = usePathname();
  const currentLang = locale || "en";
  const [isHydrated, setIsHydrated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBumping, setIsBumping] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemCount === 0) return;
    setIsBumping(true);
    const timer = setTimeout(() => setIsBumping(false), 300);
    return () => clearTimeout(timer);
  }, [itemCount]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    // Close menu when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Close menu when scrolling
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  // Helper to generate localized paths
  const getLocalizedPath = (path: string) => {
    if (currentLang === "en") return path;
    return `/${currentLang}${path === "/" ? "" : path}`;
  };

  return (
    <header className="sticky top-0 z-40 text-white py-2 px-4 bg-black/80 backdrop-blur-sm border-b border-[#13DE00]/21">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-[#13DE00] text-black px-4 py-2 font-bold font-pixel"
      >
        Skip to content
      </a>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href={getLocalizedPath("/")} className="flex-shrink-0" title="Green Ghost Home">
            <Image
              src="/images/green-ghost-degen-weed-shop.avif"
              alt="Green Ghost"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto max-h-[69px]"
              priority
              style={{ height: "auto" }}
            />
          </Link>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-[#13DE00] transition-colors p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <ul
                className="fixed left-0 right-0 top-22 bg-black border-t border-b border-[#13DE00] shadow-lg py-1 z-50 md:absolute md:left-0 md:right-auto md:top-full md:mt-2 md:w-content md:border list-none m-0 p-0"
                aria-label="Mobile navigation menu"
              >
                <li>
                  <Link
                    href={getLocalizedPath("/menu")}
                    title="Explore our menu"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname === "/menu" || pathname === "/fr/menu" ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/menu") ? "page" : undefined}
                  >
                    Explore our menu
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/delivery")}
                    title="Get delivered"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/delivery") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/delivery") ? "page" : undefined}
                  >
                    Get delivered
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/wholesale")}
                    title="Bulk ordering"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/wholesale") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={
                      pathname.includes("/wholesale") ? "page" : undefined
                    }
                  >
                    Bulk ordering
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/payment")}
                    title="Make a payment"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/payment") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/payment") ? "page" : undefined}
                  >
                    Make a payment
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/strains")}
                    title="All the strains"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/strains") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/strains") ? "page" : undefined}
                  >
                    All the strains
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/weed")}
                    title="Learn about weed"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/weed") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/weed") ? "page" : undefined}
                  >
                    Learn about weed
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/about")}
                    title="Cannabis culture"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname?.includes("/about") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={
                      pathname?.includes("/about") ? "page" : undefined
                    }
                  >
                    Cannabis culture
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/cannabis-club")}
                    title="Join the club"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/cannabis-club") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={
                      pathname.includes("/cannabis-club") ? "page" : undefined
                    }
                  >
                    Join the club
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/nft")}
                    title="Mint your NFT"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/nft") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/nft") ? "page" : undefined}
                  >
                    Mint your NFT
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/jobs")}
                    title="We are hiring"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/jobs") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/jobs") ? "page" : undefined}
                  >
                    We are hiring
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/locations")}
                    title="Visit our locations"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/locations") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={
                      pathname.includes("/locations") ? "page" : undefined
                    }
                  >
                    Visit our locations
                  </Link>
                </li>
                <li>
                  <Link
                    href={getLocalizedPath("/contact")}
                    title="Contact us now"
                    className={`block px-4 py-2 text-sm hover:bg-[#13DE00]/13 hover:text-[#13DE00] whitespace-nowrap ${pathname.includes("/contact") ? "bg-[#13DE00]/13 text-[#13DE00]" : ""}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={pathname.includes("/contact") ? "page" : undefined}
                  >
                    Contact us now
                  </Link>
                </li>
                <li className="px-4 py-2 md:hidden">
                  <ConnectMenu />
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center">
          <ul
            className="hidden md:flex items-center space-x-7 mr-3 list-none m-0 p-0"
            aria-label="Desktop navigation menu"
          >
            <li>
              <Link
                href={getLocalizedPath("/menu")}
                title="Menu"
                className={`hover:text-[#13DE00] text-sm transition-colors whitespace-nowrap font-medium ${pathname.includes("/menu") ? "text-[#13DE00]" : ""}`}
                aria-current={pathname.includes("/menu") ? "page" : undefined}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href={getLocalizedPath("/delivery")}
                title="Delivery"
                className={`hover:text-[#13DE00] text-sm transition-colors whitespace-nowrap font-medium ${pathname.includes("/delivery") ? "text-[#13DE00]" : ""}`}
                aria-current={pathname.includes("/delivery") ? "page" : undefined}
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                href={getLocalizedPath("/contact")}
                title="Contact"
                className={`hover:text-[#13DE00] text-sm transition-colors whitespace-nowrap font-medium ${pathname.includes("/contact") ? "text-[#13DE00]" : ""}`}
                aria-current={pathname.includes("/contact") ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-[#13DE00] text-sm transition-colors relative cursor-pointer p-2"
              aria-label={
                itemCount > 0
                  ? `Shopping bag, ${itemCount} items`
                  : "Shopping bag"
              }
            >
              Bag
              {isHydrated && itemCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 !bg-[#13DE00] !text-black text-xs font-bold w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isBumping ? "scale-125" : "scale-100"}`}
                  aria-hidden="true"
                >
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          <div className="ml-4 flex items-center gap-4">
            <LanguageSwitcher />
            <ConnectMenu />
          </div>
        </div>
      </div>
      <BagPopup isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
