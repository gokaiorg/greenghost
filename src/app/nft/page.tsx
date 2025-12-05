import { getNFTs } from '@/lib/nft-data';
import NFTPageContent from '@/components/NFTPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Ghost Degen NFT Collection - Green Ghost 🌿👻',
  description: '420 Green Ghost Degen NFT Collection to enjoy exclusive discounts and cash back on your cannabis purchases at the best degen weed shop.',
  openGraph: {
    title: 'Green Ghost Degen NFT Collection - Green Ghost 🌿👻',
    description: '420 Green Ghost Degen NFT Collection to enjoy exclusive discounts and cash back on your cannabis purchases at the best degen weed shop.',
    url: '/nft',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-nft.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Degen NFT Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Ghost Degen NFT Collection - Green Ghost 🌿👻',
    description: '420 Green Ghost Degen NFT Collection to enjoy exclusive discounts and cash back on your cannabis purchases at the best degen weed shop.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-nft.avif'],
  },
  alternates: {
    canonical: '/nft',
  },
};

export default async function NFTPage() {
  const nfts = await getNFTs();

  return <NFTPageContent nfts={nfts} />;
}
