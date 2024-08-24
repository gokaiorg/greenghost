import Head from 'next/head';
import { FC, memo } from 'react';
import { defaultMetaTags, dappHostname } from '../config/dappUi';
import { useRouter } from 'next/router';

export interface MetaHeadProps {
  metaTitle?: string;
  metaName?: string;
  metaDescription?: string;
  metaImage?: string;
  metaUrl?: string;
}

export const MetaHead: FC<MetaHeadProps> = memo(({ metaName, metaUrl }) => {
  const router = useRouter();
  const canonicalUrl = `https://green.gd${router.asPath}`;
  return (
    <Head>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="author" content="Gokai Labs | gokai.org" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta name="theme-color" content="#000000" />
      <link
        rel="shortcut icon"
        href={`${metaUrl || dappHostname}/favicon.ico`}
      />
      <link
        rel="icon"
        sizes="192x192"
        href={`${metaUrl || dappHostname}/logo192.png`}
      />
      <meta
        name="msapplication-square310x310logo"
        content={`${metaUrl || dappHostname}/logo512.png`}
      ></meta>
      <link
        rel="apple-touch-icon"
        href={`${metaUrl || dappHostname}/logo192.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${metaUrl || dappHostname}/logo96.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${metaUrl || dappHostname}/logo144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${metaUrl || dappHostname}/logo192.png`}
      />
      <link
        rel="mask-icon"
        href={`${metaUrl || dappHostname}/logo-G.svg`}
        color="#fff"
      />
      <link rel="manifest" href={`${metaUrl || dappHostname}/manifest.json`} />
      <meta
        name="application-name"
        content={metaName || defaultMetaTags.shortname}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={metaName || defaultMetaTags.shortname}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={metaName || defaultMetaTags.shortname}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@GokaiLabs" />
      <meta name="twitter:site" content="@greenghostdegen" />
      <meta itemProp="priceCurrency" content="THB" />
      <meta
        name="google-site-verification"
        content="dOuCZqslG5Lkw8i3jVwoGcedgH6-nIGGQ71qYu"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Store',
            name: 'Green Ghost 🌿👻',
            address: [
              {
                '@type': 'PostalAddress',
                addressLocality: 'Rawai',
                addressRegion: 'Phuket',
                addressCountry: 'Thailand',
                postalCode: '83130',
                streetAddress: '26, 19 Wiset Rd',
              },
              {
                '@type': 'PostalAddress',
                addressLocality: 'Karon',
                addressRegion: 'Phuket',
                addressCountry: 'Thailand',
                postalCode: '83100',
                streetAddress: '452 Patak Rd',
              },
              {
                '@type': 'PostalAddress',
                addressLocality: 'Talat Yai',
                addressRegion: 'Phuket',
                addressCountry: 'Thailand',
                postalCode: '83000',
                streetAddress: '17 Thalang Rd',
              },
            ],
            description:
              'Discover premium cannabis at Green Ghost in Phuket. Explore our organic selection, including flowers, edibles, and accessories, with fast, reliable delivery.',
            url: 'https://green.gd',
            logo: 'https://green.gd/media/green-ghost-degen-weed-shop.webp',
            image: 'https://green.gd/green-ghost-degen-weed-shop.png',
            priceRange: '$',
            openingHours: ['Mo-Su 08:00-02:00'],
            telephone: '+66936459898',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              reviewCount: '20',
              itemReviewed: {
                '@type': 'Store',
                name: 'Green Ghost 🌿👻',
                address: [
                  {
                    '@type': 'PostalAddress',
                    addressLocality: 'Rawai',
                    addressRegion: 'Phuket',
                    addressCountry: 'Thailand',
                    postalCode: '83130',
                    streetAddress: '26, 19 Wiset Rd',
                  },
                  {
                    '@type': 'PostalAddress',
                    addressLocality: 'Karon',
                    addressRegion: 'Phuket',
                    addressCountry: 'Thailand',
                    postalCode: '83100',
                    streetAddress: '452 Patak Rd',
                  },
                  {
                    '@type': 'PostalAddress',
                    addressLocality: 'Talat Yai',
                    addressRegion: 'Phuket',
                    addressCountry: 'Thailand',
                    postalCode: '83000',
                    streetAddress: '17 Thalang Rd',
                  },
                ],
              },
            },
            servesCuisine: 'Cannabis',
            hasMenu: {
              '@type': 'Menu',
              name: 'Green Ghost Menu',
              description:
                "Explore Green Ghost's 🌿👻 complete cannabis menu, featuring premium buds, edibles, pre-rolls, accessories, and concentrates. Elevate your experience with our curated selection.",
              url: 'https://green.gd/weed-shop',
              hasMenuSection: [
                {
                  '@type': 'MenuSection',
                  name: 'Buds Menu',
                  description:
                    "Explore Green Ghost's premium cannabis buds menu. Discover top-quality strains and products, expertly curated for your enjoyment and satisfaction.",
                  url: 'https://green.gd/weed-shop',
                },
                {
                  '@type': 'MenuSection',
                  name: 'Edibles Menu',
                  description:
                    "Explore Green Ghost's Edibles Menu, featuring a curated selection of organic, locally sourced cannabis-infused treats like brownies, gummies, and artisanal cookies.",
                  url: 'https://green.gd/weed-shop-edibles',
                },
                {
                  '@type': 'MenuSection',
                  name: 'Degen Menu',
                  description:
                    "Discover Green Ghost's Concentrates Menu, offering premium cannabis extracts like hash, wax, kiev and oil. Elevate your experience with our potent, curated selection.",
                  url: 'https://green.gd/weed-shop-degen',
                },
                {
                  '@type': 'MenuSection',
                  name: 'Gadgets Menu',
                  description:
                    "Explore Green Ghost's Accessories Menu. Find premium cannabis gadgets, from high-quality grinders to sleek bongs, and elevate your smoking experience today.",
                  url: 'https://green.gd/weed-shop-gadgets',
                },
                {
                  '@type': 'MenuSection',
                  name: 'Pre-Rolls Menu',
                  description:
                    "Discover Green Ghost's Pre-Roll Menu. Enjoy perfectly rolled joints made from premium cannabis, ready to elevate your smoking experience instantly.",
                  url: 'https://green.gd/weed-shop-pre-rolls',
                },
              ],
            },
          }),
        }}
      />
    </Head>
  );
});

MetaHead.displayName = 'MetaHead';
