import { Metadata } from "next";

export const revalidate = 86400;

import ConcentratesPageContent from "./ConcentratesPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Concentrates Menu",

    locale: lang,
    path: "/menu/concentrates",
  });
}

import { getPagesData } from "@/lib/bigquery";
import { selectLocalizedField } from "@/lib/i18n-helpers";

export default async function ConcentratesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getPagesData("Concentrates Menu");

  const title =
    selectLocalizedField<string>(
      pageData as unknown as Record<string, unknown>,
      "title",
      lang,
    ) || "Concentrates Menu";
  const description =
    selectLocalizedField<string>(
      pageData as unknown as Record<string, unknown>,
      "subtitle",
      lang,
    ) || "Concentrates price for 1 gram.";

  return (
    <ConcentratesPageContent
      menuSlot={<MenuListInline locale={lang} />}
      locale={lang}
      title={title}
      description={description}
    />
  );
}
