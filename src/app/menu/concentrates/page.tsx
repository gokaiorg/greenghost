import { Metadata } from "next";

import ConcentratesPageContent from "./ConcentratesPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Concentrates Menu",
  });
}

export default function ConcentratesPage() {
  return <ConcentratesPageContent menuSlot={<MenuListInline />} />;
}
