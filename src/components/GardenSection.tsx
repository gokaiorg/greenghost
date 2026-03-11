import Link from "next/link";
import MiniSlider from "@/components/MiniSlider";
import { getSectionsData } from "@/lib/bigquery";
import { getLocalizedSection } from "@/lib/i18n-db";
import { getLocalizedUrl } from "@/lib/i18n-helpers";

const CAROUSEL_IMAGES = [
  "/images/gardens/green-ghost-garden-phuket-01.avif",
  "/images/gardens/green-ghost-garden-phuket-03.avif",
  "/images/gardens/green-ghost-garden-phuket-05.avif",
];

interface GardenSectionProps {
  locale?: string;
}

export default async function GardenSection({
  locale = "en",
}: GardenSectionProps) {
  const sections = await getSectionsData();
  const content = getLocalizedSection(sections, "GardenSection", locale);

  const titleContent = content.title || "Our Green Ghost Garden";
  const description =
    content.description ||
    "Experience the source of our premium quality. Our organic green garden in Phuket are where the magic happens, cultivated with traditional expertise and modern sustainability practices. We take pride in growing the finest cannabis strains under the Thai sun, ensuring purity and potency in every harvest.";
  const linkLabel = content.links[0]?.label || "Green Ghost Garden";
  const linkUrl = content.links[0]?.url || "/garden";

  // Format title: "Green Ghost Garden" with "Garden" in green if matched
  const formatTitle = (text: string) => {
    // Default fallback formatting
    if (text === "Our Green Ghost Garden") {
      return (
        <>
          <span className="text-white">Our Green Ghost</span>{" "}
          <span className="text-[#13DE00]">Garden</span>
        </>
      );
    }
    // Generic formatting: last word green
    const words = text.split(" ");
    if (words.length <= 1)
      return <span className="text-[#13DE00]">{text}</span>;
    const lastWord = words[words.length - 1];
    const rest = words.slice(0, -1).join(" ");
    return (
      <>
        <span className="text-white">{rest}</span>{" "}
        <span className="text-[#13DE00]">{lastWord}</span>
      </>
    );
  };

  return (
    <section
      className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-center py-20 bg-black"
      aria-label={titleContent}
    >
      {/* Image Column - Left on desktop */}
      <div className="order-1 md:col-span-1">
        <div className="relative overflow-hidden aspect-square w-full h-auto">
          <MiniSlider
            images={CAROUSEL_IMAGES}
            alt={titleContent}
            width={500}
            height={500}
            autoRotate={true}
          />
        </div>
      </div>

      {/* Text Column - Right on desktop */}
      <div className="order-2 md:col-span-2">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
          {formatTitle(titleContent)}
        </h2>

        <p className="text-md lg:text-lg xl:text-xl text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={getLocalizedUrl(linkUrl, locale)}
            className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300 text-center"
            title={linkLabel}
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
