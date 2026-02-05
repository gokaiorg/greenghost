import { getNFTsData } from "@/lib/bigquery";
import NFTPageContent from "@/components/NFTPageContent";
import { Metadata } from "next";
import PagesBanner from "@/components/PagesBanner";
import PagesIntro from "@/components/PagesIntro";
import { PagesMetadata } from "@/components/PagesMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Nft",
  });
}

export default async function NFTPage() {
  const nfts = await getNFTsData();

  return (
    <>
      <PagesBanner pageName="Nft" />
      <div className="container mx-auto px-4">
        <PagesIntro pageName="Nft" />
        <NFTPageContent nfts={nfts} />
      </div>
    </>
  );
}
