import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import Head from 'next/head';
import { ImgNFT } from '../../components/media/ImgNFT';
import { NFT } from '../../components/NFT';
import Link from 'next/link';
import { IconOpensea } from '../../components/media/IconOpensea';
import { IconNFTCalendar } from '../../components/media/IconNFTCalendar';

const NFTs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Green Ghost Degen NFT Collection</title>
        <meta
          name="description"
          content="420 Green Ghost Degen NFT Collection to enjoy exclusive discounts
            and cash back on your cannabis purchases at the best degen weed shop."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Green Ghost Degen NFT Collection"
        />
        <meta
          property="og:description"
          content="420 Green Ghost Degen NFT Collection to enjoy exclusive discounts
            and cash back on your cannabis purchases at the best degen weed shop."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-nft-collection.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/nft" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Green Ghost Degen NFT Collection"
        />
        <meta
          name="twitter:description"
          content="420 Green Ghost Degen NFT Collection to enjoy exclusive discounts
            and cash back on your cannabis purchases at the best degen weed shop."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-nft-collection.webp"
        />
        <meta name="twitter:url" content="https://green.gd/nft" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
          mt={4}
        >
          <ImgNFT />
          <HomeSectionTitle title="Green Ghost Degen NFTs" />
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
            Thailand’s Top Cannabis Club Meets NFT Innovation
          </Text>
          <Box fontSize={{ base: 24, lg: 30 }} fontFamily={'vt323'}>
            420 Green Ghost Degen NFT Collection to enjoy exclusive discounts
            and cash back on your cannabis purchases at the best degen weed
            shop.
          </Box>
        </Box>
        <Box
          fontFamily={'vt323'}
          fontSize={{ base: 24 }}
          display={'flex'}
          alignItems={'center'}
          gap={4}
          mb={4}
        >
          View on:
          <Link
            href="https://opensea.io/collection/greenghostdegen/overview"
            passHref
            title="Green Ghost 🌿👻 Green Ghost Degen Collection OpenSea"
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              border={'1px solid white'}
              p={2}
              _hover={{
                backgroundColor: 'ghostVerse.green.base',
                color: 'black',
              }}
            >
              OpenSea
              <IconOpensea />
            </Box>
          </Link>
          <Link
            href="https://nftcalendar.io/event/green-ghost-degen/"
            passHref
            title="Green Ghost 🌿👻 Green Ghost Degen NFT Calendar"
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              border={'1px solid white'}
              p={2}
              _hover={{
                backgroundColor: 'ghostVerse.green.base',
                color: 'black',
              }}
            >
              NFT Calendar
              <IconNFTCalendar />
            </Box>
          </Link>
        </Box>
        <NFT />
      </MainLayout>
    </>
  );
};

export default NFTs;
