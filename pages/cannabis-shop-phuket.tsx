import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { BuyNowLink } from '../components/BuyNowLink';
import Head from 'next/head';
import Link from 'next/link';
import { ImgQuestion } from '../components/ImgQuestion';

const CannabisShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Phuket Cannabis Shops Selection</title>
        <meta
          name="description"
          content="Looking for the best cannabis shops in Phuket? Look no further than the ones trusted by the Green Ghost. We've scoured the island to find the top cannabis shops that offer the highest quality products and the best prices. Whether you're looking for flower, edibles, pre-rolls, or accessories, we've got you covered. Trust us to help you find the perfect cannabis products to suit your needs."
        />
        <meta
          property="og:title"
          content="Green Ghost - Phuket Cannabis Shops Selection."
        />
        <meta
          property="og:description"
          content="Looking for the best cannabis shops in Phuket? Look no further than the ones trusted by the Green Ghost. We've scoured the island to find the top cannabis shops that offer the highest quality products and the best prices. Whether you're looking for flower, edibles, pre-rolls, or accessories, we've got you covered. Trust us to help you find the perfect cannabis products to suit your needs."
        />
        <meta property="og:image" content="https://green.gd/green-ghost-degen-weed-shop.png" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/cannabis-shop-phuket"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Phuket Cannabis Shops Selection."
        />
        <meta
          name="twitter:description"
          content="Looking for the best cannabis shops in Phuket? Look no further than the ones trusted by the Green Ghost. We've scoured the island to find the top cannabis shops that offer the highest quality products and the best prices. Whether you're looking for flower, edibles, pre-rolls, or accessories, we've got you covered. Trust us to help you find the perfect cannabis products to suit your needs."
        />
        <meta name="twitter:image" content="https://green.gd/green-ghost-degen-weed-shop.png" />
        <meta
          name="twitter:url"
          content="https://green.gd/cannabis-shop-phuket"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Green Ghost - Phuket Cannabis Shops Selection." />
        <Box
          as="h2"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          p={4}
          my={4}
          display="flex"
          width="fit-content"
          flexDirection="row"
          alignItems="baseline"
          fontSize={20}
        >
          Looking for the best cannabis shops in Phuket
          <ImgQuestion />
        </Box>
        <Box>
          Look no further than the ones trusted by the Green Ghost. We&apos;ve
          scoured the island to find the top cannabis shops that offer the
          highest quality products and the best prices.
        </Box>
        <Box display="flex" my={4}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            color="ghostVerse.green.base"
            as="a"
            mx={4}
            target="_blank"
            href="https://gokai.org"
          >
            <Link href="/weed-shop">
              <Box
                as="img"
                src="/logo512.png"
                width={{ base: '80px' }}
                height={{ base: '80px' }}
                maxW="inherit"
                mx="auto"
                alt="Green Ghost - Degen Weed Shop"
                title="Green Ghost - Degen Weed Shop"
              />
              Green Garden
            </Link>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            color="ghostVerse.green.base"
            as="a"
            mx={4}
            target="_blank"
            textAlign="center"
            href="https://gokai.org"
          >
            <Link href="/my-weed-solutions">
              <Box
                as="img"
                src="/media/green-ghost-grower-my-weed-solutions.webp"
                width={{ base: '100px' }}
                height={{ base: '80px' }}
                maxW="inherit"
                mx="auto"
                alt="Green Ghost - Degen Weed Shop"
                title="Green Ghost - Degen Weed Shop"
              />
              My Weed
            </Link>
          </Box>
        </Box>
        <Box
          as="h3"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          p={4}
          my={4}
          mx="auto"
          display="flex"
          width="fit-content"
          flexDirection="column"
          fontSize={20}
        >
          All our products are organic
        </Box>
        <BuyNowLink />
      </MainLayout>
    </>
  );
};

export default CannabisShop;
