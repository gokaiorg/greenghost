import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import WholesalesList from "@/components/WholesalesList";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Wholesale",
  });
}

export default async function WholesalePage() {
  return (
    <>
      <PagesBanner pageName="Wholesale" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Wholesale" />
        <WholesalesList />
      </div>
    </>
  );
}
