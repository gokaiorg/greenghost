import { getNFTs, getNFTBySlug } from '@/lib/nft-data';
import NFTPageContent from '@/components/NFTPageContent';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const nft = await getNFTBySlug(slug);

    if (!nft) {
        return {
            title: 'NFT Not Found - Green Ghost 🌿👻',
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
    const nfts = await getNFTs();
    return nfts.map((nft) => ({
        slug: nft.slug,
    }));
}

export default async function NFTDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const nfts = await getNFTs();
    const nft = nfts.find((n) => n.slug === slug);

    if (!nft) {
        notFound();
    }

    return <NFTPageContent nfts={nfts} initialSlug={slug} />;
}
