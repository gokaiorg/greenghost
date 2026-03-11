import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import GrowersList from "@/components/GrowersList";
import WeedNavigation from "@/components/WeedNavigation";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Growers",

    locale: lang,
    path: "/growers",
  });
}

export default async function WeedGrowerPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <PagesBanner pageName="Growers" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Growers" locale={lang} />
        <GrowersList />
        <WeedNavigation />
      </div>
    </>
  );
}
