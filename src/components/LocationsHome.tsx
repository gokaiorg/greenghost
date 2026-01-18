import Link from "next/link";
import Image from "next/image";
import { getLocations } from "@/lib/organization-data";

export default async function LocationsHome() {
  const locations = await getLocations();

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#13DE00]/5  blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#13DE00]/5  blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/icons/best-weed-shops-green-ghost.avif"
              alt="Best Weed Shops Green Ghost"
              width={192}
              height={192}
              className="w-auto h-40 md:h-48 object-contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Best <span className="text-[#13DE00]">Weed Shops</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Visit us at one of our premium locations in Thailand and France.
            Experience the best cannabis, friendly service, and a chill
            atmosphere.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12 list-none m-0 p-0"
          aria-label="List of best weed shops"
        >
          {locations.map((location) => (
            <li
              key={location.slug}
              className="bg-[#13DE00]/13 border border-[#13DE00]/21 p-8 hover:border-[#13DE00]/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#13DE00] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>

              <Link
                href={`/locations/${location.slug}`}
                className="block group-hover:text-[#13DE00] transition-colors"
                title={location.name}
              >
                <h3 className="text-base font-bold text-white group-hover:text-[#13DE00] mb-3 transition-colors">
                  {location.name}
                </h3>
              </Link>

              <address className="not-italic text-gray-400 mb-4 space-y-2 text-xs leading-relaxed">
                <a
                  href={location.addressLink}
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
            href="/locations"
            title="See All Locations"
            className="inline-flex items-center gap-2 text-white hover:text-[#13DE00] font-bold transition-colors group"
          >
            See All Locations
            <span className="transform group-hover:translate-x-1 transition-transform">
              &gt;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
