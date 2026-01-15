import { Metadata } from 'next';
import Banner from '@/components/Banner';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import GardensList from '@/components/GardensList';
import WeedNavigation from '@/components/WeedNavigation';

export const metadata: Metadata = {
    title: "Green Ghost's Garden Indoor Cannabis Grow in Thailand - Green Ghost 🌿👻",
    description: "Join Green Ghost's Garden for a shared indoor cannabis growing journey in Phuket, Thailand! See our plants from seed to harvest. Follow our Green Garden adventure and watch it flourish with our community.",
    openGraph: {
        title: "Green Ghost's Garden Indoor Cannabis Grow in Thailand - Green Ghost 🌿👻",
        description: "Join Green Ghost's Garden for a shared indoor cannabis growing journey in Phuket, Thailand! See our plants from seed to harvest. Follow our Green Garden adventure and watch it flourish with our community.",
        type: 'website',
        locale: 'en_US',
        url: '/garden',
        siteName: 'Green Ghost',
        images: [
            {
                url: '/images/banners/green-ghost-best-degen-weed-shop-garden.avif',
                width: 1920,
                height: 1080,
                alt: "Green Ghost's Garden",
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Green Ghost's Garden Indoor Cannabis Grow in Thailand - Green Ghost 🌿👻",
        description: "Join Green Ghost's Garden for a shared indoor cannabis growing journey in Phuket, Thailand! See our plants from seed to harvest. Follow our Green Garden adventure and watch it flourish with our community.",
        images: ['/images/banners/green-ghost-best-degen-weed-shop-garden.avif'],
    },
    alternates: {
        canonical: '/garden',
    },
};

export default async function GardenPage() {
    const allPages = await getPages();
    const gardenPage = allPages.find(page => page.slug === 'garden');

    const bannerData = await getBannerData('garden', {
        // Fallback to a related icon since no specific garden icon was found, or maybe just use leaf
        iconSrc: "/images/icons/garden-green-ghost.avif",
        iconAlt: gardenPage?.title || "Garden",
        description: gardenPage?.subtitle || "Green Ghost's Garden: A Shared Growing Journey in Phuket",
        bgSrc: gardenPage?.image || "/banners/green-ghost-best-degen-weed-shop-garden.avif"
    });

    return (
        <>
            <Banner {...bannerData} />
            <div className="container mx-auto px-4 bg-black text-white">
                {/* original description from page */}
                {gardenPage?.description && (
                    <div className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8 whitespace-pre-wrap">
                        {gardenPage.description}
                    </div>
                )}

                {/* Section title and description from pages.csv - in case user adds them later, good to have structure */}
                {bannerData.sectionTitle && bannerData.sectionTitle.trim() !== '' && (
                    <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-8 text-[#13DE00]">
                        {bannerData.sectionTitle}
                    </h2>
                )}

                {bannerData.sectionDescription && bannerData.sectionDescription.trim() !== '' && (
                    <div className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8 whitespace-pre-wrap">
                        {bannerData.sectionDescription}
                    </div>
                )}

                <GardensList />
                <WeedNavigation />
            </div>
        </>
    );
}
