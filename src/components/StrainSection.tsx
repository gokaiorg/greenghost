import Link from "next/link";
import { Product } from "@/lib/types";
import { getProducts } from "@/lib/products";
import { getSectionsData } from "@/lib/bigquery";
import { getLocalizedSection } from "@/lib/i18n-db";
import { getLocalizedUrl } from "@/lib/i18n-helpers";
import MiniSlider from "@/components/MiniSlider";
import BagAddButton from "@/components/BagAddButton";

const featuredStrainNames = [
  "Tropical Sunrise",
  "Mango Sticky Rice",
  "Super Boof",
  "Biscotti OG",
  "Thai Stick",
  "LA Banana",
];

interface StrainSectionProps {
  locale?: string;
}

export default async function StrainSection({
  locale = "en",
}: StrainSectionProps) {
  const [allProducts, sections] = await Promise.all([
    getProducts(),
    getSectionsData(),
  ]);

  const content = getLocalizedSection(sections, "StrainSection", locale);

  // Fallback content strings
  const fallbackTitle = "Top 6 Must-Try Weed Strains in 2026";
  const titleText = content.title || fallbackTitle;

  // Format title: first 3 words green
  const formatTitle = (text: string) => {
    const words = text.split(" ");
    if (words.length <= 3)
      return <span className="text-[#13DE00]">{text}</span>;
    const firstThree = words.slice(0, 3).join(" ");
    const rest = words.slice(3).join(" ");
    return (
      <>
        <span className="text-[#13DE00]">{firstThree}</span> {rest}
      </>
    );
  };

  const description =
    content.description ||
    "Explore the best weed in Phuket in 2026 with our curated selection of top-quality strains. Handpicked for their superior effects and flavors, these strains include a variety of Sativa, Hybrid, and Indica dominances, each chosen to elevate your experience.";

  const products = allProducts
    .filter(
      (product: Product) =>
        product.type === "Strains" &&
        featuredStrainNames.includes(product.name) &&
        product.status === "In stock",
    )
    .slice(0, 6);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-8" aria-label={titleText}>
      <h2 className="text-xl lg:text-2xl font-bold text-left mb-2">
        {formatTitle(titleText)}
      </h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 list-none m-0 p-0"
        aria-label={titleText}
      >
        {products.map((bud) => (
          <li key={bud.id} className="relative">
            <Link
              href={getLocalizedUrl(`/strains/${bud.id}`, locale)}
              title={bud.name}
            >
              <div
                className={`hover:bg-[#13DE00]/13 p-1 flex flex-col relative cursor-pointer`}
              >
                <div className="relative mb-2">
                  <MiniSlider
                    images={[
                      `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-cover.avif`,
                      `/images/strains/green-ghost-degen-weed-shop-strain-${bud.id}-bud-01.avif`,
                    ]}
                    alt={bud.name}
                    width={100}
                    height={100}
                    autoRotate={true}
                    interactive={false}
                  />
                </div>
                <h2 className="text-base lg:text-md font-semibold mb-1 text-sm leading-tight">
                  {bud.name}
                </h2>
                <div className="flex justify-between flex-wrap">
                  <p
                    className={`text-[10px] sm:text-xs whitespace-nowrap mb-1 ${bud.dominance?.startsWith("Sativa") ? "text-[#d1fee5]" : bud.dominance?.startsWith("Hybrid") ? "text-[#c0ef24]" : bud.dominance?.startsWith("Indica") ? "text-[#ee9cc9]" : "text-gray-400"}`}
                  >
                    {bud.dominance}
                  </p>
                  {bud.thc && bud.thc > 0 ? (
                    <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                      THC {bud.thc}%
                    </p>
                  ) : bud.cbd && bud.cbd > 0 ? (
                    <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                      CBD {bud.cbd}%
                    </p>
                  ) : null}
                </div>
                <p
                  className={`absolute top-2 right-2 px-2 py-1 text-sm bg-black text-[#13DE00]`}
                >
                  {bud.price}฿
                </p>
              </div>
            </Link>
            <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px] lg:h-[317px] xl:h-[193px] 2xl:h-[236px] pointer-events-none z-10">
              {" "}
              <div className="absolute bottom-1 right-1 pointer-events-auto">
                <BagAddButton product={bud} category="Buds" compact />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        {content.links[0] && (
          <Link
            href={getLocalizedUrl(content.links[0].url, locale)}
            title={content.links[0].label}
            className="bg-transparent border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00]/13 font-bold py-3 px-6 text-base transition-colors duration-300 text-center"
          >
            {content.links[0].label}
          </Link>
        )}

        {content.links[1] && (
          <Link
            href={getLocalizedUrl(content.links[1].url, locale)}
            title={content.links[1].label}
            className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-3 px-6 text-base transition-colors duration-300 text-center"
          >
            {content.links[1].label}
          </Link>
        )}
      </div>
    </section>
  );
}
