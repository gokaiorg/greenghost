import { Metadata } from "next";
export const revalidate = 86400;
import PagesBanner from "@/components/PagesBanner";
import WeedsBlock from "@/components/WeedsBlock";
import WeedNavigation from "@/components/WeedNavigation";
import { getWeedsData } from "@/lib/firestore";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Weed",

    locale: lang,
    path: "/weed",
  });
}

export default async function WeedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const weedsData = await getWeedsData();

  // Legacy slicing logic from weeds-data.ts
  const strains = weedsData.slice(0, 3);
  const compounds = weedsData.slice(3, 5);
  const info = weedsData.slice(5);

  return (
    <>
      <PagesBanner pageName="Weed" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Weed" locale={lang} />
        <WeedsBlock strains={strains} compounds={compounds} info={info} />
        <WeedNavigation />
      </div>
    </>
  );
}
