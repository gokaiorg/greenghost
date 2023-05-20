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
        <title>Green Ghost - Phuket Cannabis Growers Selection</title>
        <meta
          name="description"
          content="Discover the best cannabis grower in Phuket handpicked by Green Ghost. We partner with experienced and passionate growers who cultivate top-quality organic cannabis. From seed to harvest, our growers use advanced techniques to ensure the highest quality of buds. Trust Green Ghost to bring you the best cannabis from the best growers in Phuket."
        />
        <meta
          property="og:title"
          content="Green Ghost - Phuket Cannabis Growers Selection."
        />
        <meta
          property="og:description"
          content="Discover the best cannabis grower in Phuket handpicked by Green Ghost. We partner with experienced and passionate growers who cultivate top-quality organic cannabis. From seed to harvest, our growers use advanced techniques to ensure the highest quality of buds. Trust Green Ghost to bring you the best cannabis from the best growers in Phuket."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/cannabis-grower-phuket"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Phuket Cannabis Growers Selection."
        />
        <meta
          name="twitter:description"
          content="Discover the best cannabis grower in Phuket handpicked by Green Ghost. We partner with experienced and passionate growers who cultivate top-quality organic cannabis. From seed to harvest, our growers use advanced techniques to ensure the highest quality of buds. Trust Green Ghost to bring you the best cannabis from the best growers in Phuket."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/cannabis-grower-phuket"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Green Ghost - Phuket Cannabis Growers Selection." />
        <Box
          as="h2"
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          p={4}
          my={4}
          display={'flex'}
          width={'fit-content'}
          flexDirection="row"
          alignItems="baseline"
          fontSize={'4xl'}
          fontFamily={'vt323'}
        >
          Seeking the finest cannabis growers in Phuket
          <ImgQuestion />
        </Box>
        <Box fontSize="3xl" fontFamily={'vt323'}>
          Your search ends here with the trusted selection approved by the Green
          Ghost. Our meticulous search across the island has led us to the
          premier cannabis shops offering unparalleled quality products.
        </Box>
        <Box display={'flex'} my={4} mt={10}>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
            color="ghostVerse.green.base"
            mx={4}
            textAlign={'center'}
          >
            <Link href="/my-weed-solutions" title="My Weed Solutions" passHref>
              <Box
                as="img"
                src="/media/green-ghost-grower-my-weed-solutions.webp"
                width="80px"
                height="80px"
                maxW="inherit"
                mx="auto"
                alt="Green Ghost - Degen Weed Shop"
                title="Green Ghost - Degen Weed Shop"
              />
              My Weed Solutions
            </Link>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default CannabisShop;
