import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import Head from 'next/head';
import { ImgGrower } from '../../components/media/ImgGrower';
import { Grower } from '../../components/Grower';

const CannabisGrower: NextPage = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Thailand Weed Grower Selection</title>
        <meta
          name="description"
          content="Discover the best cannabis grower in Thailand handpicked by Green Ghost. We partner with experienced and passionate growers who cultivate top-quality organic cannabis. From seed to harvest, our growers use advanced techniques to ensure the highest quality of buds. Trust Green Ghost to bring you the best cannabis from the best growers in Thailand."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Thailand Weed Grower Selection"
        />
        <meta
          property="og:description"
          content="Discover the best cannabis grower in Thailand handpicked by Green Ghost. We partner with experienced and passionate growers who cultivate top-quality organic cannabis. From seed to harvest, our growers use advanced techniques to ensure the highest quality of buds. Trust Green Ghost to bring you the best cannabis from the best growers in Thailand."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/weed-grower" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Thailand Weed Grower Selection"
        />
        <meta
          name="twitter:description"
          content="Discover the best cannabis grower in Thailand handpicked by Green Ghost. We partner with experienced and passionate growers who cultivate top-quality organic cannabis. From seed to harvest, our growers use advanced techniques to ensure the highest quality of buds. Trust Green Ghost to bring you the best cannabis from the best growers in Thailand."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-grower" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor={'pointer'}
          color={'ghostVerse.green.base'}
          onClick={handleBack}
          title={'BACK'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#13DE00"
            width="30px"
            height="30px"
          >
            <path
              fillRule="evenodd"
              d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
          mt={4}
        >
          <ImgGrower />
          <HomeSectionTitle title="Thailand Weed Grower Selection" />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          as="div"
          color={'white'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          mt={5}
          mb={6}
          p={4}
          lineHeight={1}
        >
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: 30, lg: 34 }}
            fontWeight={'black'}
            mb={4}
          >
            Discover Thailand&apos;s Premier Cannabis Growers with Green Ghost!
          </Text>
          <Box fontSize={{ base: 24, lg: 30 }} fontFamily={'vt323'}>
            Your quest for the finest cannabis cultivators in Thailand ends
            here, backed by the trusted selection endorsed by Green Ghost.
            We&apos;ve scoured the nation to curate a handpicked collection of
            top-tier cannabis establishments, delivering unparalleled quality
            and excellence.
          </Box>
        </Box>
        <Grower />
      </MainLayout>
    </>
  );
};

export default CannabisGrower;
