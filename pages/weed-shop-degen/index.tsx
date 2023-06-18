import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/MenuWeedShop';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { Degen } from '../../components/Degen';

const GhostDegenWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Degen Stuff.</title>
        <meta
          name="description"
          content="Indulge in the ultimate cannabis experience with our degen menu. Explore a tantalizing selection of concentrated weed products, including hash, wax, and oil. Each item is carefully crafted to deliver potent and flavorful hits that will elevate your high to new heights. Discover the rich aromas, smooth textures, and powerful effects that our degen menu has to offer. Elevate your smoking sessions with our degen menu and unlock a world of intense and unforgettable sensations."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Degen Stuff."
        />
        <meta
          property="og:description"
          content="Indulge in the ultimate cannabis experience with our degen menu. Explore a tantalizing selection of concentrated weed products, including hash, wax, and oil. Each item is carefully crafted to deliver potent and flavorful hits that will elevate your high to new heights. Discover the rich aromas, smooth textures, and powerful effects that our degen menu has to offer. Elevate your smoking sessions with our degen menu and unlock a world of intense and unforgettable sensations."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/weed-shop-degen" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Degen Stuff."
        />
        <meta
          name="twitter:description"
          content="Indulge in the ultimate cannabis experience with our degen menu. Explore a tantalizing selection of concentrated weed products, including hash, wax, and oil. Each item is carefully crafted to deliver potent and flavorful hits that will elevate your high to new heights. Discover the rich aromas, smooth textures, and powerful effects that our degen menu has to offer. Elevate your smoking sessions with our degen menu and unlock a world of intense and unforgettable sensations."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-degen" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box display={'flex'} alignItems={'top'}>
          <Box w={'50px'} mr={4} mt={2}>
            <Image
              src="/media/green-ghost-degen-weed-shop-menu.png"
              width={256}
              height={151}
              alt="Green Ghost - Degen Weed Shop - Weed Menu."
            />
          </Box>
          <HomeSectionTitle title="Degen Weed Shop - Degen Stuff Menu." />
        </Box>
        <MenuWeedShop />
        <Degen />
      </MainLayout>
    </>
  );
};

export default GhostDegenWeedShop;
