import "server-only";
import { db } from "./firebase-admin";
import { cache } from "react";
import {
  PageData,
  GardenData,
  ReviewData,
  LocationData,
  BestShopData,
  LawData,
  LawFAQData,
  GrowerData,
  SeedData,
  WholesaleData,
  ListingData,
  TopData,
  SocialData,
  ContactData,
  DeliveryData,
  ClubData,
  PaymentData,
  NFTData,
  CBDData,
  PromoteData,
  WeedData,
  ProductData,
  SectionData,
} from "./bigquery-types";

// Helper to get all docs from a collection
async function getAllFromCollection<T extends FirebaseFirestore.DocumentData>(collectionName: string): Promise<T[]> {
  try {
    const snapshot = await db.collection(collectionName).get();
    return snapshot.docs.map(doc => doc.data() as T);
  } catch (error) {
    console.error(`Firestore fetching error (${collectionName}):`, error);
    return [];
  }
}

export const getPagesData = cache(
  async (pageTitle: string): Promise<PageData | null> => {
    try {
      // The doc ID in Firestore is a slugified version of title_en
      const docId = pageTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      const doc = await db.collection("pages").doc(docId).get();
      if (doc.exists) {
        return doc.data() as PageData;
      }
      return null;
    } catch (error) {
      console.error("Firestore fetching error (pages):", error);
      return null;
    }
  },
);

export const getGardensData = cache(async (): Promise<GardenData[]> => {
  const data = await getAllFromCollection<GardenData>("gardens");
  const sorted = data.sort((a, b) => {
    const dateA = a.garden_date?.value || a.garden_date || "";
    const dateB = b.garden_date?.value || b.garden_date || "";
    return dateB.localeCompare(dateA);
  });

  const totalRows = sorted.length;
  return sorted.map((row, index) => {
    const dateVal = row.garden_date?.value || row.garden_date || "";
    const dateStr = typeof dateVal === "string" ? dateVal : "";
    const [year, month, day] = dateStr.split("-");
    const formattedDate = day && month && year ? `${day} ${month} ${year}` : dateStr;

    const imageIndex = (totalRows - index).toString().padStart(2, "0");
    const image = `/images/gardens/green-ghost-garden-phuket-${imageIndex}.avif`;

    return {
      date: formattedDate,
      description: row.description,
      image,
    };
  });
});

export const getReviewsData = cache(async (): Promise<ReviewData[]> => {
  const data = await getAllFromCollection<ReviewData>("reviews");
  return data.filter(row => row.comment != null);
});

export const getAllLocations = cache(async (): Promise<LocationData[]> => {
  return getAllFromCollection<LocationData>("locations");
});

export const getLocationBySlug = cache(
  async (slug: string): Promise<LocationData | null> => {
    try {
      const doc = await db.collection("locations").doc(slug).get();
      if (doc.exists) {
        return doc.data() as LocationData;
      }
      return null;
    } catch (error) {
      console.error(`Firestore fetching error (location: ${slug}):`, error);
      return null;
    }
  },
);

export const getBestShopsData = cache(async (): Promise<BestShopData[]> => {
  return getAllFromCollection<BestShopData>("best_shops");
});

export const getLawsData = cache(async (): Promise<LawData[]> => {
  return getAllFromCollection<LawData>("laws");
});

export const getLawsFAQData = cache(async (): Promise<LawFAQData[]> => {
  return getAllFromCollection<LawFAQData>("laws_faq");
});

export const getGrowersData = cache(async (): Promise<GrowerData[]> => {
  return getAllFromCollection<GrowerData>("growers");
});

export const getSeedsData = cache(async (): Promise<SeedData[]> => {
  return getAllFromCollection<SeedData>("seeds");
});

export const getWholesalesData = cache(async (): Promise<WholesaleData[]> => {
  return getAllFromCollection<WholesaleData>("wholesales");
});

export const getListingsData = cache(async (): Promise<ListingData[]> => {
  return getAllFromCollection<ListingData>("listings");
});

export const getTopsData = cache(async (): Promise<TopData[]> => {
  return getAllFromCollection<TopData>("tops");
});

export const getSocialsData = cache(async (): Promise<SocialData[]> => {
  return getAllFromCollection<SocialData>("socials");
});

export const getContactsData = cache(async (): Promise<ContactData[]> => {
  return getAllFromCollection<ContactData>("contacts");
});

export const getDeliveryData = cache(async (): Promise<DeliveryData[]> => {
  return getAllFromCollection<DeliveryData>("delivery");
});

export const getClubsData = cache(async (): Promise<ClubData[]> => {
  return getAllFromCollection<ClubData>("clubs");
});

export const getPaymentsData = cache(async (): Promise<PaymentData[]> => {
  return getAllFromCollection<PaymentData>("payments");
});

export const getNFTsData = cache(async (): Promise<NFTData[]> => {
  const data = await getAllFromCollection<NFTData>("nfts");
  return data.map(row => ({
    ...row,
    slug: String(row.slug),
    logo: row.logo.startsWith("/nft/") ? `/images${row.logo}` : row.logo,
  }));
});

export const getCBDsData = cache(async (): Promise<CBDData[]> => {
  return getAllFromCollection<CBDData>("cbds");
});

export const getPromotesData = cache(async (): Promise<PromoteData[]> => {
  return getAllFromCollection<PromoteData>("promotes");
});

export const getWeedsData = cache(async (): Promise<WeedData[]> => {
  return getAllFromCollection<WeedData>("weeds");
});

export const getProductsData = cache(async (): Promise<ProductData[]> => {
  const products = await getAllFromCollection<ProductData>("products");
  const strains = await getAllFromCollection<ProductData>("strains");
  const data = [...products, ...strains];

  return data
    .sort((a, b) => {
      const priceA = Number(a.price) || 0;
      const priceB = Number(b.price) || 0;
      return priceA - priceB;
    })
    .map((row) => ({
    ...row,
    wholesale_price: row.wholesale_price || 0,
    price: row.price || 0,
    rawai_entry: row.rawai_entry || 0,
    rawai_stock: row.rawai_stock || 0,
    karon_entry: row.karon_entry || 0,
    karon_stock: row.karon_stock || 0,
    thc: String(row.thc !== undefined ? row.thc : "0"),
    cbd: String(row.cbd !== undefined ? row.cbd : "0"),
  }));
});

export const getProductsByFilter = cache(
  async (type: string, status?: string): Promise<ProductData[]> => {
    try {
      let query = db.collection("products").where("type", "==", type);
      if (status) {
        query = query.where("status", "==", status);
      }
      const snapshot = await query.get();
      const data = snapshot.docs.map((doc) => doc.data() as ProductData);

      return data
        .sort((a, b) => (a.item_name || "").localeCompare(b.item_name || ""))
        .map((row) => ({
          ...row,
          wholesale_price: row.wholesale_price || 0,
          price: row.price || 0,
          rawai_entry: row.rawai_entry || 0,
          rawai_stock: row.rawai_stock || 0,
          karon_entry: row.karon_entry || 0,
          karon_stock: row.karon_stock || 0,
          thc: String(row.thc !== undefined ? row.thc : "0"),
          cbd: String(row.cbd !== undefined ? row.cbd : "0"),
        }));
    } catch (error) {
      console.error(`Firestore fetching error (products filtered):`, error);
      return [];
    }
  },
);

export const getSectionsData = cache(async (): Promise<SectionData[]> => {
  return getAllFromCollection<SectionData>("sections");
});
