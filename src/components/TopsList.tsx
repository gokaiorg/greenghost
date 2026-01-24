import Link from "next/link";
import Image from "next/image";
import { getTops } from "@/lib/organization-data";
import { sanitizeUrl } from "@/lib/utils/url";

export default async function TopsList() {
  const tops = await getTops();

  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Top dispensary in{" "}
              <span className="text-[#13DE00]">Phuket Thailand 2026</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl">
              See where Green Ghost stands among the best dispensaries in Phuket
              Thailand in 2026.
            </p>
          </div>

          <Link
            href="/best-weed-shops-thailand"
            className="shrink-0 inline-flex items-center gap-2 text-[#13DE00] hover:text-white font-bold text-sm transition-colors group border border-[#13DE00]/21 hover:border-[#13DE00] px-4 py-2 rounded-none bg-[#13DE00]/5 hover:bg-[#13DE00]/13"
            title="Best weed shops in Thailand"
          >
            Best weed shops in Thailand
            <span className="transform group-hover:translate-x-1 transition-transform">
              &gt;
            </span>
          </Link>
        </div>

        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          aria-label="Top Dispensaries List"
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
      </div>
    </section>
  );
}
