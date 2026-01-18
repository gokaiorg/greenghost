import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import GrowersList from "@/components/GrowersList";
import WeedNavigation from "@/components/WeedNavigation";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Growers",
  });
}

export default async function WeedGrowerPage() {
  return (
    <>
      <PagesBanner pageName="Growers" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Growers" />
        <GrowersList />
        <WeedNavigation />
      </div>
    </>
  );
}
