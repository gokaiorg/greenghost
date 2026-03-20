import Link from "next/link";
import Image from "next/image";
import { getGrowersData } from "@/lib/firestore";
import { ExternalLink } from "lucide-react";
import { sanitizeUrl } from "@/lib/utils/url";

export default async function GrowersList() {
  const growers = await getGrowersData();

  return (
    <section className="py-12 w-full max-w-6xl mx-auto">
      <ul
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        aria-label="Growers List"
      >
        {growers.map((grower) => {
          const slug = grower.name.toLowerCase().replace(/\s+/g, "-");
          const imagePath = `/images/partners/green-ghost-weed-grower-${slug}.avif`;

          return (
            <li key={grower.name} className="list-none">
              <Link
                href={sanitizeUrl(grower.link)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-between p-6 bg-[#13DE00]/13 border border-[#13DE00]/21 hover:border-[#13DE00] transition-all duration-300 h-full gap-4"
                title={`Visit ${grower.name}`}
              >
                <div className="relative w-full aspect-square bg-black/69  overflow-hidden p-4">
                  <Image
                    src={imagePath}
                    alt={`${grower.name} logo`}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                </div>
                <div className="flex items-center justify-center gap-2 w-full">
                  <span className="text-sm md:text-base font-bold text-white group-hover:text-[#13DE00] transition-colors font-pixel text-center">
                    {grower.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-[#13DE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
