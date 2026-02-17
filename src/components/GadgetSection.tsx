import Link from "next/link";
import { Product } from "@/lib/types";
import { getProducts } from "@/lib/products";
import { getSectionsData } from "@/lib/bigquery";
import { getLocalizedSection } from "@/lib/i18n-db";
import MiniSlider from "@/components/MiniSlider";
import BagAddButton from "@/components/BagAddButton";

const featuredGadgetNames = [
  "WEED.TH Rolling Papers + Tips",
  "Glass Ice Bong",
  "Clipper Lighter",
  "SlimJim Rolling Papers + Tips",
  "Toppuff Small",
  "Plastic Grinder",
];

interface GadgetSectionProps {
  locale?: string;
}

export default async function GadgetSection({
  locale = "en",
}: GadgetSectionProps) {
  const [allProducts, sections] = await Promise.all([
    getProducts(),
    getSectionsData(),
  ]);

  const content = getLocalizedSection(sections, "GadgetSection", locale);

  const titleContent =
    content.title || "Top 6 Must-Have Cannabis Accessory in 2026";
  const description =
    content.description ||
    "Elevate your sessions with our essential selection of top-tier cannabis accessories. From precision grinders to premium glassware, these gadgets are chosen to enhance every aspect of your ritual.";
  const linkLabel = content.links[0]?.label || "View all Gadgets";
  const linkUrl = content.links[0]?.url || "/menu/gadgets";

  // Format title: "Cannabis Accessory" in green if found, otherwise simple string
  const formatTitle = (text: string) => {
    // Fallback specific formatting for the default title
    if (text === "Top 6 Must-Have Cannabis Accessory in 2026") {
      return (
        <>
          Top 6 Must-Have{" "}
          <span className="text-[#13DE00]">Cannabis Accessory</span> in 2026
        </>
      );
    }
    // Generic formatting: last 2 words green if not default
    const words = text.split(" ");
    if (words.length <= 2)
      return <span className="text-[#13DE00]">{text}</span>;
    // Just a simpleheuristic for now, or we can just render text
    return text; // For custom titles from DB, we might want a different logic or just plain text
  };

  const products = allProducts
    .filter(
      (product: Product) =>
        product.type === "Gadgets" &&
        featuredGadgetNames.includes(product.name),
    )
    // Sort by the order in featuredGadgetNames
    .sort(
      (a, b) =>
        featuredGadgetNames.indexOf(a.name) -
        featuredGadgetNames.indexOf(b.name),
    )
    .slice(0, 6);

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-8" aria-label={titleContent}>
      <h2 className="text-xl lg:text-2xl font-bold text-left mb-2">
        {formatTitle(titleContent)}
      </h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 list-none m-0 p-0"
        aria-label={titleContent}
      >
        {products.map((gadget) => (
          <li key={gadget.id} className="relative">
            <Link href={`/gadgets/${gadget.id}`} title={gadget.name}>
              <div
                className={`hover:bg-[#13DE00]/13 p-1 flex flex-col relative cursor-pointer`}
              >
                <div className="relative mb-2">
                  <MiniSlider
                    images={gadget.images || [gadget.image]}
                    alt={gadget.name}
                    width={100}
                    height={100}
                    autoRotate={true}
                    interactive={false}
                  />
                </div>
                <h2 className="text-base lg:text-md font-semibold mb-1 text-sm leading-tight">
                  {gadget.name}
                </h2>
                <div className="flex justify-between flex-wrap">
                  <p className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                    {gadget.status}
                  </p>
                </div>
                <p
                  className={`absolute top-2 right-2 px-2 py-1 text-sm bg-black text-[#13DE00]`}
                >
                  {gadget.price}฿
                </p>
              </div>
            </Link>
            <div className="mt-8 md:mt-0 md:absolute md:top-1 md:left-1 md:right-1 md:h-[232px] lg:h-[317px] xl:h-[193px] 2xl:h-[236px] pointer-events-none z-10">
              <div className="absolute bottom-1 right-1 pointer-events-auto">
                <BagAddButton product={gadget} category="Gadgets" compact />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          href={linkUrl}
          className="inline-block px-8 py-3 bg-[#13DE00] text-black font-bold text-lg hover:bg-[#13DE00]/80 transition-colors uppercase font-pixel shadow-[4px_4px_0px_#000000] border border-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#000000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
        >
          {linkLabel}
        </Link>
      </div>
    </section>
  );
}
