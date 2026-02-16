import { Metadata } from "next";

export const revalidate = 3600;

import ConcentratesPageContent from "./ConcentratesPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Concentrates Menu",

    locale: lang,

  });
}

export default function ConcentratesPage() {
  return <ConcentratesPageContent menuSlot={<MenuListInline />} />;
}
