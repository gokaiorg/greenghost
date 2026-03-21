import { getNFTsData } from "@/lib/firestore";
export const revalidate = 86400;
import NFTPageContent from "@/components/NFTPageContent";
import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;

  return PagesMetadata({
    pageName: "Nft",

    locale: lang,
    path: "/nft",
  });
}

export default async function NFTPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const nfts = await getNFTsData();

  return (
    <>
      <PagesBanner pageName="Nft" locale={lang} />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Nft" locale={lang} />
        <NFTPageContent nfts={nfts} />
      </div>
    </>
  );
}
