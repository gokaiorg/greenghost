import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';

const InstallXportal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 404.</title>
        <meta
          name="description"
          content="You got lost bro! You should try something that keeps you focused."
        />
        <meta property="og:title" content="404 - Green Ghost 🌿👻" />
        <meta
          property="og:description"
          content="You got lost bro! You should try something that keeps you focused."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/404" />
        <meta name="twitter:title" content="404 - Green Ghost 🌿👻" />
        <meta
          name="twitter:description"
          content="You got lost bro! You should try something that keeps you focused."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/404" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="404 - You got lost bro!" />
        <Box
          display={'flex'}
          flexDirection={'column'}
          as="div"
          color={'white'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          bgColor={'ghostVerse.dark.lighter'}
          mt={5}
          mb={6}
          p={4}
        >
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            You should try something that keeps you focused.
          </Text>
        </Box>
      </MainLayout>
    </>
  );
};

export default InstallXportal;
