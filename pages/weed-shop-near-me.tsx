import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Head from 'next/head';
import Link from 'next/link';
import { IconMap } from '../components/IconMap';
import { IconsReview } from '../components/IconsReview';
import { IconPin } from '../components/IconPin';
import { IconClock } from '../components/IconClock';
import { IconShop } from '../components/IconShop';

const WeedShopNearMe: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Near Me.</title>
        <meta
          name="description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Near Me."
        />
        <meta
          property="og:description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/weed-shop-near-me" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Near Me."
        />
        <meta
          name="twitter:description"
          content="Visit Green Ghost Weed Shop near me today for the best selection of locally sourced organic cannabis products. With multiple locations in Phuket, Thailand, we offer fast and convenient delivery options as well. Browse our menu and order online now!"
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-near-me" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box display={'flex'} alignItems={'center'}>
          <Box w={'40px'} mr={4} mb={4}>
            <IconMap />
          </Box>
          <HomeSectionTitle title="Degen Weed Shop - Near Me." />
        </Box>
        <Text as={'h2'} fontSize={{ base: '3xl' }} fontFamily={'vt323'} mb={10}>
          Looking for a trusted and high-quality weed shop near you?
        </Text>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          mb={10}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            width={{ base: '100%', lg: '65%' }}
          >
            <Text
              as={'h3'}
              color={'white'}
              fontSize={{ base: '2xl' }}
              fontFamily={'CubicFive12'}
              borderColor={'ghostVerse.color2.base'}
              bgColor={'ghostVerse.dark.lighter'}
              borderWidth={1}
              backdropFilter={'blur(3px)'}
              mt={5}
              p={4}
              mr={'auto'}
            >
              Degen Weed Shop in Karon
            </Text>
            <Box
              as={'div'}
              color={'ghostVerse.blue.base'}
              fontFamily={'vt323'}
              fontSize={{ base: '2xl' }}
              mb={4}
            >
              <Box display={'flex'} alignItems={'center'}>
                <IconShop />
                <Box ml={2} mb={1}>
                  Main Shop. All our buds and gadgets. Smoking room ...
                </Box>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <IconClock />
                <Box ml={2} mb={1}>
                  Monday/Sunday 9h-12h & 18h-00h.
                </Box>
              </Box>
            </Box>
            <Text
              display={'flex'}
              pr={{ base: '0', md: '10rem' }}
              fontSize={{ base: '3xl', md: '3xl' }}
              fontFamily={'vt323'}
              _hover={{
                color: 'ghostVerse.green.base',
              }}
            >
              <Link
                href="https://goo.gl/maps/GJU2GmYibHxEohqm8"
                title="Green Ghost - Degen Weed Shop - Map Karon"
                passHref
              >
                <IconPin />
                452 Patak Road, Karon, Mueang Phuket District, Phuket 83100
              </Link>
            </Text>
            {/* <Link
              href="https://g.page/r/CdEZf4I4iGn8EBE/review"
              title="Green Ghost - Degen Weed Shop - Add a review in Karon"
              passHref
            >
              <IconsReview />
            </Link> */}
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            ml={{ base: 0, lg: 'auto' }}
            mt={8}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.456807136641!2d98.298599!3d7.847164999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTAnNDkuOCJOIDk4wrAxNyc1NS4wIkU!5e0!3m2!1sen!2sth!4v1688274621435!5m2!1sen!2sth"
              width="350"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          mb={10}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            width={{ base: '100%', lg: '65%' }}
          >
            <Text
              as={'h3'}
              color={'white'}
              fontSize={{ base: '2xl' }}
              fontFamily={'CubicFive12'}
              borderColor={'ghostVerse.color2.base'}
              bgColor={'ghostVerse.dark.lighter'}
              borderWidth={1}
              backdropFilter={'blur(3px)'}
              mt={5}
              p={4}
              mr={'auto'}
            >
              Degen Weed Shop in Phuket Town
            </Text>
            <Box
              as={'div'}
              color={'ghostVerse.blue.base'}
              fontFamily={'vt323'}
              fontSize={{ base: '2xl' }}
              mb={4}
            >
              <Box display={'flex'} alignItems={'center'}>
                <IconShop />
                <Box ml={2} mb={1}>
                  Gadgets Shop. Grinders, bongs, rolling papers, ...
                </Box>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <IconClock />
                <Box ml={2} mb={1}>
                  Monday/Saturday 10h-19h. Sunday 10h-22h.
                </Box>
              </Box>
            </Box>
            <Text
              display={'flex'}
              pr={{ base: '0', md: '10rem' }}
              fontSize={{ base: '3xl', md: '3xl' }}
              fontFamily={'vt323'}
              _hover={{
                color: 'ghostVerse.green.base',
              }}
            >
              <Link
                href="https://goo.gl/maps/FEhBvjDY8Puwp87q9"
                title="Green Ghost - Degen Weed Shop - Map Phuket Town"
                passHref
              >
                <IconPin />
                17 Thalang Rd, Talat Yai, Mueang Phuket District, Phuket 83000
              </Link>
            </Text>
            <Link
              href="https://g.page/r/CdEZf4I4iGn8EBE/review"
              title="Green Ghost - Degen Weed Shop - Add a review in Phuket Town"
              passHref
            >
              <IconsReview />
            </Link>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            ml={{ base: 0, lg: 'auto' }}
            mt={8}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15808.387850146597!2d98.387895!3d7.8849236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031353d385cf7%3A0xfc698838827f19d1!2sGreen%20Ghost%20%7C%20Degen%20Weed%20Shop%20Phuket!5e0!3m2!1sen!2sth!4v1682823349216!5m2!1sen!2sth"
              width="350"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDirection={{ base: 'column', lg: 'row' }}
          mb={100}
        >
          <Box
            display={'flex'}
            flexDirection={'column'}
            width={{ base: '100%', lg: '65%' }}
          >
            <Text
              as={'h3'}
              color={'white'}
              fontSize={{ base: '2xl' }}
              fontFamily={'CubicFive12'}
              borderColor={'ghostVerse.color2.base'}
              bgColor={'ghostVerse.dark.lighter'}
              borderWidth={1}
              backdropFilter={'blur(3px)'}
              mt={5}
              p={4}
              mr={'auto'}
            >
              Degen Weed Shop in Rawai
            </Text>
            <Box
              as={'div'}
              color={'ghostVerse.blue.base'}
              fontFamily={'vt323'}
              fontSize={{ base: '2xl' }}
              mb={4}
            >
              <Box display={'flex'} alignItems={'center'}>
                <IconShop />
                <Box ml={2} mb={1}>
                  My Weed Partner Shop. Same awesome weed. Rooftop ...
                </Box>
              </Box>
              <Box display={'flex'} alignItems={'center'}>
                <IconClock />
                <Box ml={2} mb={1}>
                  Monday/Sunday 16h-00h. Close on Saturday.
                </Box>
              </Box>
            </Box>
            <Text
              display={'flex'}
              pr={{ base: '0', md: '10rem' }}
              fontSize={{ base: '3xl', md: '3xl' }}
              fontFamily={'vt323'}
              _hover={{
                color: 'ghostVerse.green.base',
              }}
            >
              <Link
                href="https://goo.gl/maps/NRJB7PM1DsQSCHXW8"
                title="Green Ghost - Degen Weed Shop - Map Rawai"
                passHref
              >
                <IconPin />
                69/53 Soi Saiyuan, Rawai, Mueang Phuket District, Phuket 83100
              </Link>
            </Text>
            <Link
              href="https://g.page/r/CZ-x7RFAO5t4EBE/review"
              title="Green Ghost - Degen Weed Shop - Add a review in Rawai"
              passHref
            >
              <IconsReview />
            </Link>
          </Box>
          <Box
            width={{ base: '100%', lg: 'auto' }}
            ml={{ base: 0, lg: 'auto' }}
            mt={8}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15811.90431127206!2d98.3203122!3d7.7923573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa82f76285212d49%3A0x789b3b4011edb19f!2sGreen%20Ghost%20%7C%20Degen%20Weed%20Shop%20Rawai!5e0!3m2!1sen!2sth!4v1682822659232!5m2!1sen!2sth"
              width="350"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default WeedShopNearMe;
