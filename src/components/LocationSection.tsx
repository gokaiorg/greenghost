import Link from "next/link";
import Image from "next/image";
import { getAllLocations, getSectionsData } from "@/lib/firestore";
import { getLocalizedSection } from "@/lib/i18n-db";
import { getLocalizedUrl } from "@/lib/i18n-helpers";

interface LocationSectionProps {
  locale?: string;
}

export default async function LocationSection({
  locale = "en",
}: LocationSectionProps) {
  const [locations, sections] = await Promise.all([
    getAllLocations(),
    getSectionsData(),
  ]);

  const content = getLocalizedSection(sections, "LocationSection", locale);

  const titleContent = content.title || "Best Weed Shops";
  const description =
    content.description ||
    "Visit us at one of our premium locations in Thailand and France. Experience the best cannabis, friendly service, and a chill atmosphere.";
  const linkLabel = content.links[0]?.label || "See All Locations";
  const linkUrl = content.links[0]?.url || "/locations";

  // Helper to format title with green accent (Last 2 words green)
  const formatTitle = (text: string) => {
    const words = text.split(" ");
    if (words.length <= 2)
      return <span className="text-[#13DE00]">{text}</span>;
    const lastTwo = words.slice(-2).join(" ");
    const rest = words.slice(0, -2).join(" ");
    return (
      <>
        <span className="text-white">{rest}</span>{" "}
        <span className="text-[#13DE00]">{lastTwo}</span>
      </>
    );
  };

  return (
    <section
      className="container mx-auto px-4 relative z-10 py-20 bg-black relative overflow-hidden"
      aria-label={titleContent}
    >
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/icons/best-weed-shops-green-ghost.avif"
            alt={titleContent}
            width={192}
            height={192}
            className="w-auto h-40 md:h-48 object-contain"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          {formatTitle(titleContent)}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
      </div>

      <ul
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 list-none m-0 p-0"
        aria-label={titleContent}
      >
        {locations.map((location) => (
          <li
            key={location.slug}
            className="bg-[#13DE00]/13 border border-[#13DE00]/21 p-8 hover:border-[#13DE00]/50 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#13DE00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

            <Link
              href={getLocalizedUrl(`/locations/${location.slug}`, locale)}
              className="block group-hover:text-[#13DE00] transition-colors"
              title={location.name}
            >
              <h3 className="text-base font-bold text-white group-hover:text-[#13DE00] mb-3 transition-colors">
                {location.name}
              </h3>
            </Link>

            <address className="not-italic text-gray-400 mb-4 space-y-2 text-xs leading-relaxed">
              <a
                href={location.address_link || "#"}
                title={location.address}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors block"
              >
                {location.address}
              </a>
            </address>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <Link
          href={getLocalizedUrl(linkUrl, locale)}
          title={linkLabel}
          className="inline-flex items-center gap-2 text-white hover:text-[#13DE00] font-bold transition-colors group"
        >
          {linkLabel}
          <span className="transform group-hover:translate-x-1 transition-transform">
            &gt;
          </span>
        </Link>
      </div>
    </section>
  );
}
