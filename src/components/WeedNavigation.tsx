"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const mainNavigationItems = [
  {
    title: "Thai Weed Growers",
    href: "/growers",
    image: "/images/icons/growers-green-ghost.avif",
    description: "Meet our premium cannabis growers",
  },
  {
    title: "Find Cannabis Seeds",
    href: "/seeds",
    image: "/images/icons/seeds-green-ghost.avif",
    description: "Start your own growing journey",
  },
  {
    title: "Best Cannabis Strains",
    href: "/strains",
    image: "/images/icons/strains-green-ghost.avif",
    description: "Explore our curated strain collection",
  },
];

const secondaryNavigationItems = [
  {
    title: "Best Weed Shops",
    href: "/best-weed-shops-thailand",
    image: "/images/icons/best-weed-shops-thailand-green-ghost.avif",
    description: "Discover top-rated dispensaries",
  },
  {
    title: "The Green Garden",
    href: "/garden",
    image: "/images/icons/garden-green-ghost.avif",
    description: "Shared growing journey",
  },
  {
    title: "Cannabis Legal Laws",
    href: "/legal-laws",
    image: "/images/icons/legal-laws-green-ghost.avif",
    description: "Thai cannabis regulations guide",
  },
];

export default function WeedNavigation() {
  const pathname = usePathname();

  const getItemStyles = (href: string) => {
    const isActive = pathname === href;
    return {
      container: `group flex flex-col items-center p-6 transition-all duration-300 h-full ${
        isActive
          ? "bg-[#13DE00]/5 border-[#13DE00]"
          : "bg-[#13DE00]/13 border-[#13DE00]/21 hover:border-[#13DE00] hover:bg-[#13DE00]/5"
      } border`,
      title: `text-xl text-center font-bold transition-colors font-pixel mb-2 ${
        isActive ? "text-[#13DE00]" : "text-white group-hover:text-[#13DE00]"
      }`,
      description: `text-center text-sm transition-colors ${
        isActive ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300"
      }`,
    };
  };

  return (
    <section
      className="py-12 w-full max-w-6xl mx-auto"
      aria-label="Weed Navigation"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-pixel text-center">
        Explore <span className="text-[#13DE00]">More</span>
      </h2>

      {/* Main Navigation - 3 Columns */}
      <ul
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
        aria-label="Main Weed Categories"
      >
        {mainNavigationItems.map((item) => {
          const styles = getItemStyles(item.href);
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={styles.container}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Secondary Navigation - 3 Columns */}
      <ul
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-full mx-auto"
        aria-label="Additional Weed Resources"
      >
        {secondaryNavigationItems.map((item) => {
          const styles = getItemStyles(item.href);
          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={styles.container}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
