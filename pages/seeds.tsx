import type { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';
import Image from 'next/image';
import { WholesaleWeed } from '../components/WholesaleWeed';
import { ImgWholesale } from '../components/media/ImgWholesale';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const BuyWholesaleWeed: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);
  return (
    <>
      <Head>
        <title>Premium Cannabis Seeds Partners - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Shop high-quality cannabis seeds from trusted partners at Green Ghost. Find feminized & autoflower varieties with guaranteed germination. Start growing today with Green Ghost 🌿👻"
        />
        <meta
          property="og:title"
          content="Premium Cannabis Seeds Partners - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Shop high-quality cannabis seeds from trusted partners at Green Ghost. Find feminized & autoflower varieties with guaranteed germination. Start growing today with Green Ghost 🌿👻"
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-seeds.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/seeds" />
        <meta
          name="twitter:title"
          content="Premium Cannabis Seeds Partners - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Shop high-quality cannabis seeds from trusted partners at Green Ghost. Find feminized & autoflower varieties with guaranteed germination. Start growing today with Green Ghost 🌿👻"
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-seeds.webp"
        />
        <meta name="twitter:url" content="https://green.gd/seeds" />
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
                src="/media/green-ghost-best-degen-weed-shop-seeds.webp"
                alt="Premium Cannabis Seeds Partners"
                title="Premium Cannabis Seeds Partners"
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
              <ImgWholesale />
              <HomeSectionTitle title="Seeds" />
              <Text
                as="p"
                fontSize={{ base: '30px', md: '34px' }}
                lineHeight={{ base: '25px', md: '30px' }}
                fontFamily="vt323"
                mt={5}
                textAlign={'center'}
              >
                Explore our curated selection of premium cannabis seeds from the
                best seed banks worldwide, perfect for Phuket growers and
                beyond. Each partner guarantees top germination rates, discreet
                shipping, and expert growing guides to ensure success for
                beginners and pros alike. Start your cannabis journey with
                confidence !
              </Text>
            </Box>
          </Box>
          <Box
            as="div"
            display={'flex'}
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={'stretch'}
          >
            <Box
              as="div"
              w={{ base: '100%', md: '50%' }}
              ml={{ base: '0', md: '2' }}
              aria-labelledby="Best Cannabis Seed with ILGM"
              display={'flex'}
              mb={5}
              p={5}
              pt={0}
              h={'full'}
              flexWrap={'wrap'}
              alignItems={'stretch'}
              backgroundColor={'ghostVerse.green.base'}
              color={'black'}
            >
              <Box display={'flex'} w={'100%'} alignItems={'left'}>
                <Text
                  as={'h3'}
                  fontSize={{ base: 30, lg: 40 }}
                  lineHeight={1}
                  fontWeight={'bold'}
                  fontFamily={'vt323'}
                  mt={{ base: 5 }}
                  mb={{ base: 5 }}
                  textAlign={'left'}
                >
                  ILGM: Your Trusted Partner for Premium Cannabis Seeds in the
                  USA
                </Text>
              </Box>
              <Text
                as={'p'}
                fontSize={{ base: 20, lg: 26 }}
                lineHeight={1}
                fontFamily={'vt323'}
                w={{ base: '60%', md: '70%' }}
                mr={4}
                textAlign={'left'}
              >
                ILGM offers a curated selection of high-quality feminized and
                autoflower cannabis seeds, backed by a 100% germination
                guarantee. With popular strains like White Widow, Super Skunk,
                and Gorilla Glue, ILGM ensures beginner-friendly guides, free
                U.S. shipping, and unbeatable BOGO deals.
              </Text>
              <Link
                href="https://ilgm.com?aff=7877"
                title="Best Cannabis Seed Bank in the USA | ILGM"
                passHref
              >
                <Text
                  as="span"
                  display="inline-flex"
                  fontFamily="CubicFive12"
                  fontSize={{ base: 'md', md: 'lg' }}
                  px={6}
                  py={2}
                  mt={5}
                  mx="auto"
                  borderWidth={1}
                  borderColor="black"
                  bgColor="black"
                  color="ghostVerse.green.base"
                  _hover={{
                    bgColor: 'ghostVerse.green.base',
                    color: 'black',
                  }}
                >
                  {'Best Cannabis Seed Bank in the USA'}
                </Text>
              </Link>
            </Box>
            <Box
              as="section"
              aria-label="Seed bank image"
              height={'100%'}
              w={{ base: '100%', md: '50%' }}
              mb={{ base: '2', md: '0' }}
              overflow={'hidden'}
              position={'relative'}
              display={'flex'}
              justifyContent={'center'}
              backgroundColor="ghostVerse.green.base"
            >
              <Image
                src="/media/green-ghost-best-degen-weed-shop-seeds.webp"
                alt="Premium Cannabis Seeds Partners"
                title="Premium Cannabis Seeds Partners"
                width={2048}
                height={1366}
                sizes="100%"
                quality={75}
              />
            </Box>
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default BuyWholesaleWeed;
