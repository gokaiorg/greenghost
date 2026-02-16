import { getPagesData } from "@/lib/bigquery";
import MenuListInlineClient from "@/components/MenuListInlineClient";

const menuPages = [
  "Buds Menu",
  "Pre-Rolls Menu",
  "Concentrates Menu",
  "Edibles Menu",
  "Gadgets Menu",
];

export default async function MenuListInline() {
  const categoriesData = await Promise.all(
    menuPages.map(async (pageName) => {
      const data = await getPagesData(pageName);
      const name =
        data?.title_en?.replace(" Menu", "") || pageName.replace(" Menu", "");
      const slug = name.toLowerCase().replace(/\s+/g, "-");

      return {
        slug,
        name,
        path: `/menu/${slug}`,
      };
    }),
  );

  return <MenuListInlineClient categories={categoriesData} />;
}
