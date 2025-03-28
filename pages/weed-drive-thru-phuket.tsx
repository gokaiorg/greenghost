import type { GetServerSideProps, NextPage } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const WeedDriveThru: NextPage = () => {
  return (
    <>
      <Head>
        <title>Weed Drive-thru in Phuket - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Green Ghost Weed Drive-thru in Phuket, where convenience meets quality. Our drive-thru service is designed to provide you with a seamless and hassle-free experience, allowing you to browse and order your favorite cannabis products without leaving the comfort of your car."
        />
        <meta
          property="og:title"
          content="Weed Drive-thru in Phuket - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Green Ghost Weed Drive-thru in Phuket, where convenience meets quality. Our drive-thru service is designed to provide you with a seamless and hassle-free experience, allowing you to browse and order your favorite cannabis products without leaving the comfort of your car."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/weed-drive-thru-phuket"
        />
        <meta
          name="twitter:title"
          content="Weed Drive-thru in Phuket - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Green Ghost Weed Drive-thru in Phuket, where convenience meets quality. Our drive-thru service is designed to provide you with a seamless and hassle-free experience, allowing you to browse and order your favorite cannabis products without leaving the comfort of your car."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/weed-drive-thru-phuket"
        />
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
          my={4}
          lineHeight={1}
        >
          <HomeSectionTitle title="Weed Drive Thru Phuket" />
        </Box>
        <Text
          lineHeight={1}
          as={'h2'}
          fontSize={{ base: '3xl' }}
          fontFamily={'vt323'}
          mb={10}
        >
          Fast and discreet. Simply drive up, explore our wide selection of
          high-quality strains, edibles, and accessories, place your order with
          our friendly staff at least 30mn before, and receive your products
          right at your vehicle window.
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems={'stretch'}
          mb={10}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            position={'relative'}
            height={'fit-content'}
            width={{ base: '100%', lg: '50%' }}
            mb={2}
          >
            <Link href={'/menu/buds'} title={'Weed Shop'} passHref>
              <Text
                as={'h2'}
                fontSize={{ base: 'xl', lg: '2xl' }}
                fontFamily={'CubicFive12'}
                color={'white'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.ultralight'}
                borderWidth={1}
                backdropFilter={'blur(1px)'}
                textAlign={'center'}
                p={4}
                position={'absolute'}
                top={0}
                bottom={0}
                left={0}
                right={0}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
                transition={'all .3s'}
                _hover={{
                  color: 'ghostVerse.green.base',
                  bgColor: 'ghostVerse.dark.lighter',
                }}
              >
                <Box fontSize={{ base: '3xl', lg: '5xl' }}>1</Box>
                Browse our selection of high-quality weed
              </Text>
            </Link>
            <Box width={{ base: '100%' }}>
              <Image
                src="/media/green-ghost-degen-weed-shop-buds-menu.webp"
                width={1200}
                height={600}
                alt="Weed Menu - Weed Drive Thru Phuket - Fast and Discreet."
                quality={75}
              />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            position={'relative'}
            height={'fit-content'}
            width={{ base: '100%', lg: '50%' }}
            mb={2}
          >
            <Link href={'/locations'} title={'Near Me'} passHref>
              <Text
                as={'h2'}
                fontSize={{ base: 'xl', lg: '2xl' }}
                fontFamily={'CubicFive12'}
                color={'white'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.ultralight'}
                borderWidth={1}
                backdropFilter={'blur(1px)'}
                textAlign={'center'}
                p={4}
                position={'absolute'}
                top={0}
                bottom={0}
                left={0}
                right={0}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
                transition={'all .3s'}
                _hover={{
                  color: 'ghostVerse.green.base',
                  bgColor: 'ghostVerse.dark.lighter',
                }}
              >
                <Box fontSize={{ base: '3xl', lg: '5xl' }}>2</Box>
                Choose the Green Ghost location that suits your needs
              </Text>
            </Link>
            <Box width={{ base: '100%' }}>
              <Image
                src="/media/green-ghost-degen-weed-shop-contact-us.webp"
                width={1200}
                height={600}
                alt="Near Me - Weed Drive Thru Phuket - Fast and Discreet."
                quality={75}
              />
            </Box>
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            position={'relative'}
            height={'fit-content'}
            width={{ base: '100%', lg: '50%' }}
            mb={2}
          >
            <Link href={'/contact'} title={'Contact Green ghost'} passHref>
              <Text
                as={'h2'}
                fontSize={{ base: 'xl', lg: '2xl' }}
                fontFamily={'CubicFive12'}
                color={'white'}
                borderColor={'ghostVerse.color2.base'}
                bgColor={'ghostVerse.dark.ultralight'}
                borderWidth={1}
                backdropFilter={'blur(1px)'}
                textAlign={'center'}
                p={4}
                position={'absolute'}
                top={0}
                bottom={0}
                left={0}
                right={0}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
                justifyContent={'center'}
                transition={'all .3s'}
                _hover={{
                  color: 'ghostVerse.green.base',
                  bgColor: 'ghostVerse.dark.lighter',
                }}
              >
                <Box fontSize={{ base: '3xl', lg: '5xl' }}>3</Box>
                Proceed to contact and provide your order details
              </Text>
            </Link>
            <Box width={{ base: '100%' }}>
              <Image
                src="/media/green-ghost-degen-weed-shop-contact-us.webp"
                width={1200}
                height={600}
                alt="Contact us - Weed Drive Thru Phuket - Fast and Discreet."
                quality={75}
              />
            </Box>
          </Box>
        </Box>
        <Box
          as={'h3'}
          mb={20}
          display={'flex'}
          textAlign={'center'}
          fontSize={'4xl'}
          width={'fit-content'}
          flexDirection={'column'}
          fontFamily={'vt323'}
          lineHeight={1}
        >
          With our efficient and discreet service, you can enjoy a convenient
          and safe way to access top-notch cannabis products in Phuket. Discover
          the ultimate drive-thru experience with Green Ghost today!
        </Box>
      </MainLayout>
    </>
  );
};

export default WeedDriveThru;
