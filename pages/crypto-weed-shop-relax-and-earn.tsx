import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import { ImgDollar } from '../components/ImgDollar';
import { ImgPercent } from '../components/ImgPercent';
import { ImgQuestion } from '../components/ImgQuestion';
import Head from 'next/head';
import { MenuCrypto } from '../components/MenuCrypto';
import { IconEarn } from '../components/IconEarn';

const CryptoWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Crypto Weed Shop - Relax and Earn.</title>
        <meta
          name="description"
          content="Discover the future of cannabis shopping with The Green Ghost - a tokenized crypto weed shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          property="og:title"
          content="Green Ghost - Crypto Weed Shop - Relax and Earn.
          Edibles."
        />
        <meta
          property="og:description"
          content="Discover the future of cannabis shopping with The Green Ghost - a tokenized crypto weed shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/crypto-weed-shop-relax-and-earn"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Crypto Weed Shop - Relax and Earn.
          Edibles."
        />
        <meta
          name="twitter:description"
          content="Discover the future of cannabis shopping with The Green Ghost - a tokenized crypto weed shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/crypto-weed-shop-relax-and-earn"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box display={'flex'} alignItems={'center'}>
          <Box w={'38px'} mr={4} mb={4}>
            <IconEarn />
          </Box>
          <HomeSectionTitle title="Crypto Weed Shop - Relax & Earn." />
        </Box>
        <MenuCrypto />
        <Box
          as="div"
          color={'white'}
          fontSize={{ base: '3xl' }}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          mt={5}
          mb={6}
          p={4}
          mr={'auto'}
          fontFamily={'vt323'}
        >
          <Text
            as={'h2'}
            fontWeight={'black'}
            fontSize={'4xl'}
            marginBottom={4}
          >
            Join the new generation in love for weed, art and crypto.
          </Text>
          Green Ghost is a contributor to the{' '}
          <Text
            color={'ghostVerse.green.base'}
            as="a"
            href="https://ghostverse.org/"
          >
            GhostVerse DAO
          </Text>
          , providing exclusive privileges to NFT holders as members of the
          Ghost Clan.
          <br />
          <br />
          MxGhosts pixel and voxel NFTs holders receive a 31
          <ImgPercent /> discount and{' '}
          <Text
            color={'ghostVerse.green.base'}
            as="a"
            target="_blank"
            href="https://linktr.ee/elrondbuds"
          >
            <ImgDollar />
            EBUD
          </Text>{' '}
          cashback on all orders, in addition to earning{' '}
          <Text
            color={'ghostVerse.green.base'}
            as="a"
            href="https://ghostverse.org/play-and-earn"
          >
            passive income in <ImgDollar />
            EGLD
          </Text>{' '}
          on{' '}
          <Text
            color={'ghostVerse.green.base'}
            as="a"
            target="_blank"
            href="https://multiversx.com/"
          >
            MultiversX blockchain
          </Text>
          .
          <br />
          <br />
          <Text
            as={'h2'}
            fontWeight={'black'}
            fontSize={'4xl'}
            marginBottom={4}
          >
            Looking to get your hands on a unique Mr. Ghost NFT
            <ImgQuestion />
          </Text>
          Head over to{' '}
          <Text
            color={'ghostVerse.green.base'}
            as="a"
            href="https://ghostverse.org/mxghosts"
          >
            MxGhosts
          </Text>{' '}
          and keep an eye out for our upcoming public sales or purchase one on
          the secondary market. Make sure to follow our links to avoid scams.
          <br />
          <br />
          <Text
            as={'h2'}
            fontWeight={'black'}
            fontSize={'4xl'}
            marginBottom={4}
          >
            New to the world of blockchain and NFTs
            <ImgQuestion />
          </Text>
          <Link
            href="/install-xportal-app"
            title="Install xPortal App"
            passHref
          >
            <Box as={'span'} color={'ghostVerse.green.base'}>
              Install xPortal Wallet on your phone
            </Box>
          </Link>{' '}
          and join the revolution.
        </Box>
      </MainLayout>
    </>
  );
};

export default CryptoWeedShop;
