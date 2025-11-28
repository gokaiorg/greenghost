import Script from 'next/script';
import type { Organization } from '@/lib/types/organization';

interface StructuredDataProps {
  data: Organization | Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 2)
      }}
    />
  );
}

// Generate organization schema for all pages
export function generateOrganizationSchema(organization: Organization) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    legalName: organization.legalName,
    url: organization.url,
    logo: organization.logo,
    description: organization.description,
    foundingDate: organization.foundingDate,
    sameAs: organization.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      ...organization.contactPoint
    },
    address: organization.locations[0]?.address,
    location: organization.locations.map((loc) => ({
      ...loc,
      '@context': undefined // Remove context from nested objects
    })),
    hasOfferCatalog: organization.locations[0]?.hasOfferCatalog
  };
}

// Generate breadcrumb schema for a page
export function generateBreadcrumbSchema(path: string) {
  const baseUrl = 'https://green.gd';
  const pathSegments = path.split('/').filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      ...pathSegments.map((segment, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: segment === '' ? 'Home' :
          segment === 'menu' ? 'Menu' :
            segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`
      }))
    ]
  };
}

// Generate WebPage schema for a page
export function generateWebPageSchema(pageData: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedDate?: string;
  modifiedDate?: string;
}, organization: Organization) {
  const currentDate = new Date().toISOString();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageData.title,
    url: pageData.url,
    description: pageData.description,
    publisher: {
      '@type': 'Organization',
      name: organization.name,
      url: organization.url,
      logo: organization.logo
    },
    datePublished: pageData.publishedDate || '2023-01-01',
    dateModified: pageData.modifiedDate || currentDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageData.url
    },
    image: pageData.image || organization.logo
  };
}

// Generate schema for menu page
export async function generateMenuPageSchema(organization: Organization) {
  const baseUrl = 'https://green.gd';
  const menuUrl = `${baseUrl}/menu`;

  const menuItemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: organization.locations[0]?.hasOfferCatalog?.itemListElement?.map((item, index: number) => ({
      '@type': 'Product',
      position: index + 1,
      name: item.name,
      url: `${baseUrl}${item.itemListElement[0].url}`,
      description: item.itemListElement[0].description,
      image: `${baseUrl}/images/icons/${(item.name as string).toLowerCase()}-menu-weed-shop-green-ghost.avif`
    })) || []
  };

  return [
    generateBreadcrumbSchema('/menu'),
    menuItemList,
    generateWebPageSchema({
      title: 'Weed & Cannabis Products Menu - Green Ghost',
      description: 'Explore our Thailand cannabis menu: buds, edibles, concentrates, CBD & THC. Buy weed online with Green Ghost.',
      url: menuUrl,
      image: `${baseUrl}/images/banners/green-ghost-best-degen-weed-shop-menu.avif`
    }, organization)
  ];
}

// Generate schema for location page
export async function generateLocationSchema(locationSlug: string, organization: Organization) {
  const location = organization.locations.find((loc) => loc.slug === locationSlug);
  if (!location) return [];

  const locationUrl = `https://green.gd/locations/${location.slug}`;

  return [
    generateBreadcrumbSchema(`/locations/${location.slug}`),
    {
      ...location,
      '@context': undefined, // Remove context from nested objects
      image: location.image ? `https://green.gd${location.image}` : location.image,
      url: locationUrl
    },
    generateWebPageSchema({
      title: `${location.name} | Green Ghost`,
      description: location.description || `Visit our ${location.name} location for premium cannabis products.`,
      url: locationUrl,
      image: `https://green.gd${location.image}`
    }, organization)
  ];
}
