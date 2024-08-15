import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const InstallXportal: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Install xPortal app.</title>
        <meta
          name="description"
          content="To become a member of the Ghost Clan in the GhostVerse, you can install the XPortal app on your mobile device. XPortal is a secure app that allows you to access the GhostVerse and interact with other members of the Ghost Clan. To get started, visit the XPortal website and download the app for your device. Once installed, create a new account and follow the on-screen instructions to set up your profile. "
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Install xPortal app."
        />
        <meta
          property="og:description"
          content="To become a member of the Ghost Clan in the GhostVerse, you can install the XPortal app on your mobile device. XPortal is a secure app that allows you to access the GhostVerse and interact with other members of the Ghost Clan. To get started, visit the XPortal website and download the app for your device. Once installed, create a new account and follow the on-screen instructions to set up your profile. "
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/install-xportal-app"
        />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Install xPortal app."
        />
        <meta
          name="twitter:description"
          content="To become a member of the Ghost Clan in the GhostVerse, you can install the XPortal app on your mobile device. XPortal is a secure app that allows you to access the GhostVerse and interact with other members of the Ghost Clan. To get started, visit the XPortal website and download the app for your device. Once installed, create a new account and follow the on-screen instructions to set up your profile. "
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/install-xportal-app"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <HomeSectionTitle title="Install xPortal app - Get cashback." />
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
            01 - Download xPortal app on your mobile phone
          </Text>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent="space-between"
            maxWidth="400px"
          >
            <Box mb={4} width={'100%'} mr={2}>
              <Link
                href="https://apps.apple.com/app/xportal/id1519405832"
                target="_blank"
                title="Install xPortal App on Apple"
                passHref
              >
                <Image
                  src="/media/app-store.svg"
                  alt="Green Ghost - Degen Weed Shop - Install xPortal - App Store"
                  title="Green Ghost - Degen Weed Shop - Install xPortal - App Store"
                  width="120"
                  height="40"
                  quality={75}
                />
              </Link>
            </Box>
            <Box mb={4} width={'100%'} mr={2}>
              <Link
                href="https://play.google.com/store/apps/details?id=com.elrond.maiar.wallet"
                target="_blank"
                title="Install xPortal App on Android"
                passHref
              >
                <Image
                  src="/media/play-store.svg"
                  width="135"
                  height="40"
                  alt="Green Ghost - Degen Weed Shop - Install xPortal - Play Store"
                  title="Green Ghost - Degen Weed Shop - Install xPortal - Play Store"
                  quality={75}
                />
              </Link>
            </Box>
            <Box mb={4} width={'100%'} mr={2}>
              <Link
                href="https://appgallery.huawei.com/app/C104325151"
                target="_blank"
                title="Install xPortal App on Huawei"
                passHref
              >
                <Image
                  src="/media/huawei-store.svg"
                  width="133"
                  height="40"
                  alt="Green Ghost - Degen Weed Shop - Install xPortal - Huawei Store"
                  title="Green Ghost - Degen Weed Shop - Install xPortal - Huawei Store"
                  quality={75}
                />
              </Link>
            </Box>
          </Box>
          <br />
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            02 - Install xPortal with our referral code:{' '}
            <Box as={'span'} color={'ghostVerse.green.base'}>
              7nvae7kpo1
            </Box>
          </Text>
          <Box as="ul" listStyleType="none" pl={4}>
            <Box as="li">
              a. Clic on &quot;Have a referral code?&quot; link.
            </Box>
            <Box as="li">
              b. Fill with our referral code: &quot;7nvae7kpo1&quot;.
            </Box>
            <Box as="li">c. Verify your phone number and continue.</Box>
          </Box>
          <br />
          <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-click-referral-link.webp"
                alt="Green Ghost - Degen Weed Shop - Install xPortal - Click Referral Link"
                title="Green Ghost - Degen Weed Shop - Install xPortal - Click Referral Link"
                width={500}
                height={1029}
                quality={75}
              />
            </Box>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-enter-referral-code.webp"
                alt="Green Ghost - Degen Weed Shop - Install xPortal - Enter Referral code"
                title="Green Ghost - Degen Weed Shop - Install xPortal - Enter Referral code"
                width={500}
                height={1029}
                quality={75}
              />
            </Box>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-verify-phone-number.webp"
                alt="Green Ghost - Degen Weed Shop - Install xPortal - Verify Phone Number"
                title="Green Ghost - Degen Weed Shop - Install xPortal - Verify Phone Number"
                width={500}
                height={1029}
                quality={75}
              />
            </Box>
          </Box>
          <Text>
            Follow the process to generate your secret phrase.{' '}
            <Box as={'span'} color={'ghostVerse.orange.base'}>
              The secret phrase is the only access to your funds, never share
              it.
            </Box>
          </Text>
          <br />
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            03 - Claim your{' '}
            <Box as={'span'} color={'ghostVerse.green.base'}>
              @herotag
            </Box>
          </Text>
          <Text>
            Click on the Play section and follow the quests until you can claim
            your Herotag.
          </Text>
          <br />
          <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-click-play-menu.webp"
                alt="Green Ghost - Degen Weed Shop - Install xPortal - Click Play Menu"
                title="Green Ghost - Degen Weed Shop - Install xPortal - Click Play Menu"
                width={500}
                height={1029}
                quality={75}
              />
            </Box>
            <Box
              width={{ base: '100%', md: '30%' }}
              marginRight={{ base: '0', md: '4' }}
              marginBottom={4}
              position={'relative'}
            >
              {' '}
              <Image
                src="/media/green-ghost-degen-weed-shop-install-xportal-app-claim-your-herotag.webp"
                alt="Green Ghost - Degen Weed Shop - Install xPortal - Claim Your Herotag"
                title="Green Ghost - Degen Weed Shop - Install xPortal - Claim Your Herotag"
                width={500}
                height={1029}
                quality={75}
              />
            </Box>
          </Box>
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: '4xl' }}
            fontWeight={'black'}
            mb={4}
          >
            04 - Congratulations! You are all set.
          </Text>
          <Text>
            Share your Herotag with us and we&apos;ll deliver your cashback.
          </Text>
        </Box>
      </MainLayout>
    </>
  );
};

export default InstallXportal;
