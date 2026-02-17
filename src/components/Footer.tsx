"use client";

import Link from "next/link";
import { PHONE_NUMBER } from "@/lib/constants";
import SocialIcons from "@/components/SocialIcons";
import NavFooter from "@/components/NavFooter";
import { MenuItem } from "@/components/NavBurger";

interface FooterProps {
  socials: Array<{ name: string; link: string }>;
  locale?: string;
  menuItems?: MenuItem[];
}

export default function Footer({ socials, locale = 'en', menuItems }: FooterProps) {

  return (
    <footer className="text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div
              className="text-2xl font-bold mb-2"
              role="heading"
              aria-level={2}
            >
              Green Ghost
            </div>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="text-[#13DE00] hover:text-[#13DE00]/80 transition-colors text-sm block mb-1 py-2"
              title="Call us"
            >
              +6687-420-1144
            </a>
            <a
              href="mailto:contact@green.gd"
              className="text-[#13DE00] hover:text-[#13DE00]/80 transition-colors text-sm block mb-2 py-2"
              title="Email us"
            >
              contact@green.gd
            </a>
            <p className="text-gray-400 mb-4">Join A Degen Community</p>
            <SocialIcons socials={socials} />
          </div>
          <NavFooter locale={locale} items={menuItems || []} />
        </div>
        <div className="mt-8 pt-8 border-t border-[#13DE00]/21 text-center text-gray-400">
          <p>&copy; 2026 Green Ghost. All rights reserved.</p>
          <p className="mt-2">
            <Link
              href="https://gokai.org/"
              className="text-[#13DE00] hover:text-[#13DE00]/80 transition-colors text-sm inline-block py-3 px-2"
              title="Made with weed by Gokai Labs"
            >
              Made with weed by Gokai Labs
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
