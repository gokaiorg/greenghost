import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { getLocations } from "@/lib/organization-data";
import { Metadata } from "next";
import { PagesMetadata } from "@/components/PagesMetadata";
import LocationsList from "@/components/LocationsList";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Locations",
  });
}

export default async function LocationsPage() {
  const locations = await getLocations();

  return (
    <>
      <PagesBanner pageName="Locations" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Locations" />
        <LocationsList locations={locations} />
      </div>
    </>
  );
}
