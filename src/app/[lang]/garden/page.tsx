import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import GardensList from "@/components/GardensList";
import WeedNavigation from "@/components/WeedNavigation";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Garden",

    locale: lang,

  });
}

export default async function GardenPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <PagesBanner pageName="Garden" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Garden" locale={lang} />
        <GardensList />
        <WeedNavigation />
      </div>
    </>
  );
}
