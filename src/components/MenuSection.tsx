import Link from "next/link";
import Image from "next/image";
import { getSectionsData } from "@/lib/bigquery";
// import { SectionData } from "@/lib/bigquery-types";
import { getLocalizedSection } from "@/lib/i18n-db";
import { getLocalizedUrl } from "@/lib/i18n-helpers";

interface MenuSectionProps {
  locale?: string;
}

export default async function MenuSection({ locale = "en" }: MenuSectionProps) {
  const sections = await getSectionsData();
  const content = getLocalizedSection(sections, "MenuSection", locale);

  // Fallback content if DB fetch fails or returns empty
  const title = content.title || "Shop Our Weed Menu";
  const description =
    content.description ||
    "Find the rarest strains, from top-tier selections to the cheapest weed in Phuket. Whether you seek premium quality or great value, we have something for everyone in our cannabis menu.";

  return (
    <section
      className="container px-4 py-16 text-center max-w-4xl mx-auto"
      aria-label={title}
    >
      <Image
        src="/images/icons/shop-our-weed-menu-green-ghost.avif"
        alt={title}
        width={420}
        height={105}
        className="mx-auto mb-4"
      />
      <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
        <Link
          href={getLocalizedUrl("/menu", locale)}
          className="text-[#13DE00] hover:text-[#13DE00]/80 transition-colors duration-300"
          aria-label="Shop our cannabis menu"
          title={title}
        >
          {title}
        </Link>
      </h2>
      <p className="text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
        {description}
      </p>
    </section>
  );
}
