import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import Head from 'next/head';
import { Box, Text } from '@chakra-ui/react';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { useRouter } from 'next/router';
import { ImgClub } from '../components/media/ImgClub';
import { Communities } from '../components/Communities';

const WeedShopMember: NextPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>
          Best Cannabis Social Club in Phuket Thailand - Green Ghost 🌿👻
        </title>
        <meta
          name="description"
          content="Join Green Ghost, Phuket's top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand."
        />
        <meta
          property="og:title"
          content="Best Cannabis Social Club in Phuket Thailand - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Join Green Ghost, Phuket's top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/cannabis-club" />
        <meta
          name="twitter:title"
          content="Best Cannabis Social Club in Phuket Thailand - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Join Green Ghost, Phuket's top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/cannabis-club" />
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
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          my={4}
          lineHeight={1}
        >
          <ImgClub />
          <HomeSectionTitle title="Cannabis Club" />
        </Box>
        <Text
          as="p"
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontWeight="bold"
          fontFamily="vt323"
          mb={{ base: 4 }}
          textAlign="center"
        >
          {
            "Join Green Ghost, Phuket's top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand."
          }
        </Text>
        <Communities />
      </MainLayout>
    </>
  );
};

export default WeedShopMember;
