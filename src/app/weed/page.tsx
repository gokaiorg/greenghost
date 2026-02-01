import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import WeedsBlock from "@/components/WeedsBlock";
import WeedNavigation from "@/components/WeedNavigation";
import { getWeedsData } from "@/lib/bigquery";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Weed",
  });
}

export default async function WeedPage() {
  const weedsData = await getWeedsData();

  // Legacy slicing logic from weeds-data.ts
  const strains = weedsData.slice(0, 3);
  const compounds = weedsData.slice(3, 5);
  const info = weedsData.slice(5);

  return (
    <>
      <PagesBanner pageName="Weed" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Weed" />
        <WeedsBlock
          strains={strains}
          compounds={compounds}
          info={info}
        />
        <WeedNavigation />
      </div>
    </>
  );
}
