import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Head from 'next/head';
import { MenuCrypto } from '../components/MenuCrypto';
import { IconPartners } from '../components/media/IconPartners';

const CryptoWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Crypto Weed Shop - Partners</title>
        <meta
          name="description"
          content="Unlock a 13% promotion on all your purchases at our crypto weed shop by holding one of our partner NFTs. As a valued partner, you'll have exclusive access to discounts and promotions on our premium selection of organic cannabis products. Join our community of partners today."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Crypto Weed Shop - Partners"
        />
        <meta
          property="og:description"
          content="Unlock a 13% promotion on all your purchases at our crypto weed shop by holding one of our partner NFTs. As a valued partner, you'll have exclusive access to discounts and promotions on our premium selection of organic cannabis products. Join our community of partners today."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta
          property="og:url"
          content="https://green.gd/crypto-weed-shop-partners"
        />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Crypto Weed Shop - Partners"
        />
        <meta
          name="twitter:description"
          content="Unlock a 13% promotion on all your purchases at our crypto weed shop by holding one of our partner NFTs. As a valued partner, you'll have exclusive access to discounts and promotions on our premium selection of organic cannabis products. Join our community of partners today."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop-grand-opening.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/crypto-weed-shop-partners"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuCrypto />
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
        >
          <Box w={{ base: '50px', lg: '100px' }} my={4}>
            <IconPartners />
          </Box>
          <HomeSectionTitle title="Crypto Weed Shop - Partners" />
        </Box>
        <Box
          as="div"
          color={'white'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          mt={5}
          mb={6}
          p={4}
          mr={'auto'}
          fontFamily={'vt323'}
          lineHeight={1}
          fontSize={{ base: 24, lg: 30 }}
        >
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: 30, lg: 34 }}
            fontWeight={'black'}
            mb={4}
          >
            Are you from another universe in MultiversX?
          </Text>
          <Text as={'p'} mb={4}>
            We also offer privileges to our partners in cannabis, art, gaming,
            community and of course, web3.
            <br />
            <br />
            If you own an NFT from one of our partners, you can enjoy a{' '}
            <Text as={'span'} color={'ghostVerse.blue.base'}>
              13% discount
            </Text>{' '}
            on every order made at the Green Ghost cannabis store.
          </Text>
          <Box display={'flex'} flexWrap={'wrap'}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              color={'ghostVerse.green.base'}
              as="a"
              mx={4}
              mb={4}
              target="_blank"
              href="https://linktr.ee/elrondbuds"
            >
              <Box
                as={'img'}
                src="/media/green-ghost-degen-weed-shop-partner-ebudsdac.webp"
                width="80px"
                height="80px"
                maxW={'inherit'}
                alt="Green Ghost - Degen Weed Shop - eBudsDAC Partner"
                title="Green Ghost - Degen Weed Shop - eBudsDAC Partner"
              />
              eBudsDAC
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              color={'ghostVerse.green.base'}
              as="a"
              mx={4}
              mb={4}
              target="_blank"
              href="https://power.plata.network/"
            >
              <Box
                as={'img'}
                src="/media/green-ghost-degen-weed-shop-partner-plata.webp"
                width="80px"
                height="80px"
                maxW={'inherit'}
                alt="Green Ghost - Degen Weed Shop - Plata Partner"
                title="Green Ghost - Degen Weed Shop - Plata Partner"
              />
              Plata
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              color={'ghostVerse.green.base'}
              as="a"
              mx={4}
              mb={4}
              target="_blank"
              href="https://www.instagram.com/faintart.x/"
            >
              <Box
                as={'img'}
                src="/media/green-ghost-degen-weed-shop-partner-fainart.webp"
                width="80px"
                height="80px"
                maxW={'inherit'}
                alt="Green Ghost - Degen Weed Shop - Fainart Partner"
                title="Green Ghost - Degen Weed Shop - Fainart Partner"
              />
              Fainart
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              color={'ghostVerse.green.base'}
              as="a"
              mx={4}
              mb={4}
              target="_blank"
              href="https://linktr.ee/gccmmxxi"
            >
              <Box
                as={'img'}
                src="/media/green-ghost-degen-weed-shop-partner-gcc.webp"
                width="80px"
                height="80px"
                maxW={'inherit'}
                alt="Green Ghost - Degen Weed Shop - GCC Partner"
                title="Green Ghost - Degen Weed Shop - GCC Partner"
              />
              GCC
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              color={'ghostVerse.green.base'}
              as="a"
              mx={4}
              mb={4}
              target="_blank"
              href="https://efforteconomy.io/"
            >
              <Box
                as={'img'}
                src="/media/green-ghost-degen-weed-shop-partner-effort-economy.webp"
                width="80px"
                height="80px"
                maxW={'inherit'}
                alt="Green Ghost - Degen Weed Shop - Effort Economy Partner"
                title="Green Ghost - Degen Weed Shop - Effort Economy Partner"
              />
              Effort
            </Box>
            <Box
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
              flexDirection={'column'}
              color={'ghostVerse.green.base'}
              as="a"
              mx={4}
              mb={4}
              target="_blank"
              href="https://peerme.io/"
            >
              <Box
                as={'img'}
                src="/media/green-ghost-degen-weed-shop-partner-peerme.webp"
                width="80px"
                height="80px"
                maxW={'inherit'}
                alt="Green Ghost - Degen Weed Shop - Peerme Partner"
                title="Green Ghost - Degen Weed Shop - Peerme Partner"
              />
              Peerme
            </Box>
          </Box>
          <br />
          <br />
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: 30, lg: 34 }}
            fontWeight={'black'}
            mb={4}
          >
            Join us now and take advantage of these exclusive perks!
          </Text>
        </Box>
      </MainLayout>
    </>
  );
};

export default CryptoWeedShop;
