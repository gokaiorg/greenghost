// Locations data handling is now done via BigQuery (see src/lib/bigquery.ts)


import { getAllLocations } from "@/lib/bigquery";
import { parseHoursString } from "@/lib/utils/hours";
import { Organization } from "@/lib/types/organization";
import { PHONE_NUMBER } from "@/lib/constants";
export async function getOrganizationData(): Promise<Organization> {
  const locations = await getAllLocations();
  const organization: Organization = {
    name: "Green Ghost",
    legalName: "Green Ghost",
    description:
      "Premium cannabis products in Thailand. Fast, discreet delivery. Shop our selection of buds, edibles, concentrates, and accessories.",
    foundingDate: "2022",
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
        // @ts-ignore
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
          postalCode: location.address.split(", ").pop()?.match(/\d+/)?.[0] || "",
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
      };
    }),
  };

  return organization;
}
