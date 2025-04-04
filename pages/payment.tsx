import type { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import {
  Box,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react'; // Added Tabs components
import Head from 'next/head';
import { ImgContact } from '../components/media/ImgContact';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const Payment: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <>
      <Head>
        <title>Make a payment for your cannabis order - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast options for your weed orders at our shops!"
        />
        <meta
          property="og:title"
          content="Make a payment for your cannabis order - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast options for your weed orders at our shops!"
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-payment.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/payment" />
        <meta
          name="twitter:title"
          content="Make a payment for your cannabis order - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast options for your weed orders at our shops!"
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-payment.webp"
        />
        <meta name="twitter:url" content="https://green.gd/payment" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main" my={4}>
          <Box
            as="section"
            aria-label="Banner"
            position="relative"
            height="100%"
            width="100%"
            overflow="hidden"
            mb={10}
          >
            <motion.div
              style={{
                y,
                position: 'absolute',
                top: '-65%',
                left: 0,
                width: '100%',
                height: '200%',
                zIndex: -1,
              }}
            >
              <Image
                src="/media/green-ghost-best-degen-weed-shop-payment.webp"
                alt="Contact Our Weed Shop Team To Order"
                title="Contact Our Weed Shop Team To Order"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
              />
            </motion.div>
            <Box
              bg="rgba(0, 0, 0, 0.8)"
              p={2}
              display={'flex'}
              flexDir={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              h={'100%'}
              minHeight={{ base: 'auto', md: '400px' }}
            >
              <ImgContact />
              <HomeSectionTitle title="Payment" />
              <Text
                as="p"
                fontSize={{ base: '30px', md: '34px' }}
                lineHeight={{ base: '25px', md: '30px' }}
                fontFamily="vt323"
                mt={5}
                textAlign={'center'}
              >
                Pay easily with Scan QR, Crypto, Wise, or PayPal. Secure, fast
                options for your weed orders at our shops!
              </Text>
            </Box>
          </Box>
          <Box
            as="section"
            aria-label="Payment method List"
            mx="auto"
            px={4}
            mb={10}
          >
            <Tabs
              fontSize={{ base: 'sm', md: 'xl' }}
              fontFamily={'CubicFive12'}
              borderColor={'black'}
            >
              <TabList
                justifyContent="center"
                flexWrap="wrap"
                gap={2}
                color={'ghostVerse.green.base'}
              >
                <Tab
                  _selected={{
                    bg: 'ghostVerse.dark.lighter',
                    color: 'ghostVerse.green.base',
                    borderColor: 'ghostVerse.green.base',
                  }}
                >
                  Thai QR
                </Tab>
                <Tab
                  _selected={{
                    bg: 'ghostVerse.dark.lighter',
                    color: 'ghostVerse.green.base',
                    borderColor: 'ghostVerse.green.base',
                  }}
                >
                  Russian QR
                </Tab>
                <Tab
                  _selected={{
                    bg: 'ghostVerse.dark.lighter',
                    color: 'ghostVerse.green.base',
                    borderColor: 'ghostVerse.green.base',
                  }}
                >
                  Wise
                </Tab>
                <Tab
                  _selected={{
                    bg: 'ghostVerse.dark.lighter',
                    color: 'ghostVerse.green.base',
                    borderColor: 'ghostVerse.green.base',
                  }}
                >
                  Crypto
                </Tab>
                
                <Tab
                  _selected={{
                    bg: 'ghostVerse.dark.lighter',
                    color: 'ghostVerse.green.base',
                    borderColor: 'ghostVerse.green.base',
                  }}
                >
                  PayPal
                </Tab>
              </TabList>
              <TabPanels
                mt={4}
                fontSize="2xl"
                fontFamily="vt323"
                textAlign="center"
              >
                <TabPanel>
                  <Text>
                    Scan the QR code below to pay quickly and securely with your
                    mobile device.
                  </Text>
                  <Box mt={4} display="flex" justifyContent="center">
                    <Image
                      src="/media/thai-qr-payment-green-ghost.webp"
                      alt="Thai QR Payment"
                      width={200}
                      height={200}
                    />
                  </Box>
                  <Text>MRS. NATI DOUCHAMPS</Text>
                </TabPanel> 
                <TabPanel>
                  <Text>
                    Scan the QR code below to pay quickly and securely with your
                    mobile device.
                  </Text>
                  <Box mt={4} display="flex" justifyContent="center">
                    <Image
                      src="/media/russian-qr-payment-green-ghost.webp"
                      alt="Russian QR Payment"
                      width={200}
                      height={200}
                    />
                  </Box>
                </TabPanel> 
                <TabPanel>
                  <Text>
                    Use Wise for international payments with low fees and
                    real-time rates.
                  </Text>
                  <Box mt={4} display="flex" justifyContent="center">
                    <Image
                      src="/media/wise-qr-payment-green-ghost.webp"
                      alt="Wise QR Payment"
                      width={200}
                      height={200}
                    />
                  </Box>
                  <Text>@jeremyd240</Text>
                </TabPanel>
                <TabPanel>
                  <Text>
                    Pay with cryptocurrency (BTC, ETH, etc.) for fast, anonymous
                    transactions.
                  </Text>
                  <Box mt={4} display="flex" justifyContent="center">
                    Binance User ID: 81449832
                  </Box>
                </TabPanel>
               
                <TabPanel>
                  <Text>
                    Pay securely with PayPal—just click below to complete your
                    order!
                  </Text>
                  <Link
                    href="http://paypal.me/greenghostdegen"
                    passHref
                    title="http://paypal.me/greenghostdegen"
                  >
                    http://paypal.me/greenghostdegen
                  </Link>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default Payment;
