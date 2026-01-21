"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

interface MenuCategoryInline {
  slug: string;
  name: string;
  path: string;
}

interface MenuListInlineClientProps {
  categories: MenuCategoryInline[];
}

export default function MenuListInlineClient({
  categories,
}: MenuListInlineClientProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll active link into view on mount and pathname change
  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(
        "a.text-black",
      ) as HTMLElement;
      if (activeLink) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          activeLink.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }, 100);
      }
    }
  }, [pathname]);

  return (
    <div className="w-full py-2 mb-2">
      <nav ref={navRef}>
        <ul
          className="flex space-x-4 whitespace-nowrap text-sm overflow-x-auto sm:overflow-visible sm:justify-center list-none m-0 p-0"
          aria-label="Menu categories"
        >
          {categories.map((category) => (
            <li key={category.slug}>
              <Link
                href={category.path}
                className={`px-2 py-1 transition-colors  ${pathname === category.path ? "text-black !bg-[#13DE00]" : "text-[#13DE00] hover:bg-[#13DE00]/13"}`}
                title={category.name}
                aria-current={pathname === category.path ? "page" : undefined}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
