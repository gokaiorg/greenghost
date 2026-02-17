import { MetadataRoute } from "next";
import { getAllLocations } from "@/lib/bigquery";
import { getProductsByCategory } from "@/lib/products";
import { getNFTsData } from "@/lib/bigquery";
import { i18n } from "@/i18n-config";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://green.gd";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/garden",
    "/menu",
    "/strains",
    "/delivery",
    "/wholesale",
    "/payment",
    "/locations",
    "/cannabis-club",
    "/nft",
    "/about",
    "/contact",
    "/jobs",
    "/weed",
    "/cbd-france",
    "/growers",
    "/seeds",
    "/best-weed-shops-thailand",
    "/legal-laws",
  ];

  const menuCategories = [
    "buds",
    "pre-rolls",
    "edibles",
    "concentrates",
    "gadgets",
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Helper to add entries for all locales
  const addEntries = (path: string, changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never", priority: number) => {
    i18n.locales.forEach((locale) => {
      const url =
        locale === i18n.defaultLocale
          ? `${baseUrl}${path}`
          : `${baseUrl}/${locale}${path}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });
  };




  // Static pages
  routes.forEach((route) => {
    // Determine priority and frequency based on your original logic
    let priority = 0.5;
    let changeFrequency: "weekly" | "monthly" | "daily" = "monthly";

    if (route === "") {
      priority = 1;
      changeFrequency = "daily";
    } else if (
      ["/garden", "/menu", "/locations", "/cbd-france"].includes(route)
    ) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (["/strains", "/delivery", "/wholesale"].includes(route)) {
      priority = 0.8;
    } else if (
      [
        "/payment",
        "/cannabis-club",
        "/best-weed-shops-thailand",
        "/legal-laws",
      ].includes(route)
    ) {
      priority = 0.7;
    } else if (
      ["/nft", "/jobs", "/weed", "/growers", "/seeds"].includes(route)
    ) {
      priority = 0.6;
    }

    addEntries(route, changeFrequency, priority);
  });

  // Menu subpages
  menuCategories.forEach((category) => {
    addEntries(`/menu/${category}`, "weekly", 0.8);
  });

  try {
    // Dynamic location pages
    const locations = await getAllLocations();
    locations.forEach((location) => {
      addEntries(`/locations/${location.slug}`, "weekly", 0.8);
    });

    // Strains
    console.log("Fetching strains for sitemap...");
    const strains = await getProductsByCategory("Strains");
    console.log(`Found ${strains.length} strains`);
    strains.forEach((strain: { id: string }) => {
      addEntries(`/strains/${strain.id}`, "weekly", 0.7);
    });

    // Edibles
    const edibles = await getProductsByCategory("Edibles");
    edibles.forEach((edible: { id: string }) => {
      addEntries(`/edibles/${edible.id}`, "weekly", 0.7);
    });

    // Concentrates
    const concentrates = await getProductsByCategory("Concentrates");
    concentrates.forEach((concentrate: { id: string }) => {
      addEntries(`/concentrates/${concentrate.id}`, "weekly", 0.7);
    });

    // Gadgets
    const gadgets = await getProductsByCategory("Gadgets");
    gadgets.forEach((gadget: { id: string }) => {
      addEntries(`/gadgets/${gadget.id}`, "weekly", 0.7);
    });

    // NFTs
    const nfts = await getNFTsData();
    nfts.forEach((nft: { slug: string }) => {
      addEntries(`/nft/${nft.slug}`, "monthly", 0.6);
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }

  return sitemapEntries;
}
