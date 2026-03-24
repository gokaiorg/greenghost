// LocationData is now imported from @/lib/bigquery where needed.

import { OfferCatalog } from "./schema";

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
    hasOfferCatalog?: OfferCatalog;
  }[];
  areaServed: string[];
}
