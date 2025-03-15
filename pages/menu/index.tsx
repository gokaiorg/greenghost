import { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuFullList } from '../../components/shop/elements/MenuFullList';
import { Box, Text } from '@chakra-ui/react';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import { ImgMenu } from '../../components/media/ImgMenu';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const MenuFull: NextPage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <>
      <Head>
        <title>Weed & Cannabis Products Menu - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Explore our Thailand cannabis menu: buds, edibles, concentrates, CBD & THC. Buy weed online with Green Ghost."
        />
        <meta
          property="og:title"
          content="Weed & Cannabis Products Menu - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Explore our Thailand cannabis menu: buds, edibles, concentrates, CBD & THC. Buy weed online with Green Ghost."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-menu.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta property="og:url" content="https://green.gd/menu" />
        <meta
          name="twitter:title"
          content="Weed & Cannabis Products Menu - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Explore our Thailand cannabis menu: buds, edibles, concentrates, CBD & THC. Buy weed online with Green Ghost."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-best-degen-weed-shop-menu.webp"
        />
        <meta name="twitter:url" content="https://green.gd/menu" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main">
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
                src="/media/green-ghost-best-degen-weed-shop-menu.webp"
                alt="Weed & Cannabis Products Menu"
                title="Weed & Cannabis Products Menu"
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
              <ImgMenu />
              <HomeSectionTitle title="Menu" />
              <Text
                as="p"
                fontSize={{ base: '30px', md: '34px' }}
                lineHeight={{ base: '25px', md: '30px' }}
                fontFamily="vt323"
                mt={5}
                textAlign={'center'}
              >
                At Green Ghost, we&apos;re passionate about providing our
                customers with the best cannabis products available. Our menu is
                constantly updated with new and exciting strains, as well as a
                range of CBD and THC products to suit every need and preference.
              </Text>
            </Box>
          </Box>
          <MenuFullList />
        </Box>
      </MainLayout>
    </>
  );
};

export default MenuFull;
