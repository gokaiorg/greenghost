import { Metadata } from "next";

import EdiblesPageContent from "./EdiblesPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Edibles Menu",
  });
}

export default function EdiblesPage() {
  return <EdiblesPageContent menuSlot={<MenuListInline />} />;
}
