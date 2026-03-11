import { Metadata } from "next";

export const revalidate = 86400;

import BudsPageContent from "./BudsPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Buds Menu",

    locale: lang,
    path: "/menu/buds",
  });
}

import { getPagesData } from "@/lib/bigquery";
import { selectLocalizedField } from "@/lib/i18n-helpers";

export default async function BudsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getPagesData("Buds Menu");

  const title =
    selectLocalizedField<string>(
      pageData as unknown as Record<string, unknown>,
      "title",
      lang,
    ) || "Buds Menu";
  const description =
    selectLocalizedField<string>(
      pageData as unknown as Record<string, unknown>,
      "subtitle",
      lang,
    ) || "Buds price for 1 gram.";

  return (
    <BudsPageContent
      menuSlot={<MenuListInline locale={lang} />}
      locale={lang}
      title={title}
      description={description}
    />
  );
}
