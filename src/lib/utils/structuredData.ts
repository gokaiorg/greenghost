import { Location } from '@/lib/types/location';
import { sanitizeSchema } from '@/lib/utils/seo';

export function generateLocalBusinessSchema(location: Location) {
  // Convert hours to the required format
  const openingHoursSpecification = Object.entries(location.hours).map(([day, hours]) => {
    let openTime = '';
    let closeTime = '';

    // Handle both string format and object format
    if (typeof hours === 'string') {
      // String format like "9:00 - 21:00"
      const [open, close] = hours.split(' - ') || ['', ''];
      openTime = open || '';
      closeTime = close || '';
    } else if (hours && typeof hours === 'object' && 'open' in hours && 'close' in hours) {
      // Object format with open and close properties
      const hourObj = hours as { open: string; close: string };
      openTime = hourObj.open || '';
      closeTime = hourObj.close || '';
    }

    return {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
      opens: openTime || '',
      closes: closeTime || '',
    };
  }).filter(day => day.opens && day.closes);

  return sanitizeSchema({
    '@context': 'https://schema.org',
    '@type': 'CannabisStore',
    '@id': `https://green.gd/locations/${location.slug}`,
    name: location.name,
    image: location.images[0] ? `https://green.gd${location.images[0]}` : undefined,
    description: location.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.address.split(',')[0],
      addressLocality: location.address.split(',').slice(-3, -2)[0]?.trim() || location.address.split(',')[1]?.trim() || '',
      addressRegion: location.region || (location.address.includes('Paris') ? 'Paris' : 'Phuket'),
      addressCountry: location.country || (location.address.includes('Paris') ? 'FR' : 'TH'),
      postalCode: location.address.split(',').pop()?.trim() || ''
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.lat,
      longitude: location.lng
    },
    hasMap: location.mapLink,
    openingHoursSpecification,
    telephone: location.phone,
    url: `https://green.gd/locations/${location.slug}`,
    priceRange: '$$',
    paymentAccepted: ["Cash", "Credit Card", "QR Code"],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Delivery', value: true }
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: location.lat,
        longitude: location.lng
      },
      geoRadius: '10000'
    },
    sameAs: [
      'https://x.com/greenghostdegen',
      'https://www.facebook.com/greenghostdegenCBD',
      'https://www.instagram.com/greenghost_degen/',
      'https://www.youtube.com/@greenghostdegen',
      'https://www.tiktok.com/@greenghostdegen',
      'https://opensea.io/collection/greenghostdegen'
    ],
  });
}

export function generateProductSchema(product: Record<string, unknown>) {
  return sanitizeSchema({
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://green.gd/menu/${product.slug}`,
    name: product.name,
    image: (product.images as string[])?.map((img: string) => `https://green.gd${img}`),
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'Green Ghost',
      logo: 'https://green.gd/images/logo-green-ghost-degen-weed-shop.png'
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'THB',
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      itemCondition: 'https://schema.org/NewCondition',
      availability: product.available ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `https://green.gd/menu/${product.slug}`,
      seller: {
        '@type': 'Organization',
        name: 'Green Ghost',
        url: 'https://green.gd'
      }
    },
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount || 1,
      bestRating: 5,
      worstRating: 1
    } : undefined
  });
}

export function generateFAQSchema(location: Location) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', timeZone: 'Asia/Bangkok' }).toLowerCase() as keyof typeof location.hours;
  const todayHours = location.hours[today];

  const openStatusText = todayHours && todayHours.toLowerCase() !== 'closed' && todayHours.toLowerCase() !== 'close'
    ? `Yes, we are open today from ${todayHours}.`
    : "We are currently closed today.";

  const region = location.region || location.address.split(',').slice(-2)[0]?.trim() || 'Phuket';
  const deliveryText = `Yes, we offer fast and discreet delivery services in ${region} and surrounding areas.`;

  return sanitizeSchema({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Is ${location.name} open today?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: openStatusText
        }
      },
      {
        '@type': 'Question',
        name: "Do you offer delivery?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: deliveryText
        }
      },
      {
        '@type': 'Question',
        name: `Where is ${location.name} located?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We are located at ${location.address}. You can find us easily on Google Maps.`
        }
      }
    ]
  });
}
