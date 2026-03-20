import Link from "next/link";
import { getListingsData } from "@/lib/firestore";
import { ExternalLink } from "lucide-react";
import { sanitizeUrl } from "@/lib/utils/url";
import { selectLocalizedField } from "@/lib/i18n-helpers";

interface ListingsListProps {
  locale?: string;
}

export default async function ListingsList({
  locale = "en",
}: ListingsListProps = {}) {
  const listings = await getListingsData();

  return (
    <section className="py-12 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-pixel text-center">
        <span className="text-[#13DE00]">Find us</span> also on
      </h2>

      <ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        aria-label="External Listings"
      >
        {listings.map((listing) => {
          const name =
            selectLocalizedField<string>(
              listing as unknown as Record<string, unknown>,
              "name",
              locale,
            ) || listing.name;

          return (
            <li key={name} className="list-none">
              <Link
                href={sanitizeUrl(listing.link)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 bg-black border-2 border-[#13DE00]/30 hover:border-[#13DE00] hover:bg-[#13DE00]/13 transition-all duration-300"
                title={`Find us on ${name}`}
              >
                <span className="text-xs font-bold text-white group-hover:text-[#13DE00] transition-colors font-pixel truncate mr-2">
                  {name}
                </span>
                <ExternalLink className="w-4 h-4 text-[#13DE00] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
