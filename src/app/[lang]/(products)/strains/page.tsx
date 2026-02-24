import { Metadata } from "next";

import StrainsClient from "./StrainsClient";

import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Strains",

    locale: lang,
    path: "/strains",

  });
}

export default async function StrainsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <PagesBanner pageName="Strains" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Strains" locale={lang} />
        <StrainsClient />
      </div>
    </>
  );
}
