import { Metadata } from "next";
import { getPagesData } from "@/lib/bigquery";
import { selectLocalizedField } from "@/lib/i18n-helpers";

export const revalidate = 86400;

import { PHONE_NUMBER } from "@/lib/constants";

import { PagesMetadata } from "@/components/PagesMetadata";
import ContactSection from "@/components/ContactSection";
import BannerHero from "@/components/BannerHero";
import JsonLd from "@/components/JsonLd";
import MenuSection from "@/components/MenuSection";
import StrainSection from "@/components/StrainSection";
import Reviews from "@/components/Reviews";
import GardenSection from "@/components/GardenSection";
import ClubSection from "@/components/ClubSection";
import LocationSection from "@/components/LocationSection";
import TopSection from "@/components/TopSection";
import PromotesList from "@/components/PromotesList";
import GadgetSection from "@/components/GadgetSection";
import MenuListInline from "@/components/MenuListInline";

export async function generateMetadata(props: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await props.params;
  return PagesMetadata({
    pageName: "Green Ghost",
    locale: lang,
    path: "/",
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

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const pageData = await getPagesData("Green Ghost");

  // Use correct localized fields matching the language
  const bannerSubtitle = selectLocalizedField<string>(
    pageData as unknown as Record<string, unknown>,
    "subtitle",
    lang,
  );
  const bannerDescription = selectLocalizedField<string>(
    pageData as unknown as Record<string, unknown>,
    "description",
    lang,
  );

  return (
    <>
      <JsonLd data={organizationSchema} />
      <div className="min-h-screen bg-black text-white">
        <BannerHero
          menuSlot={<MenuListInline locale={lang} />}
          subtitle={bannerSubtitle}
          description={bannerDescription}
          locale={lang}
        />
        <MenuSection locale={lang} />
        <StrainSection locale={lang} />
        <ClubSection locale={lang} />
        <LocationSection locale={lang} />
        <GadgetSection locale={lang} />
        <TopSection locale={lang} />
        <PromotesList locale={lang} />
        <GardenSection locale={lang} />
        <Reviews locale={lang} />
        <ContactSection locale={lang} />
      </div>
    </>
  );
}
