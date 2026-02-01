// Locations data handling is now done via BigQuery (see src/lib/bigquery.ts)


import { getAllLocations } from "@/lib/bigquery";
import { parseHoursString } from "@/lib/utils/hours";
import { Organization } from "@/lib/types/organization";
import { PHONE_NUMBER } from "@/lib/constants";
import fs from "fs/promises";
import path from "path";

const dataCache: {
  tops?: TopDispensary[];
  bestShops?: BestShop[];
  delivery?: DeliveryStep[];
  clubs?: Club[];
  socials?: Social[];
} = {};

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

export interface TopDispensary {
  name: string;
  link: string;
}

export async function parseTopsCSV(): Promise<TopDispensary[]> {
  if (dataCache.tops) return dataCache.tops as TopDispensary[];
  try {
    const csvPath = path.join(process.cwd(), "public/datas/tops.csv");
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.split("\n").filter((line) => line.trim() !== "");
    const tops: TopDispensary[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const parts = line.split(",");
      if (parts.length >= 2) {
        tops.push({ name: parts[0].trim(), link: parts[1].trim() });
      }
    }
    dataCache.tops = tops;
    return tops;
  } catch (error) {
    console.error("Error parsing tops.csv:", error);
    return [];
  }
}

export async function getTops(): Promise<TopDispensary[]> {
  return parseTopsCSV();
}

export interface BestShop {
  name: string;
  mapLink: string;
  location: string;
}

export async function parseBestShopsCSV(): Promise<BestShop[]> {
  if (dataCache.bestShops) return dataCache.bestShops as BestShop[];
  try {
    const csvPath = path.join(
      process.cwd(),
      "public/datas/best_shops_thailand.csv",
    );
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.split("\n").filter((line) => line.trim() !== "");
    const shops: BestShop[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const values: string[] = [];
      let currentValue = "";
      let inQuotes = false;
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') inQuotes = !inQuotes;
        else if (char === "," && !inQuotes) {
          values.push(currentValue.trim().replace(/^"|"$/g, ""));
          currentValue = "";
        } else currentValue += char;
      }
      values.push(currentValue.trim().replace(/^"|"$/g, ""));
      if (values.length >= 3) {
        shops.push({
          name: values[0],
          mapLink: values[1],
          location: values[2],
        });
      }
    }
    dataCache.bestShops = shops;
    return shops;
  } catch (error) {
    console.error("Error parsing best_shops_thailand.csv:", error);
    return [];
  }
}

export async function getBestShops(): Promise<BestShop[]> {
  return parseBestShopsCSV();
}

export interface DeliveryStep {
  name: string;
  description: string;
  label: string;
  link: string;
  hint: string;
  video: string;
}

export async function parseDeliveryCSV(): Promise<DeliveryStep[]> {
  if (dataCache.delivery) return dataCache.delivery as DeliveryStep[];
  try {
    const csvPath = path.join(process.cwd(), "public/datas/delivery.csv");
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.split("\n").filter((line) => line.trim() !== "");
    if (lines.length === 0) return [];
    const headers = lines[0]
      .split(",")
      .map((h) => h.trim().replace(/^\"|\"$/g, ""));
    const steps: DeliveryStep[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const values: string[] = [];
      let currentValue = "";
      let inQuotes = false;
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') inQuotes = !inQuotes;
        else if (char === "," && !inQuotes) {
          values.push(
            currentValue
              .trim()
              .replace(/^\"|\"$/g, "")
              .replace(/\r$/g, ""),
          );
          currentValue = "";
        } else currentValue += char;
      }
      values.push(
        currentValue
          .trim()
          .replace(/^\"|\"$/g, "")
          .replace(/\r$/g, ""),
      );
      if (values.length >= headers.length) {
        const step: Record<string, string> = {};
        headers.forEach((header, index) => {
          step[header] = values[index] || "";
        });
        steps.push(step as unknown as DeliveryStep);
      }
    }
    dataCache.delivery = steps;
    return steps;
  } catch (error) {
    console.error("Error parsing delivery.csv:", error);
    return [];
  }
}

export async function getDeliverySteps(): Promise<DeliveryStep[]> {
  return parseDeliveryCSV();
}

export interface Club {
  name: string;
  description: string;
  link: string;
}

export async function parseClubsCSV(): Promise<Club[]> {
  if (dataCache.clubs) return dataCache.clubs as Club[];
  try {
    const csvPath = path.join(process.cwd(), "public/datas/clubs.csv");
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.split("\n").filter((line) => line.trim() !== "");
    if (lines.length === 0) return [];
    const headers = lines[0]
      .split(",")
      .map((h) => h.trim().replace(/^\"|\"$/g, ""));
    const clubs: Club[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const values: string[] = [];
      let currentValue = "";
      let inQuotes = false;
      for (let j = 0; j < line.length; j++) {
        const char = line[j];
        if (char === '"') inQuotes = !inQuotes;
        else if (char === "," && !inQuotes) {
          values.push(
            currentValue
              .trim()
              .replace(/^\"|\"$/g, "")
              .replace(/\r$/g, ""),
          );
          currentValue = "";
        } else currentValue += char;
      }
      values.push(
        currentValue
          .trim()
          .replace(/^\"|\"$/g, "")
          .replace(/\r$/g, ""),
      );
      if (values.length >= headers.length) {
        const club: Record<string, string> = {};
        headers.forEach((header, index) => {
          club[header] = values[index] || "";
        });
        clubs.push(club as unknown as Club);
      }
    }
    dataCache.clubs = clubs;
    return clubs;
  } catch (error) {
    console.error("Error parsing clubs.csv:", error);
    return [];
  }
}

export async function getClubs(): Promise<Club[]> {
  return parseClubsCSV();
}

export interface Social {
  name: string;
  link: string;
}

export async function parseSocialsCSV(): Promise<Social[]> {
  if (dataCache.socials) return dataCache.socials as Social[];
  try {
    const csvPath = path.join(process.cwd(), "public/datas/socials.csv");
    const csvContent = await fs.readFile(csvPath, "utf-8");
    const lines = csvContent.split("\n").filter((line) => line.trim() !== "");
    if (lines.length === 0) return [];
    const headers = lines[0]
      .split(",")
      .map((h) => h.trim().replace(/^"|"$/g, "").toLowerCase());
    const socials: Social[] = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const values = line
        .split(",")
        .map((v) => v.trim().replace(/^"|"$/g, "").replace(/\r$/g, ""));
      if (values.length >= headers.length) {
        const social: Record<string, string> = {};
        headers.forEach((header, index) => {
          social[header] = values[index] || "";
        });
        socials.push(social as unknown as Social);
      }
    }
    dataCache.socials = socials;
    return socials;
  } catch (error) {
    console.error("Error parsing socials.csv:", error);
    return [];
  }
}

export async function getSocials(): Promise<Social[]> {
  return parseSocialsCSV();
}
