import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Link from 'next/link';
import Head from 'next/head';
import { MenuCrypto } from '../components/MenuCrypto';
import Image from 'next/image';
import { IconRelax } from '../components/media/IconRelax';

const CryptoWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Crypto Weed Shop - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Discover the future of cannabis shopping with The Green Ghost - a tokenized crypto weed shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          property="og:title"
          content="Crypto Weed Shop - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Discover the future of cannabis shopping with The Green Ghost - a tokenized crypto weed shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-buds-menu.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/crypto-weed-shop-relax-and-earn"
        />
        <meta
          name="twitter:title"
          content="Crypto Weed Shop - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Discover the future of cannabis shopping with The Green Ghost - a tokenized crypto weed shop offering pre-rolled, edibles, and a wide range of flowers. Become a member with NFT ownership to receive exclusive promotions and token cashback rewards. Shop with ease and security with our innovative blockchain-based platform."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-degen-weed-shop-buds-menu.webp"
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
        <MenuCrypto />
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
        >
          <Box w={{ base: '50px', lg: '100px' }} my={4}>
            <IconRelax />
          </Box>
          <HomeSectionTitle title="Crypto Weed Shop - Relax & Earn" />
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          as="div"
          color={'white'}
          fontFamily={'vt323'}
          bgColor={'ghostVerse.dark.lighter'}
          mt={5}
          mb={6}
          p={4}
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
            Join the new generation in love for weed, art and crypto.
          </Text>
          <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={{ base: 'column', lg: 'row' }}
            mb={10}
          >
            <Box
              width={{ base: '100%', lg: '45%' }}
              mr={{ base: 0, lg: 10 }}
              my={4}
            >
              <Image
                src="/media/green-ghost-weed-shop-pixel-art.webp"
                width={1080}
                height={514}
                alt="Green Ghost is a part of the GhostVerse ecosystem"
                quality={75}
              />
            </Box>
            <Text as={'p'} width={{ base: '100%', lg: '55%' }}>
              By being a part of the GhostVerse ecosystem, the Green Ghost aims
              to offer a unique platform for members to access and enjoy
              cannabis-related products and services, leveraging the
              advancements of blockchain technology.
            </Text>
          </Box>
          <Text
            as={'p'}
            width={{ base: '100%' }}
            mb={'6'}
            color={'ghostVerse.blue.base'}
            p={4}
            borderColor={'ghostVerse.blue.base'}
            borderWidth={1}
          >
            Green Ghost strives to create a community where Ghost Clan members
            can experience exclusive perks, discounts, and rewards while
            engaging with the world of crypto and cannabis in a secure and
            innovative environment.
          </Text>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            mb={8}
          >
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text
                as={'h2'}
                fontWeight={'black'}
                fontSize={{ base: 30, lg: 34 }}
                marginBottom={4}
              >
                How does it work?
              </Text>
              A percentage of Green Ghost&apos;s revenue is allocated to staking
              in the{' '}
              <Link
                href="https://ghostverse.org/"
                title="GhostVerse DAO"
                passHref
              >
                <Text as={'span'} color={'ghostVerse.green.base'}>
                  GhostVerse DAO
                </Text>
              </Link>{' '}
              to increase passive income for NFT holders, and a portion of
              GhostVerse&apos;s revenue is redistributed to Green Ghost
              customers in the form of{' '}
              <Link
                href="/crypto-weed-shop-cashback"
                title="Green Ghost cashback"
                passHref
              >
                <Text as={'span'} color={'ghostVerse.green.base'}>
                  cashback
                </Text>
              </Link>
              . This ensures that both the NFT holders and customers of Green
              Ghost benefit from the earnings generated by the GhostVerse
              ecosystem.
            </Box>
            <Box
              width={{ base: '100%', lg: '35%' }}
              ml={{ base: 0, lg: 10 }}
              mt={4}
            >
              <Image
                src="/media/green-ghost-weed-shop-crypto-system.png"
                width={500}
                height={500}
                alt="Green Ghost - Crypto System"
                quality={75}
              />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            mb={8}
          >
            <Box
              width={{ base: '100%', lg: '35%' }}
              mr={{ base: 0, lg: 10 }}
              mt={4}
            >
              <Image
                src="/media/green-ghost-weed-shop-crypto-member.png"
                width={500}
                height={500}
                alt="Green Ghost - Crypto Member"
                quality={75}
              />
            </Box>
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text
                as={'h2'}
                fontWeight={'black'}
                fontSize={{ base: 30, lg: 34 }}
                marginBottom={4}
              >
                How to become a member?
              </Text>
              <Text as={'p'} mb={4}>
                Own at least 1 of our NFTs!
                <br />
                You need to{' '}
                <Link
                  href="/install-xportal-app"
                  title="Install xPortal App"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    Install xPortal Wallet
                  </Box>
                </Link>{' '}
                and purchase an{' '}
                <Link
                  href="https://ghostverse.org/mxghosts"
                  title="Green Ghost buy NFT"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    MxGhosts
                  </Box>
                </Link>{' '}
                NFT.
              </Text>
              <Box
                as={'div'}
                color={'ghostVerse.blue.base'}
                p={4}
                borderColor={'ghostVerse.blue.base'}
                borderWidth={1}
              >
                Keep an eye out for our upcoming public sales or purchase one on
                the secondary market.
              </Box>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            mb={8}
          >
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text
                id={'benefits'}
                as={'h2'}
                fontWeight={'black'}
                fontSize={{ base: 30, lg: 34 }}
                marginBottom={4}
              >
                What are the benefits?
              </Text>
              <Text as={'p'} mb={4}>
                You get 20% off on buds and certain other products, and
                privileged access to our new strain arrivals. You also receive
                cashback in{' '}
                <Link
                  href="https://linktr.ee/elrondbuds"
                  title="Green Ghost - Elrond Buds"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    $EBUD
                  </Box>
                </Link>
                . You can also get discounts if you are a member of an{' '}
                <Link
                  href="/crypto-weed-shop-partners"
                  title="Green Ghost - Crypto partners"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    NFT partner project
                  </Box>
                </Link>
                .
              </Text>
              <Link
                href="https://ghostverse.org/play-and-earn"
                title="GhostVerse MxGhosts - Play and Earn"
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  borderColor={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl', md: '4xl' }}
                  borderWidth={1}
                  bgColor="transparent"
                  backdropFilter={'blur(3px)'}
                  p={6}
                  mt={10}
                  mx={'auto'}
                  fontFamily={'vt323'}
                  _hover={{
                    borderColor: 'ghostVerse.green.base',
                    color: 'ghostVerse.green.base',
                  }}
                >
                  More rewards
                </Text>
              </Link>
            </Box>
            <Box
              width={{ base: '100%', lg: '35%' }}
              ml={{ base: 0, lg: 10 }}
              mt={4}
            >
              <Image
                src="/media/green-ghost-weed-shop-crypto-benefits.png"
                width={500}
                height={500}
                alt="Green Ghost - Crypto Benefits"
                quality={75}
              />
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default CryptoWeedShop;
