import { Metadata } from "next";

export const revalidate = 3600;

import { PHONE_NUMBER } from "@/lib/constants";

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
import { Review } from "@/lib/types";
import path from "path";
import { parseCSV } from "@/lib/utils/csv";

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

interface ReviewCSVRow {
  Name: string;
  Comment: string;
  Link: string;
  Shop: string;
  [key: string]: string | undefined;
}

async function getReviews(): Promise<Review[]> {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "datas",
      "reviews.csv",
    );
    const fsPromises = (await import("fs/promises")).default;
    const fileContent = await fsPromises.readFile(filePath, "utf-8");
    const parsedData = parseCSV<ReviewCSVRow>(fileContent);

    if (parsedData.length === 0) return [];

    return parsedData.map((row) => ({
      name: row.Name || "Anonymous",
      comment: row.Comment || "",
      link: row.Link || "#",
      shop: row.Shop || "",
    }));
  } catch (error) {
    console.error("Error reading reviews.csv:", error);
    return [];
  }
}

export default async function Home() {
  const reviews = await getReviews();

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
        <Reviews initialReviews={reviews} />
        <ContactBlock />
      </div>
    </>
  );
}
