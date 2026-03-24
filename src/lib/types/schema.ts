export interface Offer {
  "@type": "Offer";
  itemOffered: {
    "@type": "Service" | "Product";
    name: string;
    description?: string;
    url?: string;
  };
}

export interface OfferCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: (OfferCatalog | Offer)[];
}
