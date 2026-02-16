import { Metadata } from "next";

export const revalidate = 3600;

import BudsPageContent from "./BudsPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Buds Menu",

    locale: lang,

  });
}

export default function BudsPage() {
  return <BudsPageContent menuSlot={<MenuListInline />} />;
}
