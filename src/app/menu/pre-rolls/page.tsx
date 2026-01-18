import { Metadata } from "next";

export const revalidate = 3600;

import PreRollsPageContent from "./PreRollsPageClient";

import { PagesMetadata } from "@/components/PagesMetadata";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Pre-Rolls Menu",
  });
}

export default function PreRollsPage() {
  return <PreRollsPageContent menuSlot={<MenuListInline />} />;
}
