import type { NextPage } from 'next';
import { Box, Text } from '@chakra-ui/react';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import Head from 'next/head';
import Link from 'next/link';

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
        <HomeSectionTitle title="Degen Weed Shop - Near Me." />
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
              mb={6}
              p={4}
              mr={'auto'}
            >
              Degen Weed Shop in Phuket Town
            </Text>
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
                <svg
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#4cfd27"
                  style={{ float: 'left', marginTop: '8', marginRight: '8' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                17 Thalang Rd, Talat Yai, Mueang Phuket District, Phuket 83000
              </Link>
            </Text>
            <Link
              href="https://g.page/r/CdEZf4I4iGn8EBE/review"
              title="Green Ghost - Degen Weed Shop - Add a review in Phuket Town"
              passHref
            >
              <Box display="flex" mt={4}>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <Box ml={2} color="ghostVerse.green.base">
                  Add a review
                </Box>
              </Box>
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
              height="200"
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
              mb={6}
              p={4}
              mr={'auto'}
            >
              Degen Weed Shop in Rawai
            </Text>
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
                <svg
                  width="30px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#4cfd27"
                  style={{ float: 'left', marginTop: '8', marginRight: '8' }}
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                69/53 Soi Saiyuan, Rawai, Mueang Phuket District, Phuket 83100
              </Link>
            </Text>
            <Link
              href="https://g.page/r/CZ-x7RFAO5t4EBE/review"
              title="Green Ghost - Degen Weed Shop - Add a review in Rawai"
              passHref
            >
              <Box display="flex" mt={4}>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  width="20px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#4cfd27"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                    clipRule="evenodd"
                  />
                </svg>
                <Box ml={2} color="ghostVerse.green.base">
                  Add a review
                </Box>
              </Box>
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
              height="200"
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
