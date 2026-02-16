import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import ClubsList from "@/components/ClubsList";
import { getClubsData } from "@/lib/bigquery";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Cannabis Club",

    locale: lang,

  });
}

export default async function CannabisClubPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const clubs = await getClubsData();

  return (
    <>
      <PagesBanner pageName="Cannabis Club" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Cannabis Club" locale={lang} />
        <ClubsList clubs={clubs} />
      </div>
    </>
  );
}
