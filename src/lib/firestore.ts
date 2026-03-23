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

export type {
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
};

// Helper to get all docs from a collection
async function getAllFromCollection<T extends FirebaseFirestore.DocumentData>(collectionName: string): Promise<T[]> {
  try {
    const snapshot = await db.collection(collectionName).get();
    return snapshot.docs.map(doc => doc.data() as T);
  } catch (error) {
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
      return null;
    }
  },
);

export const getGardensData = cache(async (): Promise<GardenData[]> => {
  const data = await getAllFromCollection<any>("gardens");
  
  // Helper to parse D/M/YYYY or DD/MM/YYYY into timestamp
  const parseDate = (d: string) => {
    if (!d) return 0;
    const parts = d.split("/");
    if (parts.length !== 3) return 0;
    const day = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const year = parseInt(parts[2]);
    return new Date(year, month - 1, day).getTime();
  };

  const sorted = data.sort((a, b) => {
    const timeA = parseDate(String(a.date || ""));
    const timeB = parseDate(String(b.date || ""));
    // Default to 'order' if dates same or missing
    if (timeA === timeB) return (a.order || 0) - (b.order || 0);
    return timeB - timeA; // Newest first
  });

  const totalRows = sorted.length;
  return sorted.map((row, index) => {
    // Already in correct chronological order after sort
    const dateStr = String(row.date || "");
    const parts = dateStr.split("/");
    
    // Map months to names for prettier display
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    let formattedDate = dateStr;
    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const monthIdx = parseInt(parts[1]) - 1;
      const year = parts[2];
      if (months[monthIdx]) {
        formattedDate = `${day} ${months[monthIdx]} ${year}`;
      }
    }

    const imageIndex = (totalRows - index).toString().padStart(2, "0");
    const image = `/images/gardens/green-ghost-garden-phuket-${imageIndex}.avif`;

    return {
      date: formattedDate,
      description: String(row.description || ""),
      image,
    };
  });
});

export const getReviewsData = cache(async (): Promise<ReviewData[]> => {
  const data = await getAllFromCollection<any>("reviews");
  return data
    .filter(row => row.comment != null)
    .map(row => ({
      user_name: String(row.user_name || row.name || ""),
      comment: String(row.comment || ""),
      review_link: String(row.review_link || row.link || ""),
      shop_name: String(row.shop_name || row.shop || ""),
    }));
});

export const getAllLocations = cache(async (): Promise<LocationData[]> => {
  const data = await getAllFromCollection<any>("locations");
  return data
    .map(row => ({
      slug: String(row.slug || ""),
      name: String(row.name || ""),
      hours: String(row.hours || ""),
      phone: String(row.phone || ""),
      address: String(row.address || ""),
      address_link: String(row.addreslink || row.address_link || ""),
      review_link: String(row.reviewlink || row.review_link || ""),
      details_short: String(row.details || row.details_short || ""),
      description_long: String(row.description || row.description_long || ""),
      seo_description: String(row.descseo || row.seo_description || ""),
      map_embed_link: String(row.maplink || row.map_embed_link || ""),
      video_link: String(row.videolink || row.video_link || ""),
      tripadvisor_link: String(row.tripadvisor || row.tripadvisor_link || ""),
      weed_th_link: String(row.weedth || row.weed_th_link || ""),
      wongnai_link: String(row.wongnai || row.wongnai_link || ""),
      highthailand_link: String(row.highthailand || row.highthailand_link || ""),
      apple_map_link: String(row.applemap || row.apple_map_link || ""),
      latitude: Number(row.lat || row.latitude || 0),
      longitude: Number(row.lng || row.longitude || 0),
      region: String(row.region || ""),
      country: String(row.country || ""),
      order: Number(row.order || 0),
    }))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
});

export const getLocationBySlug = cache(
  async (slug: string): Promise<LocationData | null> => {
    try {
      const doc = await db.collection("locations").doc(slug).get();
      if (doc.exists) {
        const row = doc.data() as any;
        return {
          slug: String(row.slug || ""),
          name: String(row.name || ""),
          hours: String(row.hours || ""),
          phone: String(row.phone || ""),
          address: String(row.address || ""),
          address_link: String(row.addreslink || row.address_link || ""),
          review_link: String(row.reviewlink || row.review_link || ""),
          details_short: String(row.details || row.details_short || ""),
          description_long: String(row.description || row.description_long || ""),
          seo_description: String(row.descseo || row.seo_description || ""),
          map_embed_link: String(row.maplink || row.map_embed_link || ""),
          video_link: String(row.videolink || row.video_link || ""),
          tripadvisor_link: String(row.tripadvisor || row.tripadvisor_link || ""),
          weed_th_link: String(row.weedth || row.weed_th_link || ""),
          wongnai_link: String(row.wongnai || row.wongnai_link || ""),
          highthailand_link: String(row.highthailand || row.highthailand_link || ""),
          apple_map_link: String(row.applemap || row.apple_map_link || ""),
          latitude: Number(row.lat || row.latitude || 0),
          longitude: Number(row.lng || row.longitude || 0),
          region: String(row.region || ""),
          country: String(row.country || ""),
          order: Number(row.order || 0),
        };
      }
      return null;
    } catch (error) {
      return null;
    }
  },
);

export const getBestShopsData = cache(async (): Promise<BestShopData[]> => {
  const data = await getAllFromCollection<any>("best_shops");
  return data
    .filter(row => row.name && String(row.name).trim() !== "" && row.location && String(row.location).trim() !== "")
    .map(row => ({
      name: String(row.name || ""),
      link: String(row.link || ""),
      location: String(row.location || ""),
      order: Number(row.order || 0),
    }))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
});

export const getLawsData = cache(async (): Promise<LawData[]> => {
  const data = await getAllFromCollection<any>("laws");
  return data.map(row => ({
    title: String(row.title || ""),
    description: String(row.description || row.decription || ""),
  }));
});

export const getLawsFAQData = cache(async (): Promise<LawFAQData[]> => {
  const data = await getAllFromCollection<any>("laws_faq");
  return data.map(row => ({
    title: String(row.title || ""),
    description: String(row.description || row.decription || ""),
  }));
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
  const data = await getAllFromCollection<any>("contacts");
  return data
    .filter(row => row.name && String(row.name).trim() !== "")
    .map(row => ({
      name: String(row.name || ""),
      link: String(row.link || ""),
      order: Number(row.order || 0),
    }))
    .sort((a, b) => (a.order || 0) - (b.order || 0));
});

export const getDeliveryData = cache(async (): Promise<DeliveryData[]> => {
  return getAllFromCollection<DeliveryData>("delivery");
});

export const getClubsData = cache(async (): Promise<ClubData[]> => {
  return getAllFromCollection<ClubData>("clubs");
});

export const getPaymentsData = cache(async (): Promise<PaymentData[]> => {
  const data = await getAllFromCollection<PaymentData>("payments");
  return data.reverse();
});

export const getNFTsData = cache(async (): Promise<NFTData[]> => {
  const data = await getAllFromCollection<NFTData>("nfts");
  return data
    .map(row => ({
      ...row,
      slug: String(row.slug),
      logo: row.logo.startsWith("/nft/") ? `/images${row.logo}` : row.logo,
    }))
    .sort((a, b) => {
      const getNum = (name: string) => {
        const match = name.match(/(\d+)$/);
        return match ? parseInt(match[1], 10) : 0;
      };
      return getNum(a.name) - getNum(b.name);
    });
});

export const getCBDsData = cache(async (): Promise<CBDData[]> => {
  return getAllFromCollection<CBDData>("cbds");
});

export const getPromotesData = cache(async (): Promise<PromoteData[]> => {
  return getAllFromCollection<PromoteData>("promotes");
});

export const getWeedsData = cache(async (): Promise<WeedData[]> => {
  const data = await getAllFromCollection<any>("weeds");
  return data
    .map(row => ({
      title: row.title || "",
      description: row.description || row.decription || "",
      image: row.image || "",
      order: Number(row.order) || 999,
    }))
    .sort((a, b) => a.order - b.order);
});

export const getProductsData = cache(async (): Promise<ProductData[]> => {
  const products = await getAllFromCollection<ProductData>("products");
  const data = [...products];

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
      return [];
    }
  },
);

export const getSectionsData = cache(async (): Promise<SectionData[]> => {
  return getAllFromCollection<SectionData>("sections");
});
