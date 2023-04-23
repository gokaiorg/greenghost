import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { ImgDollar } from '../components/ImgDollar';
import { ImgQuestion } from '../components/ImgQuestion';
import Head from 'next/head';
import { MenuCrypto } from '../components/MenuCrypto';
import Link from 'next/link';

const CryptoWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Crypto Weed Shop - Cashback.</title>
        <meta
          name="description"
          content="At our online Crypto Weed Shop, you can buy high-quality cannabis items and get cashback benefits. You may earn cashback on purchases as a member by owning Ghost NFTs or being one of the first 1000 clients."
        />
        <meta
          property="og:title"
          content="Green Ghost - Crypto Weed Shop - Cashback.
          Edibles."
        />
        <meta
          property="og:description"
          content="At our online Crypto Weed Shop, you can buy high-quality cannabis items and get cashback benefits. You may earn cashback on purchases as a member by owning Ghost NFTs or being one of the first 1000 clients."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/crypto-weed-shop-cashback"
        />
        <meta
          name="twitter:title"
          content="Green Ghost - Crypto Weed Shop - Cashback.
          Edibles."
        />
        <meta
          name="twitter:description"
          content="At our online Crypto Weed Shop, you can buy high-quality cannabis items and get cashback benefits. You may earn cashback on purchases as a member by owning Ghost NFTs or being one of the first 1000 clients."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/crypto-weed-shop-cashback"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Crypto Weed Shop - Cashback." />
        <MenuCrypto />
        <Box
          as="div"
          color="white"
          fontSize={{ base: '3xl' }}
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          mt={5}
          mb={6}
          p={4}
          mr="auto"
          fontFamily="vt323"
        >
          <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
            Ready to step into a new economic model
            <ImgQuestion />
          </Text>
          If you own an{' '}
          <Text
            color="ghostVerse.green.base"
            as="a"
            href="https://ghostverse.org/mxghosts"
          >
            NFT from our collection
          </Text>{' '}
          and pay with <ImgDollar />
          EGLD using the{' '}
          <Text
            color="ghostVerse.green.base"
            as="a"
            href="https://xport.al/referral/7nvae7kpo1"
          >
            xPortal app
          </Text>
          , you&apos;ll receive cashback in <ImgDollar />
          EBUD.
          <br />
          <br />
          <Text
            color="ghostVerse.green.base"
            as="a"
            target="_blank"
            href="https://linktr.ee/elrondbuds"
          >
            eBudsDAC
          </Text>{' '}
          is a decentralized autonomous community project on the{' '}
          <Text
            color="ghostVerse.green.base"
            as="a"
            target="_blank"
            href="https://multiversx.com/"
          >
            MultiversX blockchain
          </Text>{' '}
          and centered around cannabis.
          <br />
          <br />
          <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
            GRAND OPENING
          </Text>
          First 1000 customers receive 100 <ImgDollar />
          EBUD cashback.{' '}
          <Link href="/install-xportal-app">
            <Box as="span" color="ghostVerse.green.base">
              Claim your cashback!
            </Box>
          </Link>
          <br />
          <br />
          <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
            Join us in this innovative movement and take advantage of our unique
            rewards system.
          </Text>
        </Box>
      </MainLayout>
    </>
  );
};

export default CryptoWeedShop;
