import type { NextPage } from 'next';
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
          Green Ghost 🌿👻 Best Cannabis Social Club in Phuket Thailand
        </title>
        <meta
          name="description"
          content="Join Green Ghost, Phuket's top Cannabis Social Club. Discover a vibrant community, premium cannabis, exclusive events, and the best weed culture in Thailand."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Best Cannabis Social Club in Phuket Thailand"
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
          content="Green Ghost 🌿👻 Best Cannabis Social Club in Phuket Thailand"
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
          cursor="pointer"
          color="ghostVerse.green.base"
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
