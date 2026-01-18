import PagesBanner from "@/components/PagesBanner";
import SeedsList from "@/components/SeedsList";
import WeedNavigation from "@/components/WeedNavigation";
import { Metadata } from "next";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Seeds",
  });
}

export default async function SeedsPage() {
  return (
    <>
      <PagesBanner pageName="Seeds" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Seeds" />
        <SeedsList />
        <WeedNavigation />
      </div>
    </>
  );
}
