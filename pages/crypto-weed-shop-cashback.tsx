import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Head from 'next/head';
import { MenuCrypto } from '../components/MenuCrypto';
import Link from 'next/link';
import Image from 'next/image';
import { IconCashback } from '../components/media/IconCashback';

const CryptoWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Crypto Weed Shop - Cashback</title>
        <meta
          name="description"
          content="At our online Crypto Weed Shop, you can buy high-quality cannabis items and get cashback benefits. You may earn cashback on purchases as a member by owning Ghost NFTs or being one of the first 1000 clients."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Crypto Weed Shop - Cashback"
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
          content="Green Ghost 🌿👻 Crypto Weed Shop - Cashback"
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
        <MenuCrypto />
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
        >
          <Box w={{ base: '50px', lg: '100px' }} my={4}>
            <IconCashback />
          </Box>
          <HomeSectionTitle title="Crypto Weed Shop - Cashback" />
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
            Ready to step into a new economic model?
          </Text>
          <Text
            as={'p'}
            color={'ghostVerse.blue.base'}
            p={4}
            mb={10}
            borderColor={'ghostVerse.blue.base'}
            borderWidth={1}
          >
            Green Ghost offers cashback to Ghost Clan members who pay with
            crypto and{' '}
            <Link
              href="/install-xportal-app"
              title="Install xPortal App"
              passHref
            >
              <Box as={'span'} color={'white'}>
                xPortal App
              </Box>
            </Link>
            . To do this, we have teamed up with{' '}
            <Link
              href="https://linktr.ee/elrondbuds"
              title="Green Ghost - ElrondBuds DAC"
              passHref
            >
              <Box as={'span'} color={'white'}>
                ElrondBuds DAC
              </Box>
            </Link>
            . Discover{' '}
            <Link
              href="crypto-weed-shop-partners"
              title="Green Ghost - Crypto partners"
              passHref
            >
              <Box as={'span'} color={'white'}>
                all our partners
              </Box>
            </Link>{' '}
            and maybe future cashback opportunities.
          </Text>
          <Box
            display={'flex'}
            alignItems={'top'}
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            mb={10}
          >
            <Box
              width={{ base: '100%', lg: '45%' }}
              mr={{ base: 0, lg: 10 }}
              mt={4}
            >
              <Image
                src="/media/green-ghost-weed-shop-crypto-cashback.webp"
                width={1260}
                height={600}
                alt="Green Ghost - Crypto Cashback"
                quality={75}
              />
            </Box>
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text
                as={'h2'}
                color={'white'}
                fontSize={{ base: 30, lg: 34 }}
                fontWeight={'black'}
                mb={4}
              >
                How does it work?
              </Text>
              <Text as={'p'}>
                Green Ghost has invested in{' '}
                <Link
                  href="https://www.frameit.gg/marketplace/BUD-3ee0cf/mint?sp=true"
                  title="Green Ghost - $EBUD token"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    eBuds NFTs
                  </Box>
                </Link>{' '}
                and{' '}
                <Link
                  href="https://eneftor.com/stakeableCollection/BUD-3ee0cf/EBUD-d29cce"
                  title="Green Ghost - $EBUD token"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    stakes them
                  </Box>{' '}
                </Link>
                to generate income in{' '}
                <Link
                  href="https://explorer.multiversx.com/tokens/EBUD-d29cce"
                  title="Green Ghost - $EBUD token"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    $EBUD tokens
                  </Box>
                </Link>
                .
                <br />
                Every month, the generated interest is distributed among all
                consumers who have paid with cryptocurrency.
              </Text>
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            mb={8}
          >
            <Box width={{ base: '100%', lg: '65%' }}>
              <Text
                as={'h2'}
                color={'white'}
                fontSize={{ base: 30, lg: 34 }}
                fontWeight={'black'}
                mb={4}
              >
                Grand opening!
              </Text>
              <Text as={'p'}>
                ElrondBuds DAC has allocated an exceptional fund of{' '}
                <Box as={'span'} color={'ghostVerse.blue.base'}>
                  $100,000EBUD
                </Box>{' '}
                tokens.
                <br />
                First 1,000 customers who{' '}
                <Link
                  href="/install-xportal-app"
                  title="Install xPortal App"
                  passHref
                >
                  <Box as={'span'} color={'ghostVerse.green.base'}>
                    Install xPortal Wallet
                  </Box>
                </Link>{' '}
                will receive{' '}
                <Box as={'span'} color={'ghostVerse.blue.base'}>
                  $100EBUD
                </Box>{' '}
                as cashback.
              </Text>
            </Box>
            <Box
              width={{ base: '100%', lg: '50%' }}
              ml={{ base: 0, lg: 10 }}
              mt={4}
            >
              <Image
                src="/media/green-ghost-crypto-weed-shop-ebud-nft.png"
                width={1260}
                height={600}
                alt="Green Ghost - eBudNFT"
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
