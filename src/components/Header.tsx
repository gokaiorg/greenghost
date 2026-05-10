"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import BagPopup from "@/components/BagPopup";

import ConnectMenu from "@/components/ConnectMenu";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import NavBurger, { MenuItem } from "@/components/NavBurger";

export default function Header({
  locale,
  menuItems,
}: {
  locale?: string;
  menuItems?: MenuItem[];
}) {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const pathname = usePathname();
  const currentLang = locale || "en";
  const [isHydrated, setIsHydrated] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBumping, setIsBumping] = useState(false);

  useEffect(() => {
    if (itemCount === 0) return;
    setIsBumping(true);
    const timer = setTimeout(() => setIsBumping(false), 300);
    return () => clearTimeout(timer);
  }, [itemCount]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Helper to generate localized paths (though mostly handled in NavBurger now for logic there)
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
          <Link
            href={getLocalizedPath("/")}
            className="flex-shrink-0"
            title="Green Ghost Home"
          >
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
          <NavBurger locale={currentLang} items={menuItems || []} />
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
                aria-current={
                  pathname.includes("/delivery") ? "page" : undefined
                }
              >
                Delivery
              </Link>
            </li>
            <li>
              <Link
                href={getLocalizedPath("/contact")}
                title="Contact"
                className={`hover:text-[#13DE00] text-sm transition-colors whitespace-nowrap font-medium ${pathname.includes("/contact") ? "text-[#13DE00]" : ""}`}
                aria-current={
                  pathname.includes("/contact") ? "page" : undefined
                }
              >
                Contact
              </Link>
            </li>
          </ul>

          <div>
            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-[#13DE00] text-sm transition-colors relative cursor-pointer p-2 focus-visible:ring-2 focus-visible:ring-[#13DE00] rounded-sm outline-none"
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
