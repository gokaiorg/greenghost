import { Metadata } from "next";
import { getBestShops } from "@/lib/organization-data";
import BestShopsList from "@/components/BestShopsList";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Best Weed Shops Thailand",
  });
}

export default async function BestShopsPage() {
  const shops = await getBestShops();

  return (
    <>
      <PagesBanner pageName="Best Weed Shops Thailand" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Best Weed Shops Thailand" />
        <BestShopsList shops={shops} />
      </div>
    </>
  );
}
