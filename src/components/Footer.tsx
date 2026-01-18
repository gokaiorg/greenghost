"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_NUMBER } from "@/lib/constants";
import SocialIcons from "@/components/SocialIcons";

interface FooterProps {
  socials: Array<{ name: string; link: string }>;
}

export default function Footer({ socials }: FooterProps) {
  const pathname = usePathname();

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
          <nav aria-label="Footer navigation">
            <ul
              className="flex flex-wrap justify-center md:justify-end gap-4 max-w-3xl w-full mx-auto md:mr-0 list-none m-0 p-0"
              aria-label="Footer links"
            >
              <li>
                <Link
                  href="/menu"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname?.startsWith("/menu") ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Explore our cannabis menu"
                  title="Explore our menu"
                >
                  Explore our menu
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/delivery" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Get cannabis delivered"
                  title="Get delivered"
                >
                  Get delivered
                </Link>
              </li>
              <li>
                <Link
                  href="/wholesale"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/wholesale" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Bulk ordering and wholesale"
                  title="Bulk ordering"
                >
                  Bulk ordering
                </Link>
              </li>
              <li>
                <Link
                  href="/payment"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/payment" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Make a payment"
                  title="Make a payment"
                >
                  Make a payment
                </Link>
              </li>
              <li>
                <Link
                  href="/strains"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/strains" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Browse all cannabis strains"
                  title="All the strains"
                >
                  All the strains
                </Link>
              </li>
              <li>
                <Link
                  href="/weed"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/weed" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Learn about cannabis and weed"
                  title="Learn about weed"
                >
                  Learn about weed
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/about" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Learn about cannabis culture"
                  title="Cannabis culture"
                >
                  Cannabis culture
                </Link>
              </li>
              <li>
                <Link
                  href="/cannabis-club"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/cannabis-club" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Join the cannabis club"
                  title="Join the club"
                >
                  Join the club
                </Link>
              </li>
              <li>
                <Link
                  href="/nft"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/nft" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Mint your Green Ghost NFT"
                  title="Mint your NFT"
                >
                  Mint your NFT
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/jobs" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="View job openings"
                  title="We are hiring"
                >
                  We are hiring
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/locations" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Visit our store locations"
                  title="Visit our locations"
                >
                  Visit our locations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`bg-[#13DE00] h-[110px] max-w-[110px] flex items-center justify-center hover:bg-[#13DE00]/13 hover:text-[#13DE00] transition-colors text-xs font-medium p-1 tracking-tight ${pathname === "/contact" ? "bg-[#13DE00]/13 text-[#13DE00]" : "text-black"}`}
                  aria-label="Contact us"
                  title="Contact us now"
                >
                  Contact us now
                </Link>
              </li>
            </ul>
          </nav>
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
