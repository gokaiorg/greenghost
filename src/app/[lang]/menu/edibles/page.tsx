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

  });
}

export default function EdiblesPage() {
  return <EdiblesPageContent menuSlot={<MenuListInline />} />;
}
