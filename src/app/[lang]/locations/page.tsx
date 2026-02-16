import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { getAllLocations } from "@/lib/bigquery";
import { Metadata } from "next";
import { PagesMetadata } from "@/components/PagesMetadata";
import LocationsList from "@/components/LocationsList";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Locations",

    locale: lang,

  });
}

export default async function LocationsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locations = await getAllLocations();

  return (
    <>
      <PagesBanner pageName="Locations" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Locations" locale={lang} />
        <LocationsList locations={locations} />
      </div>
    </>
  );
}
