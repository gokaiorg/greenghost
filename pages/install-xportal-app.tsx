import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

const InstallXportal: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <HomeSectionTitle title="Install xPortal app - Get cashback." />
      <Box
        display="flex"
        flexDirection="column"
        as="div"
        color="white"
        fontSize={{ base: '3xl' }}
        fontFamily="vt323"
        borderColor="ghostVerse.color2.base"
        bgColor="ghostVerse.dark.lighter"
        borderWidth={1}
        backdropFilter="blur(3px)"
        mt={5}
        mb={6}
        p={4}
      >
        <Text
          as="h2"
          color="white"
          fontSize={{ base: '4xl' }}
          fontWeight="black"
          mb={4}
        >
          01 - Download xPortal app on your mobile phone
        </Text>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          maxWidth="400px"
        >
          <Box mb={4}>
            <Link
              href="https://apps.apple.com/app/xportal/id1519405832"
              target="_blank"
            >
              <Image
                src="/media/app-store.svg"
                alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - App Store"
                title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - App Store"
                width="120"
                height="42"
              />
            </Link>
          </Box>
          <Box mb={4}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.elrond.maiar.wallet"
              target="_blank"
            >
              <Image
                src="/media/play-store.svg"
                width="135"
                height="42"
                alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Play Store"
                title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Play Store"
              />
            </Link>
          </Box>
          <Box mb={4}>
            <Link
              href="https://appgallery.huawei.com/app/C104325151"
              target="_blank"
            >
              <Image
                src="/media/huawei-store.svg"
                width="132"
                height="42"
                alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Huawei Store"
                title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Huawei Store"
              />
            </Link>
          </Box>
        </Box>
        <br />
        <Text
          as="h2"
          color="white"
          fontSize={{ base: '4xl' }}
          fontWeight="black"
          mb={4}
        >
          02 - Install xPortal with our referral code:{' '}
          <Box as="span" color="ghostVerse.green.base">
            7nvae7kpo1
          </Box>
        </Text>
        <Box as="ul" listStyleType="none" pl={4}>
          <Box as="li">a. Clic on "Have a referral code?" link.</Box>
          <Box as="li">b. Fill with our referral code: "7nvae7kpo1".</Box>
          <Box as="li">c. Verify your phone number and continue.</Box>
        </Box>
        <br />
        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            height={{ base: '545px', xl: '725px' }}
            width={{ base: '100%', md: '30%' }}
            marginRight={{ base: '0', md: '4' }}
            marginBottom={4}
            position="relative"
          >
            {' '}
            <Image
              src="/media/green-garden-dispensary-cannabis-shop-phuket-install-xportal-app-click-referral-link.webp"
              alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Click Referral Link"
              title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Click Referral Link"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box
            height={{ base: '545px', xl: '725px' }}
            width={{ base: '100%', md: '30%' }}
            marginRight={{ base: '0', md: '4' }}
            marginBottom={4}
            position="relative"
          >
            {' '}
            <Image
              src="/media/green-garden-dispensary-cannabis-shop-phuket-install-xportal-app-enter-referral-code.webp"
              alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Enter Referral code"
              title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Enter Referral code"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box
            height={{ base: '545px', xl: '725px' }}
            width={{ base: '100%', md: '30%' }}
            marginRight={{ base: '0', md: '4' }}
            marginBottom={4}
            position="relative"
          >
            {' '}
            <Image
              src="/media/green-garden-dispensary-cannabis-shop-phuket-install-xportal-app-verify-phone-number.webp"
              alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Verify Phone Number"
              title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Verify Phone Number"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Text>
          Follow the process to generate your secret phrase.{' '}
          <Box as="span" color="ghostVerse.orange.base">
            The secret phrase is the only access to your funds, never share it.
          </Box>
        </Text>
        <br />
        <Text
          as="h2"
          color="white"
          fontSize={{ base: '4xl' }}
          fontWeight="black"
          mb={4}
        >
          03 - Claim your{' '}
          <Box as="span" color="ghostVerse.green.base">
            @herotag
          </Box>
        </Text>
        <Text>
          Click on the Play section and follow the quests until you can claim
          your Herotag.
        </Text>
        <br />
        <Box display="flex" flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            height={{ base: '545px', xl: '725px' }}
            width={{ base: '100%', md: '30%' }}
            marginRight={{ base: '0', md: '4' }}
            marginBottom={4}
            position="relative"
          >
            {' '}
            <Image
              src="/media/green-garden-dispensary-cannabis-shop-phuket-install-xportal-app-click-play-menu.webp"
              alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Click Play Menu"
              title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Click Play Menu"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box
            height={{ base: '545px', xl: '725px' }}
            width={{ base: '100%', md: '30%' }}
            marginRight={{ base: '0', md: '4' }}
            marginBottom={4}
            position="relative"
          >
            {' '}
            <Image
              src="/media/green-garden-dispensary-cannabis-shop-phuket-install-xportal-app-claim-your-herotag.webp"
              alt="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Claim Your Herotag"
              title="Green Garden Dispensary - Cannabis Shop Phuket - Install xPortal - Claim Your Herotag"
              layout="fill"
              objectFit="contain"
            />
          </Box>
        </Box>
        <Text
          as="h2"
          color="white"
          fontSize={{ base: '4xl' }}
          fontWeight="black"
          mb={4}
        >
          04 - Congratulations! You are all set.
        </Text>
        <Text>Share your Herotag with us and we'll deliver your cashback.</Text>
      </Box>
    </MainLayout>
  );
};

export default InstallXportal;
