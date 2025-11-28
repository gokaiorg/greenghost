import { getNFTs } from '@/lib/nft-data';
import NFTPageContent from '@/components/NFTPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Ghost Degen NFT Collection - Green Ghost 🌿👻',
  description: '420 Green Ghost Degen NFT Collection to enjoy exclusive discounts and cash back on your cannabis purchases at the best degen weed shop.',
};

export default async function NFTPage() {
  const nfts = await getNFTs();

  return <NFTPageContent nfts={nfts} />;
}
