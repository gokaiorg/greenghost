import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import ClubsList from "@/components/ClubsList";
import { getClubsData } from "@/lib/bigquery";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({ pageName: "Cannabis Club" });
}

export default async function CannabisClubPage() {
  const clubs = await getClubsData();

  return (
    <>
      <PagesBanner pageName="Cannabis Club" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Cannabis Club" />
        <ClubsList clubs={clubs} />
      </div>
    </>
  );
}
