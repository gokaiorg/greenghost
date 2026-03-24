// Locations data handling is now done via Firestore (see src/lib/firestore.ts)

import { getAllLocations } from "@/lib/firestore";
// import { LocationData } from "@/lib/bigquery-types";
import { parseHoursString } from "@/lib/utils/hours";
import { Organization } from "@/lib/types/organization";
import { PHONE_NUMBER } from "@/lib/constants";
export async function getOrganizationData(): Promise<Organization> {
  const locations = await getAllLocations();
  const organization: Organization = {
    name: "Green Ghost",
    legalName: "Green Ghost",
    description:
      "Green Ghost is Thailand's premier degen weed shop, offering premium organic cannabis strains, high-THC flowers, edibles, and CBD in France. Fast, discreet delivery in Phuket (Rawai/Karon) & Bangkok.",
    foundingDate: "2022",
    areaServed: ["Thailand", "France"],
    url: "https://green.gd",
    logo: "https://green.gd/images/logo-green-ghost-degen-weed-shop.png",
    sameAs: [
      "https://x.com/greenghostdegen",
      "https://www.facebook.com/greenghostdegenCBD",
      "https://www.instagram.com/greenghost_degen/",
      "https://www.youtube.com/@greenghostdegen",
      "https://www.tiktok.com/@greenghostdegen",
      "https://opensea.io/collection/greenghostdegen",
    ],
    contactPoint: {
      email: "contact@green.gd",
      telephone: PHONE_NUMBER,
      contactType: "customer service",
      availableLanguage: ["en", "th"],
    },
    locations: locations.map((location) => {
      const hoursObj = parseHoursString(location.hours);
      const openingHours = Object.entries(hoursObj)
        .filter(([, time]) => time && time.toLowerCase() !== "closed")
        .map(
          ([day, time]) =>
            `${day.charAt(0).toUpperCase() + day.slice(1)} ${time}`,
        );

      return {
        "@type": "CannabisStore",
        name: location.name,
        slug: location.slug,
        description: location.description_long,
        image: `https://green.gd/images/banners/green-ghost-best-degen-weed-shop-delivery-${location.slug}-01.avif`,
        url: `https://green.gd/locations/${location.slug}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.address.split(", ")[0],
          addressLocality: location.address.split(", ")[1] || "",
          addressRegion: location.region,
          postalCode:
            location.address.split(", ").pop()?.match(/\d+/)?.[0] || "",
          addressCountry: location.country,
        },
        telephone: location.phone,
        hasMap: location.map_embed_link,
        geo: {
          "@type": "GeoCoordinates",
          latitude: location.latitude,
          longitude: location.longitude,
        },
        openingHours,
        priceRange: "$$",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Green Ghost Product Categories",
          itemListElement: [
            {
              "@type": "OfferCatalog",
              name: "Cannabis Flowers",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Premium Sativa, Indica & Hybrid Buds",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Pre-rolls",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Hand-rolled premium joints",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Concentrates",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "High-purity cannabis extracts",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "Edibles",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "THC-infused treats and gummies",
                  },
                },
              ],
            },
            {
              "@type": "OfferCatalog",
              name: "CBD France",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Premium CBD products for the French market",
                  },
                },
              ],
            },
          ],
        },
      };
    }),
  };

  return organization;
}
