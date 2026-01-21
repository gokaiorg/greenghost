import Link from "next/link";
import { getListings } from "@/lib/listings";
import { ExternalLink } from "lucide-react";

export default async function ListingsList() {
  const listings = await getListings();

  return (
    <section className="py-12 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 font-pixel text-center">
        <span className="text-[#13DE00]">Find us</span> also on
      </h2>

      <ul
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        aria-label="External Listings"
      >
        {listings.map((listing) => (
          <li key={listing.name} className="list-none">
            <Link
              href={listing.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-black border-2 border-[#13DE00]/30 hover:border-[#13DE00] hover:bg-[#13DE00]/13 transition-all duration-300"
              title={`Find us on ${listing.name}`}
            >
              <span className="text-xs font-bold text-white group-hover:text-[#13DE00] transition-colors font-pixel truncate mr-2">
                {listing.name}
              </span>
              <ExternalLink className="w-4 h-4 text-[#13DE00] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
