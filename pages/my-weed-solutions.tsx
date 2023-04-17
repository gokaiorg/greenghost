import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import { SocialIcon } from 'react-social-icons';
import Head from 'next/head';
import Image from 'next/image';

const BuyWeed: NextPage = () => {
  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <Head>
        <title>Green Ghost - Grower - My Weed Solutions.</title>
        <meta
          name="description"
          content="MW Solutions is a company that believes in its customers and
              believes in the right to live life their way."
        />
        <meta
          property="og:title"
          content="Green Ghost - Grower - My Weed Solutions."
        />
        <meta
          property="og:description"
          content="MW Solutions is a company that believes in its customers and
              believes in the right to live life their way."
        />
        <meta property="og:image" content="https://green.gd/green-ghost-degen-weed-shop.png" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd" />
        <meta
          name="twitter:title"
          content="Green Ghost - Grower - My Weed Solutions."
        />
        <meta
          name="twitter:description"
          content="MW Solutions is a company that believes in its customers and
              believes in the right to live life their way."
        />
        <meta name="twitter:image" content="https://green.gd/green-ghost-degen-weed-shop.png" />
        <meta name="twitter:url" content="https://green.gd" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor="pointer"
          color="ghostVerse.green.base"
          onClick={handleBack}
        >
          Go back
        </Box>
        <HomeSectionTitle title="Green Ghost - Grower - My Weed Solutions." />
        <Box display="flex" flexDirection="column" fontFamily="vt323">
          <Text
            as="h2"
            color="white"
            fontSize={{ base: '3xl' }}
            fontWeight="black"
            borderColor="ghostVerse.color2.base"
            bgColor="ghostVerse.dark.lighter"
            borderWidth={1}
            backdropFilter="blur(3px)"
            mt={5}
            mb={6}
            p={4}
            mr="auto"
          >
            My Weed Solutions
          </Text>
          <Box
            display="flex"
            flexDirection={{ base: 'column', lg: 'row' }}
            alignItems={{ base: 'column', lg: 'row' }}
            mb={4}
          >
            <Image
              src="/media/green-ghost-grower-my-weed-solutions.webp"
              width={320}
              height={320}
              alt="Green Ghost - Grower - My Weed Solutions"
            />
            <Text
              display="inline-flex"
              fontSize={{ base: '3xl', md: '40' }}
              mb={2}
              ml={{ base: '0', lg: '10' }}
              mr="auto"
            >
              MW Solutions is a company that believes in its customers and
              believes in the right to live life their way.
            </Text>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" fontFamily="vt323">
          <Box display="flex" alignItems="center" gap={3}>
            <Box bgColor="black" borderRadius="100%">
              <SocialIcon
                url="https://www.facebook.com/profile.php?id=100085363101043"
                bgColor="#4cfd27"
                style={{ width: 60, height: 60 }}
              />
            </Box>
            <Box bgColor="black" borderRadius="100%">
              <SocialIcon
                url="https://mwsphuket.wixsite.com/myweedsolutions"
                bgColor="#4cfd27"
                style={{ width: 60, height: 60 }}
              />
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWeed;
