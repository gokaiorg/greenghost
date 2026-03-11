import { Metadata } from "next";

export const revalidate = 86400;

import GadgetsPageContent from "./GadgetsPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Gadgets Menu",

    locale: lang,
    path: "/menu/gadgets",
  });
}

import { getPagesData } from "@/lib/bigquery";
import { selectLocalizedField } from "@/lib/i18n-helpers";

export default async function GadgetsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getPagesData("Gadgets Menu");

  const title =
    selectLocalizedField<string>(
      pageData as unknown as Record<string, unknown>,
      "title",
      lang,
    ) || "Gadgets Menu";
  const description =
    selectLocalizedField<string>(
      pageData as unknown as Record<string, unknown>,
      "subtitle",
      lang,
    ) || "Elevate your smoking experience.";

  return (
    <GadgetsPageContent
      menuSlot={<MenuListInline locale={lang} />}
      locale={lang}
      title={title}
      description={description}
    />
  );
}
