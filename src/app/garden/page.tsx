import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import GardensList from "@/components/GardensList";
import WeedNavigation from "@/components/WeedNavigation";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Garden",
  });
}

export default async function GardenPage() {
  return (
    <>
      <PagesBanner pageName="Garden" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Garden" />
        <GardensList />
        <WeedNavigation />
      </div>
    </>
  );
}
