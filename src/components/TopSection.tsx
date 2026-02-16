import Link from "next/link";
import Image from "next/image";
import { getTopsData, getSectionsData } from "@/lib/bigquery";
import { getLocalizedSection } from "@/lib/i18n-db";
import { sanitizeUrl } from "@/lib/utils/url";

interface TopSectionProps {
  locale?: string;
}

export default async function TopSection({ locale = "en" }: TopSectionProps) {
  const [tops, sections] = await Promise.all([
    getTopsData(),
    getSectionsData(),
  ]);

  const content = getLocalizedSection(sections, "TopSection", locale);

  const titleContent =
    content.title || "Top dispensary in Phuket Thailand 2026";
  const description =
    content.description ||
    "See where Green Ghost stands among the best dispensaries in Phuket Thailand in 2026.";
  const linkLabel = content.links[0]?.label || "Best weed shops in Thailand";
  const linkUrl = content.links[0]?.url || "/best-weed-shops-thailand";

  // Format title: "Phuket Thailand 2026" in green if found
  const formatTitle = (text: string) => {
    // Fallback specific formatting for the default title
    if (text === "Top dispensary in Phuket Thailand 2026") {
      return (
        <>
          Top dispensary in{" "}
          <span className="text-[#13DE00]">Phuket Thailand 2026</span>
        </>
      );
    }
    // Generic formatting: last 3 words green if not default
    const words = text.split(" ");
    if (words.length <= 3) return <span className="text-[#13DE00]">{text}</span>;
    const lastThree = words.slice(-3).join(" ");
    const rest = words.slice(0, -3).join(" ");
    return (
      <>
        {rest} <span className="text-[#13DE00]">{lastThree}</span>
      </>
    );
  };

  return (
    <section className="py-12 bg-black container mx-auto px-4" aria-label={titleContent}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-2">
            {formatTitle(titleContent)}
          </h2>
          <p className="text-gray-400 text-sm max-w-xl">{description}</p>
        </div>

        <Link
          href={linkUrl}
          className="shrink-0 inline-flex items-center gap-2 text-[#13DE00] hover:text-white font-bold text-sm transition-colors group border border-[#13DE00]/21 hover:border-[#13DE00] px-4 py-2 rounded-none bg-[#13DE00]/5 hover:bg-[#13DE00]/13"
          title={linkLabel}
        >
          {linkLabel}
          <span className="transform group-hover:translate-x-1 transition-transform">
            &gt;
          </span>
        </Link>
      </div>

      <ul
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        aria-label={titleContent}
      >
        {tops.map((top) => {
          const slug = top.name.toLowerCase().replace(/\s+/g, "-");
          const imagePath = `/images/partners/green-ghost-top-dispensary-${slug}.avif`;

          return (
            <li key={top.name}>
              <a
                href={sanitizeUrl(top.link)}
                title={top.name}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#13DE00]/13 border border-[#13DE00]/21 hover:border-[#13DE00]/50 p-4 transition-all duration-300 flex flex-col items-center justify-center gap-3 h-full"
              >
                <div className="relative w-full aspect-[3/2] grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                  <Image
                    src={imagePath}
                    alt={`${top.name} - Top Dispensary`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                  />
                </div>
                <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors text-center">
                  {top.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
