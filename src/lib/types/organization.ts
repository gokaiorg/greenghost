export interface LocationData {
  slug: string;
  name: string;
  hours: string;
  phone: string;
  address: string;
  addresLink: string;
  reviewLink: string;
  details: string;
  description: string;
  descSeo: string;
  mapLink: string;
  videoLink: string;
  imagesOg: string;
  website: string;
  tripAdvisor: string;
  weedTh: string;
  wongnai: string;
  highThailand: string;
  appleMap: string;
  lat: string;
  lng: string;
  region: string;
  country: string;
}

export interface Organization {
  name: string;
  legalName: string;
  description: string;
  foundingDate: string;
  url: string;
  logo: string;
  sameAs: string[];
  contactPoint: {
    email: string;
    telephone: string;
    contactType: string;
    availableLanguage: string[];
  };
  locations: {
    "@type": string;
    name: string;
    slug: string;
    description: string;
    image?: string;
    url: string;
    address: {
      "@type": string;
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone: string;
    hasMap: string;
    geo: {
      "@type": string;
      latitude: number;
      longitude: number;
    };
    openingHours: string[];
    priceRange: string;
    hasOfferCatalog?: {
      itemListElement: Array<{
        name: string;
        itemListElement: Array<{
          url: string;
          description: string;
        }>;
      }>;
    };
  }[];
}
