
import ContactBlock from '@/components/ContactBlock';
import BannerHero from '@/components/BannerHero';
import { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import MenuBlock from '@/components/MenuBlock';
import StrainFeatured from '@/components/StrainFeatured';
import Reviews from '@/components/Reviews';
import AboutUsBlock from '@/components/AboutUsBlock';
import LocationsHome from '@/components/LocationsHome';
import TopsList from '@/components/TopsList';
import PromotesList from '@/components/PromotesList';
import { PHONE_NUMBER } from '@/lib/constants';


export const metadata: Metadata = {
  title: 'Best Degen Weed Shop and Delivery - Green Ghost 🌿👻',
  description: 'Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery.',
  openGraph: {
    title: 'Best Degen Weed Shop and Delivery - Green Ghost 🌿👻',
    description: 'Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery.',
    images: [{
      url: 'https://green.gd/images/banners/green-ghost-best-degen-weed-shop-delivery-01.avif',
      width: 2048,
      height: 1366,
    }],
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Degen Weed Shop and Delivery - Green Ghost 🌿👻',
    description: 'Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery.',
    images: ['/images/banners/green-ghost-best-degen-weed-shop-delivery-01.avif'],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Store', 'LocalBusiness'],
  name: 'Green Ghost 🌿👻',
  address: [
    {
      '@type': 'PostalAddress',
      addressLocality: 'Rawai',
      addressRegion: 'Phuket',
      addressCountry: 'TH',
      postalCode: '83130',
      streetAddress: '26, 19 Wiset Rd',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Karon',
      addressRegion: 'Phuket',
      addressCountry: 'TH',
      postalCode: '83100',
      streetAddress: '452 Patak Rd',
    },
    {
      '@type': 'PostalAddress',
      addressLocality: 'Talat Yai',
      addressRegion: 'Phuket',
      addressCountry: 'TH',
      postalCode: '83000',
      streetAddress: '17 Thalang Rd',
    },
  ],
  description: 'Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery.',
  url: 'https://green.gd',
  logo: 'https://green.gd/images/logo-green-ghost-degen-weed-shop.png',
  image: 'https://green.gd/images/banners/green-ghost-best-degen-weed-shop-delivery-01.avif',
  priceRange: '$',
  openingHours: ['Mo-Su 09:00-02:00'],
  telephone: PHONE_NUMBER,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '20',
  },
};

export default async function Home() {


  return (
    <>
      <JsonLd data={organizationSchema} />
      <div className="min-h-screen bg-black text-white">
        <BannerHero />
        <MenuBlock />
        <StrainFeatured />
        <AboutUsBlock />
        <LocationsHome />
        <TopsList />
        <PromotesList />
        <Reviews />
        <ContactBlock />
      </div>
    </>
  )
}
