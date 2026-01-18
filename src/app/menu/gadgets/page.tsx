import { Metadata } from "next";

export const revalidate = 3600;

import GadgetsPageContent from "./GadgetsPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Gadgets Menu",
  });
}

export default function GadgetsPage() {
  return <GadgetsPageContent menuSlot={<MenuListInline />} />;
}
