import { Metadata } from "next";

export const revalidate = 3600;

import EdiblesPageContent from "./EdiblesPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Edibles Menu",

    locale: lang,
    path: "/menu/edibles",
    path: "/menu/edibles",

  });
}

import { getPagesData } from "@/lib/bigquery";
import { selectLocalizedField } from "@/lib/i18n-helpers";

export default async function EdiblesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getPagesData("Edibles Menu");

  const title = selectLocalizedField<string>((pageData as unknown) as Record<string, unknown>, 'title', lang) || "Edibles Menu";
  const description = selectLocalizedField<string>((pageData as unknown) as Record<string, unknown>, 'subtitle', lang) || "Edibles price per serving.";

  return (
    <EdiblesPageContent
      menuSlot={<MenuListInline locale={lang} />}
      locale={lang}
      title={title}
      description={description}
    />
  );
}
