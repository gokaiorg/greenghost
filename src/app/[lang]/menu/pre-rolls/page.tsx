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

  });
}

export default function PreRollsPage() {
  return <PreRollsPageContent menuSlot={<MenuListInline />} />;
}
