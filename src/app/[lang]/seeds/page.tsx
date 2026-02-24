import PagesBanner from "@/components/PagesBanner";
import SeedsList from "@/components/SeedsList";
import WeedNavigation from "@/components/WeedNavigation";
import { Metadata } from "next";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Seeds",

    locale: lang,
    path: "/seeds",

  });
}

export default async function SeedsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <>
      <PagesBanner pageName="Seeds" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Seeds" locale={lang} />
        <SeedsList />
        <WeedNavigation />
      </div>
    </>
  );
}
