import { getNFTsData } from "@/lib/bigquery";
export const revalidate = 86400;
import NFTPageContent from "@/components/NFTPageContent";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string; lang: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const nfts = await getNFTsData();
  const nft = nfts.find((n) => n.slug === slug);

  if (!nft) {
    return {
      title: "NFT Not Found - Green Ghost 🌿👻",
    };
  }

  return {
    title: `${nft.name} - Green Ghost 🌿👻`,
    description: nft.description,
    openGraph: {
      images: [nft.logo],
    },
  };
}

export async function generateStaticParams() {
  const nfts = await getNFTsData();
  return nfts.map((nft) => ({
    slug: nft.slug,
  }));
}

export default async function NFTDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const nfts = await getNFTsData();
  const nft = nfts.find((n) => n.slug === slug);

  if (!nft) {
    notFound();
  }

  return <NFTPageContent nfts={nfts} initialSlug={slug} />;
}
