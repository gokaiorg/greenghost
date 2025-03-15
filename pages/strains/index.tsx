import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { buds } from '../../config/buds';
import { BudAllStrains } from '../../components/shop/BudAllStrains';
import { ImgMenu } from '../../components/media/ImgMenu';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { motion, useScroll, useTransform } from 'framer-motion';

const Strains: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Strains',
    description: 'Buy Premium Cannabis Strains Online',
    itemListElement: buds.map((bud, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: bud.name,
        description: bud.description,
        image: [
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-cover.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-bud-01.webp`,
          `https://green.gd/media/green-ghost-degen-weed-shop-strain-${bud.slug}-bud-02.webp`,
        ],
        offers: {
          '@type': 'Offer',
          price: bud.price.toFixed(2),
          priceCurrency: 'THB',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5', // Adjust based on actual ratings
          reviewCount: '13', // Adjust based on actual review count
        },
      },
    })),
  };

  return (
    <>
      <Head>
        <title>Buy Premium Cannabis Strains Online - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Green Ghost offers a wide variety of premium cannabis strains. Learn about each strain's unique characteristics and shop online now."
        />
        <meta
          property="og:title"
          content="Buy Premium Cannabis Strains Online - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Green Ghost offers a wide variety of premium cannabis strains. Learn about each strain's unique characteristics and shop online now."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-strains.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/strains" />
        <meta
          name="twitter:title"
          content="Buy Premium Cannabis Strains Online - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Green Ghost offers a wide variety of premium cannabis strains. Learn about each strain's unique characteristics and shop online now."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-strains.webp"
        />
        <meta name="twitter:url" content="https://green.gd/strains" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main">
          <Box
            as="section"
            aria-label="Banner"
            position="relative"
            height="100%"
            width="100%"
            overflow="hidden"
            mb={10}
          >
            <motion.div
              style={{
                y,
                position: 'absolute',
                top: '-65%',
                left: 0,
                width: '100%',
                height: '200%',
                zIndex: -1,
              }}
            >
              <Image
                src="/media/green-ghost-best-degen-weed-shop-strains.webp"
                alt="Buy Premium Cannabis Strains Online"
                title="Buy Premium Cannabis Strains Online"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
              />
            </motion.div>
            <Box
              bg="rgba(0, 0, 0, 0.8)"
              p={2}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'100%'}
              minHeight={{ base: 'auto', md: '400px' }}
            >
              <ImgMenu />
              <HomeSectionTitle title="Strains" />
              <Text
                as="p"
                fontSize={{ base: '30px', md: '34px' }}
                lineHeight={{ base: '25px', md: '30px' }}
                fontFamily="vt323"
                mt={5}
                textAlign={'center'}
              >
                At Green Ghost, we believe that everyone deserves access to
                high-quality cannabis. That&apos;s why we&apos;ve curated a
                selection of premium strains that cater to all tastes and
                preferences. From beginners to seasoned enthusiasts, our strains
                page is the perfect place to start your cannabis journey.
                Browse, learn, and discover the perfect strain for you.
              </Text>
            </Box>
          </Box>
          <BudAllStrains />
        </Box>
      </MainLayout>
    </>
  );
};

export default Strains;
