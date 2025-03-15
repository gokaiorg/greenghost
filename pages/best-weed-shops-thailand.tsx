import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { ThaiShop } from '../components/ThaiShop';
import { ImgShopThailand } from '../components/media/ImgShopThailand';

const placesJSONLD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Weed Shops in Thailand',
  itemListElement: [
    {
      '@type': 'Place',
      name: 'Green Ghost',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Karon',
        addressCountry: 'Thailand',
      },
      image: '/media/green-ghost-weed-shop-logo-g.webp',
      url: 'https://maps.app.goo.gl/S3PCi6LXSB3JJ9pKA',
    },
    {
      '@type': 'Place',
      name: 'Green Ghost',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawai',
        addressCountry: 'Thailand',
      },
      image: '/media/green-ghost-weed-shop-logo-g.webp',
      url: 'https://maps.app.goo.gl/MwdJHK2UwfWCiSrS6',
    },
    {
      '@type': 'Place',
      name: 'Le Versace',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patong',
        addressCountry: 'Thailand',
      },
      image: '/media/green-ghost-weed-shop-le-versace.webp',
      url: 'https://maps.app.goo.gl/XDGUZ97YmG1SiUws5',
    },
    {
      '@type': 'Place',
      name: 'Cosmic Temple Vibes',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawai',
        addressCountry: 'Thailand',
      },
      image: '/media/green-ghost-weed-shop-cosmic-temple-vibes.webp',
      url: 'https://maps.app.goo.gl/ybS9or9jDNjQPHjp8',
    },
    {
      '@type': 'Place',
      name: 'Cosmic Temple Vibes HQ',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawai',
        addressCountry: 'Thailand',
      },
      image: '/media/green-ghost-weed-shop-cosmic-temple-vibes.webp',
      url: 'https://maps.app.goo.gl/Ng4iqGCrUkZZPyrz5',
    },
    {
      '@type': 'Place',
      name: 'Sweed Dreams',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawai',
        addressCountry: 'Thailand',
      },
      image: '/media/green-ghost-weed-shop-sweed-dreams.webp',
      url: 'https://maps.app.goo.gl/Rf7NzFBecD2eH65E9',
    },
    {
      '@type': 'Place',
      name: 'High Roller Club Thailand',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Koh Kaeo',
        addressCountry: 'Thailand',
      },
      image: '/media/best-weed-shops-thailand-high-roller-club-thailand.webp',
      url: 'https://maps.app.goo.gl/SGN4KU1XpPi5f9bs6',
    },
    {
      '@type': 'Place',
      name: 'Green Lab Unicorn',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ratsada',
        addressCountry: 'Thailand',
      },
      image: '/media/best-weed-shops-thailand-green-lab-unicorn.webp',
      url: 'https://maps.app.goo.gl/D7PBitdHFRbqp5ga8',
    },
    {
      '@type': 'Place',
      name: 'Growland',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawai',
        addressCountry: 'Thailand',
      },
      image: '/media/best-weed-shops-thailand-growland.webp',
      url: 'https://maps.app.goo.gl/K9EnuAR5DJw4T3hh6',
    },
    {
      '@type': 'Place',
      name: 'Green Lab',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Patong',
        addressCountry: 'Thailand',
      },
      image: '/media/best-weed-shops-thailand-greenlab.webp',
      url: 'https://maps.app.goo.gl/Cg9hp2Tfg6BwUFQv7',
    },
    {
      '@type': 'Place',
      name: 'Green House Thailand',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bangkok',
        addressCountry: 'Thailand',
      },
      image: '/media/best-weed-shops-thailand-green-house-thailand.webp',
      url: 'https://maps.app.goo.gl/nZXCLM2sL6zzNSb77',
    },
    {
      '@type': 'Place',
      name: 'Phuket High',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rawai',
        addressCountry: 'Thailand',
      },
      image: '/media/best-weed-shops-thailand-phuket-high.webp',
      url: 'https://maps.app.goo.gl/Q3b8K4Z5hW83rxfNA',
    },
  ],
};
const BestWeedShops: NextPage = () => {
  return (
    <>
      <Head>
        <title>Best Weed Shops Thailand - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Discover the best weed shops near you with Green Ghost 🌿👻. Explore our curated list of top-rated dispensaries and cannabis stores in your area."
        />
        <meta
          property="og:title"
          content="Best Weed Shops Thailand - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Discover the best weed shops near you with Green Ghost 🌿👻. Explore our curated list of top-rated dispensaries and cannabis stores in your area."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/best-weed-shops-green-ghost.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/best-weed-shops-thailand"
        />
        <meta
          name="twitter:title"
          content="Best Weed Shops Thailand - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Discover the best weed shops near you with Green Ghost 🌿👻. Explore our curated list of top-rated dispensaries and cannabis stores in your area."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/best-weed-shops-green-ghost.webp"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/best-weed-shops-thailand"
        />
        <script type="application/ld+json">
          {JSON.stringify(placesJSONLD)}
        </script>
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="section" my={4}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            my={4}
            lineHeight={1}
          >
            <ImgShopThailand />
            <HomeSectionTitle title="Best Weed Shops Thailand" />
          </Box>
          <Text
            as="p"
            fontSize={{ base: '3xl' }}
            lineHeight={1}
            fontFamily="vt323"
            mb={10}
            textAlign={'center'}
          >
            Welcome to Green Ghost, your ultimate guide to finding the best weed
            shops in Thailand. Our team has carefully curated a list of
            top-rated dispensaries and cannabis stores in your area, ensuring
            that you have access to the highest-quality products and exceptional
            customer service.
          </Text>
          <Text
            as={'h2'}
            fontSize={{ base: 24 }}
            lineHeight={1}
            fontFamily={'CubicFive12'}
            my={{ base: 2 }}
            textAlign={'left'}
          >
            Explore Top-Rated Dispensaries and Cannabis Stores in Your Area
          </Text>
          <Text
            as={'p'}
            fontSize={{ base: 26 }}
            lineHeight={1}
            fontFamily={'vt323'}
            mb={4}
          >
            Browse our selection of local weed shops, read reviews, and find the
            perfect spot to suit your needs. Whether you&apos;re a seasoned
            cannabis enthusiast or just starting to explore the world of weed,
            we&apos;ve got you covered. Start exploring today and experience the
            best of cannabis with Green Ghost!
          </Text>
          <ThaiShop />
          <Box>
            <Image
              src="/media/best-weed-shops-green-ghost.webp"
              alt="Best Weed Shops Thailand"
              title="Best Weed Shops Thailand"
              width={2048}
              height={1366}
              sizes="100%"
              quality={75}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BestWeedShops;
