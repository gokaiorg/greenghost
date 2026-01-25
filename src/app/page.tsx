import { Metadata } from "next";

export const revalidate = 3600;

import { PHONE_NUMBER } from "@/lib/constants";
import { getReviews } from "@/lib/reviews";
import { shuffleArray } from "@/lib/utils/array";

import { PagesMetadata } from "@/components/PagesMetadata";
import ContactBlock from "@/components/ContactBlock";
import BannerHero from "@/components/BannerHero";
import JsonLd from "@/components/JsonLd";
import MenuBlock from "@/components/MenuBlock";
import StrainFeatured from "@/components/StrainFeatured";
import Reviews from "@/components/Reviews";
import GardenBlock from "@/components/GardenBlock";
import AboutUsBlock from "@/components/AboutUsBlock";
import LocationsHome from "@/components/LocationsHome";
import TopsList from "@/components/TopsList";
import PromotesList from "@/components/PromotesList";
import GadgetFeatured from "@/components/GadgetFeatured";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(): Promise<Metadata> {
  return PagesMetadata({
    pageName: "Green Ghost",
  });
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Store", "LocalBusiness"],
  name: "Green Ghost 🌿👻",
  address: [
    {
      "@type": "PostalAddress",
      addressLocality: "Rawai",
      addressRegion: "Phuket",
      addressCountry: "TH",
      postalCode: "83130",
      streetAddress: "26, 19 Wiset Rd",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Karon",
      addressRegion: "Phuket",
      addressCountry: "TH",
      postalCode: "83100",
      streetAddress: "452 Patak Rd",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Talat Yai",
      addressRegion: "Phuket",
      addressCountry: "TH",
      postalCode: "83000",
      streetAddress: "17 Thalang Rd",
    },
  ],
  description:
    "Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery.",
  url: "https://green.gd",
  logo: "https://green.gd/images/logo-green-ghost-degen-weed-shop.png",
  image:
    "https://green.gd/images/banners/green-ghost-best-degen-weed-shop-delivery-01.avif",
  priceRange: "$",
  openingHours: ["Mo-Su 09:00-02:00"],
  telephone: PHONE_NUMBER,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "20",
  },
};

export default async function Home() {
  const reviews = await getReviews();
  const shuffledReviews = shuffleArray(reviews);

  return (
    <>
      <JsonLd data={organizationSchema} />
      <div className="min-h-screen bg-black text-white">
        <BannerHero menuSlot={<MenuListInline />} />
        <MenuBlock />
        <StrainFeatured />
        <AboutUsBlock />
        <LocationsHome />
        <GadgetFeatured />
        <TopsList />
        <PromotesList />
        <GardenBlock />
        <Reviews reviews={shuffledReviews} />
        <ContactBlock />
      </div>
    </>
  );
}
