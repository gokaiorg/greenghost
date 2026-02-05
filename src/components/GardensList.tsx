import Image from "next/image";
import { getGardensData } from "@/lib/bigquery";

export default async function GardensList() {
  const gardens = await getGardensData();

  if (!gardens || gardens.length === 0) {
    return null;
  }

  // Group items by date
  const groupedGardens = gardens.reduce(
    (acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {} as Record<string, typeof gardens>,
  );

  const sortedGroups = Object.entries(groupedGardens).sort(
    ([dateA], [dateB]) => {
      const [dayA, monthA, yearA] = dateA.split(" ").map(Number);
      const [dayB, monthB, yearB] = dateB.split(" ").map(Number);
      return (
        new Date(yearB, monthB - 1, dayB).getTime() -
        new Date(yearA, monthA - 1, dayA).getTime()
      );
    },
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sortedGroups
      .flatMap(([date, items]) =>
        items.map((item) => ({
          "@type": "ListItem",
          item: {
            "@type": "Article",
            headline: `Green Garden Update - ${date}`,
            image: item.image,
            datePublished: date.split(" ").reverse().join("-"),
            articleBody: item.description,
          },
        })),
      )
      .map((item, index) => ({ ...item, position: index + 1 })),
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ul
        aria-label="Garden Updates Timeline"
        className="relative border-l-2 border-[#13DE00]/30 ml-3 md:ml-6 space-y-12"
      >
        {sortedGroups.map(([date, items], groupIndex) => (
          <li
            key={groupIndex}
            className="relative flex flex-col md:flex-row gap-6 md:gap-10 pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#13DE00] shadow-[0_0_10px_#13DE00] border-2 border-black" />

            {/* Date Badge */}
            <div className="md:w-32 flex-shrink-0">
              <time
                dateTime={date.split(" ").reverse().join("-")}
                className="inline-block px-3 py-1 bg-[#13DE00] text-black font-pixel font-bold text-sm shadow-[4px_4px_0px_#000000] border border-black"
              >
                {date}
              </time>
            </div>

            {/* Group Content Cards */}
            <ul
              aria-label={`Updates for ${date}`}
              className="flex-grow space-y-8"
            >
              {items.map((item, index) => (
                <li key={index}>
                  <article className="bg-[#111] border border-[#333] p-4 md:p-6 shadow-lg hover:border-[#13DE00]/50 transition-colors group">
                    <div className="mb-4 relative w-full aspect-square overflow-hidden bg-black/50 border border-[#222]">
                      <Image
                        src={item.image}
                        alt={`Green Ghost Garden - ${item.date}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      />
                    </div>
                    <p className="text-gray-300 font-pixel text-xs md:text-sm">
                      {item.description}
                    </p>
                  </article>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
