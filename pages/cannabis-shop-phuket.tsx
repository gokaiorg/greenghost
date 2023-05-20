import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
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
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
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
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
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
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          p={4}
          my={4}
          display={'flex'}
          width="fit-content"
          flexDirection="row"
          alignItems="baseline"
          fontSize="4xl"
          fontFamily={'vt323'}
        >
          Looking for the best cannabis shops in Phuket
          <ImgQuestion />
        </Box>
        <Box fontSize="2xl" fontFamily={'vt323'}>
          Look no further than the ones trusted by the Green Ghost. We&apos;ve
          scoured the island to find the top cannabis shops that offer the
          highest quality products and the best prices.
        </Box>
        <Box display={'flex'} my={4} mt={10}>
          <Box
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
            flexDirection={'column'}
            color="ghostVerse.green.base"
            mx={4}
          >
            <Link
              href="https://goo.gl/maps/FEhBvjDY8Puwp87q9"
              title="Green Ghost Map"
              passHref
            >
              <Box
                as="img"
                src="/logo512.png"
                width="80px"
                height="80px"
                maxW="inherit"
                mx="auto"
                alt="Green Ghost - Degen Weed Shop"
                title="Green Ghost - Degen Weed Shop"
              />
              Green Ghost
            </Link>
          </Box>
          <Box
            display={'flex'}
            justifyContent="center"
            alignItems={'center'}
            flexDirection={'column'}
            color="ghostVerse.green.base"
            mx={4}
            textAlign="center"
          >
            <Link
              href="https://goo.gl/maps/rjQio9APTJKunyRdA?coh=178571&entry=tt"
              title="My Weed Map"
              passHref
            >
              <Box
                as="img"
                src="/media/green-ghost-grower-my-weed-solutions.webp"
                width="80px"
                height="80px"
                maxW="inherit"
                mx="auto"
                alt="Green Ghost - My Weed Solutions"
                title="Green Ghost - My Weed Solutions"
              />
              My Weed
            </Link>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default CannabisShop;
