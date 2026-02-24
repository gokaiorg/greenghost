import { Metadata } from "next";
import { getBestShopsData } from "@/lib/bigquery";
import BestShopsList from "@/components/BestShopsList";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({

    pageName: "Best Weed Shops Thailand",

    locale: lang,
    path: "/best-weed-shops-thailand",

  });
}

export default async function BestShopsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const shops = await getBestShopsData();

  return (
    <>
      <PagesBanner pageName="Best Weed Shops Thailand" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Best Weed Shops Thailand" locale={lang} />
        <BestShopsList shops={shops} />
      </div>
    </>
  );
}
