import { Metadata } from "next";

export const revalidate = 3600;

import BudsPageContent from "./BudsPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Buds Menu",
  });
}

export default function BudsPage() {
  return <BudsPageContent menuSlot={<MenuListInline />} />;
}
