import Link from "next/link";
import NextImage from "next/image";
import { getPagesData } from "@/lib/bigquery";

const menuPages = [
  "Buds Menu",
  "Pre-Rolls Menu",
  "Concentrates Menu",
  "Edibles Menu",
  "Gadgets Menu",
];

export default async function MenuList() {
  const categoriesData = await Promise.all(
    menuPages.map(async (pageName) => {
      const data = await getPagesData(pageName);
      // Default fallback if data is missing, though strictly expected to be there
      const name =
        data?.title.replace(" Menu", "") || pageName.replace(" Menu", "");
      const slug = name.toLowerCase().replace(/\s+/g, "-");

      // Construct the exact image path used previously
      // e.g. /images/banners/buds-menu-weed-shop-green-ghost.avif
      const imageSlug = slug === "pre-rolls" ? "pre-rolls" : slug;
      const defaultImage = `/images/banners/${imageSlug}-menu-weed-shop-green-ghost.avif`;

      return {
        slug,
        name,
        defaultImage,
        defaultDescription: data?.description || "",
        path: `/menu/${slug}`,
      };
    }),
  );

  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none m-0 p-0"
      aria-label="Menu categories"
    >
      {categoriesData.map((category) => (
        <li key={category.slug}>
          <Link href={category.path} className="group" title={category.name}>
            <div className="relative p-6 pt-[26%] md:pt-24 lg:pt-20 xl:pt-32 aspect-square flex flex-col text-white overflow-hidden">
              {category.defaultImage && (
                <NextImage
                  src={category.defaultImage}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}
              {/* <div className="absolute inset-0 bg-black/60 group-hover:bg-black/69 transition-colors duration-300"></div> */}
              <div className="relative z-10">
                <h2 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#13DE00] transition-colors text-shadow-lg/50">
                  {category.name}
                </h2>
                <p className="text-xs md:text-sm xl:text-base text-gray-100 group-hover:text-white transition-colors pb-8 text-shadow-lg/50">
                  {category.defaultDescription}
                </p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
