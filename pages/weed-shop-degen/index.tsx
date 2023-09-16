import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/MenuWeedShop';
import { Degen } from '../../components/Degen';

const GhostDegenWeedShop: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Degen Menu</title>
        <meta
          name="description"
          content="Indulge in the ultimate cannabis experience with our degen menu. Explore a tantalizing selection of concentrated weed products, including hash, wax, and oil. Each item is carefully crafted to deliver potent and flavorful hits that will elevate your high to new heights. Discover the rich aromas, smooth textures, and powerful effects that our degen menu has to offer. Elevate your smoking sessions with our degen menu and unlock a world of intense and unforgettable sensations."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Degen Menu"
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
          content="Green Ghost - Degen Weed Shop - Degen Menu"
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
        <MenuWeedShop />
        <Degen />
      </MainLayout>
    </>
  );
};

export default GhostDegenWeedShop;
