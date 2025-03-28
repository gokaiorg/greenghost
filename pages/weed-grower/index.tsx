import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
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
        <title>Thailand Weed Grower Selection - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Discover the best cannabis grower in Thailand handpicked by Green Ghost. We partner with experienced and passionate growers who cultivate top-quality organic cannabis. From seed to harvest, our growers use advanced techniques to ensure the highest quality of buds. Trust Green Ghost to bring you the best cannabis from the best growers in Thailand."
        />
        <meta
          property="og:title"
          content="Thailand Weed Grower Selection - Green Ghost 🌿👻"
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
          content="Thailand Weed Grower Selection - Green Ghost 🌿👻"
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
          as="span"
          cursor={'pointer'}
          color={'ghostVerse.green.base'}
          display={'flex'}
          fontFamily={'CubicFive12'}
          onClick={handleBack}
          title={'BACK'}
        >
          {'< Back'}
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
