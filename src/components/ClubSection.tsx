import Link from "next/link";
import MiniSlider from "@/components/MiniSlider";
import { getSectionsData } from "@/lib/firestore";
import { getLocalizedSection } from "@/lib/i18n-db";

const CAROUSEL_IMAGES = [
  "/images/banners/green-ghost-best-cannabis-club-story-01.avif",
  "/images/banners/green-ghost-best-cannabis-club-story-02.avif",
  "/images/banners/green-ghost-best-cannabis-club-story-03.avif",
  "/images/banners/green-ghost-best-cannabis-club-story-04.avif",
];

interface ClubSectionProps {
  locale?: string;
}

export default async function ClubSection({ locale = "en" }: ClubSectionProps) {
  const sections = await getSectionsData();
  const content = getLocalizedSection(sections, "ClubSection", locale);

  const fallbackTitle = "Our Cannabis Club Story";
  const titleText = content.title || fallbackTitle;

  // Format title: Last 2 words green, rest white
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

  const description =
    content.description ||
    "Born in the heart of Thailand, Green Ghost is your premier Thailand cannabis shop dedicated to cultivating premium organic cannabis. Our Thai-grown strains embody our commitment to quality, sustainability, and the rich heritage of Thai cannabis culture. As a leading premium weed Thailand provider, we combine traditional cultivation methods with modern expertise to deliver exceptional products that honor both nature and our local community.";

  // Helper to render links with default fallbacks
  const renderLink = (
    index: number,
    defaultHref: string,
    defaultLabel: string,
    primary: boolean = false,
  ) => {
    const linkData = content.links[index];
    const href = linkData ? linkData.url : defaultHref;
    const label = linkData ? linkData.label : defaultLabel;

    // Using simple boolean logic for className selection to avoid complex conditional chains in JSX
    const className = primary
      ? "bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300 text-center"
      : "bg-transparent border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00]/13 font-bold py-4 px-8 text-lg transition-colors duration-300 text-center";

    return (
      <Link href={href} className={className} title={label} aria-label={label}>
        {label}
      </Link>
    );
  };

  return (
    <section
      aria-label={titleText}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center container mx-auto px-4 py-20 bg-black"
    >
      {/* Text Column */}
      <div className="order-2 lg:order-1">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
          {formatTitle(titleText)}
        </h2>

        <p className="text-md lg:text-lg xl:text-xl text-gray-300 mb-8 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {renderLink(0, "/about", "About Our Club", true)}
          {renderLink(1, "/cannabis-club", "Become a member")}
          {renderLink(2, "/nft", "GET NFT!")}
        </div>
      </div>

      {/* Image Column */}
      <div className="order-1 lg:order-2">
        <div className="relative overflow-hidden aspect-square">
          <MiniSlider
            images={CAROUSEL_IMAGES}
            alt={titleText}
            width={600}
            height={600}
            autoRotate={true}
          />
        </div>
      </div>
    </section>
  );
}
