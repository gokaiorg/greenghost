import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { ImgCup } from '../components/media/ImgCup';

const CannabisCup: NextPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };
  return (
    <>
      <Head>
        <title>Phuket Cannabis Cup - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Green Ghost Degen Weed Shop present a comprehensive guide to the upcoming Phuket Cannabis Cup! This page includes information about the event's schedule, location, and prize categories. It also includes a list of all the strains that win the Phulet cannabis cup in the greenhouse, indoor sativa, indica, and hybrid categories. Whether you're a cannabis connoisseur or just a curious spectator, be sure to check out Green Ghost's Phuket Cannabis Cup to learn everything you need to know about the event."
        />
        <meta
          property="og:title"
          content="Phuket Cannabis Cup - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Green Ghost Degen Weed Shop present a comprehensive guide to the upcoming Phuket Cannabis Cup! This page includes information about the event's schedule, location, and prize categories. It also includes a list of all the strains that win the Phulet cannabis cup in the greenhouse, indoor sativa, indica, and hybrid categories. Whether you're a cannabis connoisseur or just a curious spectator, be sure to check out Green Ghost's Phuket Cannabis Cup to learn everything you need to know about the event."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-the-second-phuket-cannabis-cup.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/phuket-cannabis-cup"
        />
        <meta
          name="twitter:title"
          content="Phuket Cannabis Cup - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Green Ghost Degen Weed Shop present a comprehensive guide to the upcoming Phuket Cannabis Cup! This page includes information about the event's schedule, location, and prize categories. It also includes a list of all the strains that win the Phulet cannabis cup in the greenhouse, indoor sativa, indica, and hybrid categories. Whether you're a cannabis connoisseur or just a curious spectator, be sure to check out Green Ghost's Phuket Cannabis Cup to learn everything you need to know about the event."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-the-second-phuket-cannabis-cup.webp"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/phuket-cannabis-cup"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor={'pointer'}
          color={'ghostVerse.green.base'}
          onClick={handleBack}
          title={'BACK'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#13DE00"
            width="30px"
            height="30px"
          >
            <path
              fillRule="evenodd"
              d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          textAlign={'center'}
          my={4}
          lineHeight={1}
        >
          <ImgCup />
          <HomeSectionTitle title="Phuket Cannabis Cup" />
        </Box>
        <Text
          as={'p'}
          fontFamily={'vt323'}
          width={{ base: '100%' }}
          textAlign={'center'}
          fontSize={{ base: 24, lg: 30 }}
          mb={10}
        >
          Green Ghost voted 30th best weed shop in Thailand out of almost 640
          participants!
          <br />
          <Link
            href="https://weed.th/best-dispensaries-in-thailand"
            title="Green Ghost Degen Weed Shop - Best Dispensary in Thailand"
            passHref
          >
            <Text as={'span'} color={'ghostVerse.green.base'}>
              Congratulation to all
            </Text>
          </Link>
        </Text>
        <Text
          as={'h2'}
          lineHeight={1}
          fontSize={{ base: 'xl' }}
          fontFamily={'CubicFive12'}
          mb={5}
        >
          The 2nd Phuket Cannabis Cup - 2023
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={'stretch'}
          mb={20}
        >
          <Box width={{ base: '100%', lg: '50%' }}>
            <Image
              src="/media/green-ghost-the-second-phuket-cannabis-cup.webp"
              width={1264}
              height={600}
              alt="Green Ghost - Phuket Cannabis Cup 2023"
              quality={75}
            />
          </Box>
          <Box
            width={{ base: '100%', lg: '50%' }}
            px={5}
            py={{ base: 5, lg: 0 }}
            display={'flex'}
            flexDirection={'column'}
            fontFamily={'vt323'}
            lineHeight={1}
          >
            <Text
              as={'h3'}
              fontSize={{ base: 24, lg: 30 }}
              mb={2}
              _hover={{
                color: 'ghostVerse.green.base',
              }}
            >
              <Link
                href="https://www.phuketcannabisassociation.com/news/the-2nd-phuket-cannabis-cup.php"
                title="Green Ghost - The 2nd Phuket Cannabis Cup"
                passHref
              >
                December 1st – 2nd, Blue Tree Water Park, Thalang
              </Link>
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Box my={2}>
                <Link
                  href="https://megatix.in.th/events/the-2nd-phuket-cannabis-cup?aid=PCA"
                  title="Green Ghost - Buy Ticket on Megatix - Phuket Cannabis Cup"
                  passHref
                >
                  <Text as={'span'} color={'ghostVerse.green.base'}>
                    Buy Ticket on Megatix
                  </Text>
                </Link>
              </Box>
              <Box my={2}>
                <Link
                  href="https://weed.th/events/the-2nd-phuket-cannabis-cup"
                  title="Green Ghost - Buy Ticket on Weed TH - Phuket Cannabis Cup"
                  passHref
                >
                  <Text as={'span'} color={'ghostVerse.green.base'}>
                    Buy Ticket on Weed TH
                  </Text>
                </Link>
              </Box>
            </Text>
          </Box>
        </Box>
        <Text
          as={'h2'}
          lineHeight={1}
          fontSize={{ base: 'xl' }}
          fontFamily={'CubicFive12'}
          mb={5}
        >
          The First Phuket Cannabis Cup - 2023
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          position={'relative'}
          height={'fit-content'}
          width={{ base: '100%' }}
          mb={20}
        >
          <Box width={{ base: '100%', lg: '50%' }}>
            <Image
              src="/media/green-ghost-the-first-phuket-cannabis-cup.webp"
              width={1264}
              height={600}
              alt="Green Ghost - The 1st Phuket Cannabis Cup"
              quality={75}
            />
          </Box>
          <Box
            width={{ base: '100%', lg: '50%' }}
            px={5}
            py={{ base: 5, lg: 0 }}
            display={'flex'}
            flexDirection={'column'}
            fontFamily={'vt323'}
            lineHeight={1}
          >
            <Text
              as={'h3'}
              fontSize={{ base: 24, lg: 30 }}
              _hover={{
                color: 'ghostVerse.green.base',
              }}
            >
              <Link
                href="https://www.phuketcannabisassociation.com/news/the-1st-phuket-cannabis-cup.php"
                title="Green Ghost - The 1st Phuket Cannabis Cup"
                passHref
              >
                {' '}
                March 25th, Pramookkoo Resort, Kata Beach
              </Link>
            </Text>
            <Text
              as={'h4'}
              my={2}
              color={'ghostVerse.blue.base'}
              fontSize={{ base: 20, lg: 26 }}
            >
              Greenhouse
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Winner
              </Text>
              <Box>
                <Link
                  href="https://mjbfarm.com/"
                  title="Green Ghost - MJB FARM - Phuket Cannabis Cup"
                  passHref
                >
                  <Text as={'span'} color={'ghostVerse.green.base'}>
                    MJB
                  </Text>
                </Link>{' '}
                - Strain GDP X LEMON TREE
              </Box>
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Runner-up
              </Text>
              <Box>
                <Link
                  href="https://thaigreenlab.com/"
                  title="Green Ghost - GreenLab - Phuket Cannabis Cup"
                  passHref
                >
                  <Text as={'span'} color={'ghostVerse.green.base'}>
                    GREENLAB
                  </Text>
                </Link>{' '}
                - Strain MANGO STICKY RICE
              </Box>
            </Text>
            <Text
              as={'h4'}
              my={2}
              color={'ghostVerse.blue.base'}
              fontSize={{ base: 20, lg: 26 }}
            >
              {' indoor hybrid '}
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Winner
              </Text>
              <Box>
                <Link
                  href="https://www.instagram.com/wonderfarm.th/"
                  title="Green Ghost - WONDER FARM - Phuket Cannabis Cup"
                  passHref
                >
                  <Text as={'span'} color={'ghostVerse.green.base'}>
                    WONDER FARM
                  </Text>
                </Link>{' '}
                - Strain DREAM FACTORY
              </Box>
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Runner-up
              </Text>
              <Box>
                <Text as={'span'}>MOUNTAIN GROW</Text> - Strain OREO COOKIES
              </Box>
            </Text>
            <Text
              as={'h4'}
              my={2}
              color={'ghostVerse.blue.base'}
              fontSize={{ base: 20, lg: 26 }}
            >
              {' indoor Sativa 70%+ '}
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Winner
              </Text>
              <Box>
                <Link
                  href="https://www.facebook.com/candyztermtemphuket"
                  title="Green Ghost - CANDY TERMTEMZ - Phuket Cannabis Cup"
                  passHref
                >
                  <Text as={'span'} color={'ghostVerse.green.base'}>
                    CANDY TERMTEMZ
                  </Text>
                </Link>{' '}
                - Strain APPLE JELLY
              </Box>
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Runner-up
              </Text>
              <Box>
                <Text as={'span'}>UNDERGROUND GROWER</Text> - Strain SSY7
              </Box>
            </Text>
            <Text
              as={'h4'}
              my={2}
              color={'ghostVerse.blue.base'}
              fontSize={{ base: 20, lg: 26 }}
            >
              {' indoor Indica 70%+ '}
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Winner
              </Text>
              <Box>
                <Text as={'span'}>PB BIOMED</Text> - Strain BISCOTTI MINTS
              </Box>
            </Text>
            <Text
              as={'p'}
              mb={2}
              fontSize={{ base: 20, lg: 26 }}
              display={'flex'}
              flexDirection={'column'}
            >
              <Text
                as={'span'}
                fontFamily={'CubicFive12'}
                fontSize={14}
                color="ghostVerse.grey.base"
              >
                Runner-up
              </Text>
              <Box>
                <Link
                  href="https://www.taratera.com/"
                  title="Green Ghost - กัญชาตราหมาดาว - Phuket Cannabis Cup"
                  passHref
                >
                  <Text as={'span'} color={'ghostVerse.green.base'}>
                    กัญชาตราหมาดาว
                  </Text>
                </Link>{' '}
                - Strain DA FUNK
              </Box>
            </Text>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default CannabisCup;
