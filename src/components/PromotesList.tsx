import Link from "next/link";
import Image from "next/image";
import { getPromotesData } from "@/lib/bigquery";
import { selectLocalizedField } from "@/lib/i18n-helpers";

const imageMapping: Record<string, string> = {
  "Cannabis Medical Prescription": "legal-laws",
  "Coffee shop Rawai": "coffeeshop",
  "Weed Delivery Phuket": "delivery",
  "Green Ghost CBD": "cbd-france",
};

interface PromotesListProps {
  locale?: string;
}

export default async function PromotesList({ locale = 'en' }: PromotesListProps = {}) {
  const items = await getPromotesData();

  return (
    <section className="container mx-auto px-4 py-12">
      <ul
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4"
        aria-label="Promotions List"
      >
        {items.map((item, index) => {
          const title = selectLocalizedField<string>((item as unknown) as Record<string, unknown>, 'title', locale) || item.title;
          const description = selectLocalizedField<string>((item as unknown) as Record<string, unknown>, 'description', locale) || item.description;
          const linkLabel = selectLocalizedField<string>((item as unknown) as Record<string, unknown>, 'link_label', locale) || item.link_label;

          const imageKey =
            imageMapping[title] ||
            title.toLowerCase().replace(/\s+/g, "-");
          const imagePath = `/images/icons/green-ghost-${imageKey}.avif`;

          return (
            <li
              key={index}
              className="relative aspect-square w-full overflow-hidden group list-none"
            >
              {/* Background Image */}
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300">
                <h3 className="text-xl xl:text-2xl font-bold text-white mb-3 font-pixel">
                  {title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-200 mb-6">
                  {description}
                </p>
                <Link
                  href={item.link}
                  className="inline-block bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-3 px-8 transition-colors uppercase text-sm tracking-wider"
                >
                  {linkLabel}
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
