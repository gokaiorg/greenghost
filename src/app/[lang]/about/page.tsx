import { Metadata } from "next";

import { PagesMetadata } from "@/components/PagesMetadata";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import PromotesList from "@/components/PromotesList";
import ListingsList from "@/components/ListingsList";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "About",

    locale: lang,

  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <PagesBanner pageName="About" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="About" locale={lang} />
        <PromotesList locale={lang} />
        <ListingsList locale={lang} />
      </div>
    </>
  );
}
