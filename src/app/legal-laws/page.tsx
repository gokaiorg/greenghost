import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import Laws from '@/components/Laws';
import LawsFAQ from '@/components/LawsFAQ';
import WeedNavigation from '@/components/WeedNavigation';
import { getBannerData } from '@/lib/utils/bannerUtils';
import { getPagesServerSide as getPages } from '@/lib/pages-server';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
    title: 'The Comprehensive Cannabis Laws Guide in Thailand 2026 - Green Ghost 🌿👻',
    description: 'Stay informed about the latest cannabis laws in Thailand. Comprehensive guide on medical use, possession limits, and legal compliance for 2026.',
    openGraph: {
        title: 'The Comprehensive Cannabis Laws Guide in Thailand 2026 - Green Ghost 🌿👻',
        description: 'Stay informed about the latest cannabis laws in Thailand. Comprehensive guide on medical use, possession limits, and legal compliance for 2026.',
        type: 'website',
        locale: 'en_US',
        url: '/legal-laws',
        siteName: 'Green Ghost',
        images: [
            {
                url: '/images/banners/green-ghost-best-degen-weed-shop-legal-laws.avif',
                width: 1920,
                height: 1080,
                alt: 'Cannabis Laws in Thailand',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Comprehensive Cannabis Laws Guide in Thailand 2026 - Green Ghost 🌿👻',
        description: 'Stay informed about the latest cannabis laws in Thailand. Comprehensive guide on medical use, possession limits, and legal compliance for 2026.',
        images: ['/images/banners/green-ghost-best-degen-weed-shop-legal-laws.avif'],
    },
    alternates: {
        canonical: '/legal-laws',
    },
};

// Define types based on CSV structure
type ItemData = {
    title: string;
    decription: string; // Keeping 'decription' to match CSV header
};

async function getCsvData() {
    try {
        // Determine path safely
        const publicDir = path.join(process.cwd(), 'public');
        const lawsCsvPath = path.join(publicDir, 'datas', 'laws.csv');
        const lawsFaqCsvPath = path.join(publicDir, 'datas', 'laws-faq.csv');

        // Read files asynchronously
        const lawsFile = await fs.promises.readFile(lawsCsvPath, 'utf8');
        const lawsFaqFile = await fs.promises.readFile(lawsFaqCsvPath, 'utf8');

        // Parse CSVs
        const lawsData = Papa.parse<ItemData>(lawsFile, { header: true, skipEmptyLines: true }).data;
        const lawsFaqData = Papa.parse<ItemData>(lawsFaqFile, { header: true, skipEmptyLines: true }).data;

        return {
            lawsData,
            lawsFaqData,
        };
    } catch (error) {
        console.error('Error in getCsvData:', error);
        return {
            lawsData: [],
            lawsFaqData: [],
        };
    }
}

export default async function LegalLawsPage() {
    const allPages = await getPages();
    // Try finding 'legal laws' or 'legal-laws' or fallback to a similar match if slug varies in pages.csv
    const pageInfo = allPages.find(page => page.slug === 'legal-laws' || page.title.toLowerCase() === 'legal laws');
    const { lawsData, lawsFaqData } = await getCsvData();

    const bannerData = await getBannerData('legal-laws', {
        iconSrc: "/images/icons/legal-laws-green-ghost.avif",
        iconAlt: pageInfo?.title || "Legal Laws",
        description: pageInfo?.subtitle || "Cannabis Laws in Thailand: The 2026 Comprehensive Guide",
        bgSrc: pageInfo?.image || "/banners/green-ghost-best-degen-weed-shop-legal-laws.avif"
    });

    return (
        <>
            <Banner {...bannerData} />

            <div className="container mx-auto px-4 bg-black text-white">

                {/* Page Description / Intro Content */}
                {pageInfo?.description && (
                    <div
                        className="text-xs md:text-sm lg:text-base text-gray-200 text-center w-full mb-4 md:mb-8"
                        dangerouslySetInnerHTML={{ __html: pageInfo.description }}
                    />
                )}

                {/* Section title and description from pages.csv (if any - mirroring jobs page logic) */}
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

                <div className="w-full h-px bg-[#13DE00]/20 my-8" />

                {/* Laws Component */}
                <section className="mx-auto">
                    <Laws items={lawsData} />
                </section>

                <div className="w-full h-px bg-[#13DE00]/20 my-8" />

                {/* LawsFAQ Component */}
                <section className="max-w-4xl mx-auto">
                    <LawsFAQ items={lawsFaqData} />
                </section>

                <div className="w-full h-px bg-[#13DE00]/20 my-8" />

                <WeedNavigation />
            </div>
        </>
    );
}
