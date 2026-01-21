import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import WeedsBlock from "@/components/WeedsBlock";
import WeedNavigation from "@/components/WeedNavigation";
import { getWeedsData } from "@/lib/weeds-data";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Weed",
  });
}

export default async function WeedPage() {
  const weedsData = await getWeedsData();

  return (
    <>
      <PagesBanner pageName="Weed" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Weed" />
        <WeedsBlock
          strains={weedsData.strains}
          compounds={weedsData.compounds}
          info={weedsData.info}
        />
        <WeedNavigation />
      </div>
    </>
  );
}
