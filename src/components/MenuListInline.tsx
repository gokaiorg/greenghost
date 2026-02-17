import { getPagesData } from "@/lib/bigquery";
import { getLocalizedValue } from "@/lib/i18n-db";
import MenuListInlineClient from "@/components/MenuListInlineClient";

const menuPages = [
  "Buds Menu",
  "Pre-Rolls Menu",
  "Concentrates Menu",
  "Edibles Menu",
  "Gadgets Menu",
];

interface MenuListInlineProps {
  locale?: string;
}

export default async function MenuListInline({ locale = 'en' }: MenuListInlineProps = {}) {
  const categoriesData = await Promise.all(
    menuPages.map(async (pageName) => {
      const data = await getPagesData(pageName);
      const name = data
        ? getLocalizedValue(data, "title", locale)
          .replace(locale === "fr" ? /^Menu\s+/i : /\s+Menu$/i, "") ||
        pageName.replace(" Menu", "")
        : pageName.replace(" Menu", "");

      // Always use English slug for URL consistency
      const slug = pageName.replace(" Menu", "").toLowerCase().replace(/\s+/g, "-");

      return {
        slug,
        name,
        path: locale === 'en' ? `/menu/${slug}` : `/${locale}/menu/${slug}`,
      };
    }),
  );

  return <MenuListInlineClient categories={categoriesData} />;
}
