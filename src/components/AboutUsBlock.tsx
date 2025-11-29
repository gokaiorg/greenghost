'use client'

import Link from 'next/link';
import MiniSlider from '@/components/MiniSlider';

const CAROUSEL_IMAGES = [
  '/images/banners/green-ghost-best-cannabis-club-story-01.avif',
  '/images/banners/green-ghost-best-cannabis-club-story-02.avif',
  '/images/banners/green-ghost-best-cannabis-club-story-03.avif',
  '/images/banners/green-ghost-best-cannabis-club-story-04.avif',
];

export default function AboutUsBlock() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Column */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="text-white">Our Cannabis</span> <span className="text-[#13DE00]">Club Story</span>
            </h2>

            <p className="text-md lg:text-lg xl:text-xl text-gray-300 mb-8 leading-relaxed">
              Born in the heart of Thailand, Green Ghost is your premier Thailand cannabis shop dedicated to cultivating premium organic cannabis. Our Thai-grown strains embody our commitment to quality, sustainability, and the rich heritage of Thai cannabis culture. As a leading premium weed Thailand provider, we combine traditional cultivation methods with modern expertise to deliver exceptional products that honor both nature and our local community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300 text-center"
                title="About Our Club"
              >
                About Our Club
              </Link>
              <Link
                href="/cannabis-club"
                className="bg-transparent border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00]/10 font-bold py-4 px-8 text-lg transition-colors duration-300 text-center"
                aria-label="Become a cannabis club member"
                title="Become a member"
              >
                Become a member
              </Link>
              <Link
                href="/nft"
                className="bg-transparent border-2 border-[#13DE00] text-[#13DE00] hover:bg-[#13DE00]/10 font-bold py-4 px-8 text-lg transition-colors duration-300 text-center"
                aria-label="Get Green Ghost NFT"
                title="Get Green Ghost NFT"
              >
                GET NFT!
              </Link>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden aspect-square">
              <MiniSlider
                images={CAROUSEL_IMAGES}
                alt="Green Ghost Cannabis Club Story"
                width={600}
                height={600}
                autoRotate={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}