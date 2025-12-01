import { Metadata } from 'next';
import { Suspense } from 'react';

import { getPageBySlugServer as getPageBySlug, getPagesServerSide as getPages } from '@/lib/pages-server';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getClubs } from '@/lib/organization-data';
import Banner from '@/components/Banner';
import ClubsList from '@/components/ClubsList';

export const metadata: Metadata = {
  title: 'Best Cannabis Social Club in Phuket Thailand - Green Ghost 🌿👻',
  description: 'Join Green Ghost, Phuket\'s top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand.',
  openGraph: {
    title: 'Best Cannabis Social Club in Phuket Thailand - Green Ghost 🌿👻',
    description: 'Join Green Ghost, Phuket\'s top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand.',
    type: 'website',
    locale: 'en_US',
    url: '/cannabis-club',
    siteName: 'Green Ghost',
    images: [
      {
        url: '/images/banners/green-ghost-best-degen-weed-shop-cannabis-club.avif',
        width: 1920,
        height: 1080,
        alt: 'Green Ghost Cannabis Social Club in Phuket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Cannabis Social Club in Phuket Thailand - Green Ghost 🌿👻',
    description: 'Join Green Ghost, Phuket\'s top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-cannabis-club.avif'],
  },
};

// Server component that fetches data
async function CannabisClubContent() {
  const [page, allPages, clubs] = await Promise.all([
    getPageBySlug('cannabis-club'),
    getPages(),
    getClubs()
  ]);

  const cannabisClubPage = allPages.find(p => p.slug === 'cannabis-club');

  const bannerData = await getBannerData('cannabis-club', {
    description: cannabisClubPage?.subtitle || 'Join our exclusive cannabis community',
    bgSrc: cannabisClubPage?.image || "/banners/green-ghost-best-degen-weed-shop-cannabis-club.avif"
  });

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Page not found</p>
      </div>
    );
  }

  return (
    <>
      <Banner {...bannerData} />
      <div className="container mx-auto px-4 bg-black text-white">
        {/* Original description from the page */}
        {page.description && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: page.description }}
          />
        )}

        {/* Section title and description from pages.csv */}
        {bannerData.sectionTitle && bannerData.sectionTitle.trim() !== '' && (
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-[#13DE00]">
            {bannerData.sectionTitle}
          </h2>
        )}

        {bannerData.sectionDescription && bannerData.sectionDescription.trim() !== '' && (
          <div
            className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
            dangerouslySetInnerHTML={{ __html: bannerData.sectionDescription }}
          />
        )}
      </div>

      {/* Club List */}
      <ClubsList clubs={clubs} />
    </>
  );
}

// Client component wrapper with loading state
function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-12 h-12 bg-[#13DE00] animate-pulse"></div>
    </div>
  );
}

export default function CannabisClubPage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <CannabisClubContent />
    </Suspense>
  );
}
