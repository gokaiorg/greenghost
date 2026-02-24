import { Metadata } from "next";

export const revalidate = 3600;

import PreRollsPageContent from "./PreRollsPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Pre-Rolls Menu",

    locale: lang,
    path: "/menu/pre-rolls",

  });
}

import { getPagesData } from "@/lib/bigquery";
import { selectLocalizedField } from "@/lib/i18n-helpers";

export default async function PreRollsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getPagesData("Pre-Rolls Menu");

  const title = selectLocalizedField<string>((pageData as unknown) as Record<string, unknown>, 'title', lang) || "Pre-rolls Menu";
  const description = selectLocalizedField<string>((pageData as unknown) as Record<string, unknown>, 'subtitle', lang) || "On demand. +20THB on delivery. Free on store.";

  return (
    <PreRollsPageContent
      menuSlot={<MenuListInline locale={lang} />}
      locale={lang}
      title={title}
      description={description}
    />
  );
}
