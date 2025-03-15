import { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuFullList } from '../../components/shop/elements/MenuFullList';
import { Box, Text } from '@chakra-ui/react';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import Image from 'next/image';
import { ImgMenu } from '../../components/media/ImgMenu';

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

const MenuFull: NextPage = () => {
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
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          my={4}
          lineHeight={1}
        >
          <ImgMenu />
          <HomeSectionTitle title="Menu" />
        </Box>
        <Box as="main">
          <Text
            as="p"
            fontSize={{ base: '30px', md: '35px' }}
            lineHeight={{ base: '25px', md: '30px' }}
            fontFamily="vt323"
            mb={10}
            textAlign={'center'}
          >
            At Green Ghost, we&apos;re passionate about providing our customers
            with the best cannabis products available. Our menu is constantly
            updated with new and exciting strains, as well as a range of CBD and
            THC products to suit every need and preference.
          </Text>
          <MenuFullList />
          <Box>
            <Image
              src="/media/green-ghost-best-degen-weed-shop-menu.webp"
              alt="Weed & Cannabis Products Menu"
              width={2048}
              height={1366}
              sizes="100%"
              quality={75}
            />
          </Box>
        </Box>
      </MainLayout>
    </>
  );
};

export default MenuFull;
