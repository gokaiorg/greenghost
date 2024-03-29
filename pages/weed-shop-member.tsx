import type { NextPage } from 'next';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import Head from 'next/head';
import { MenuWeedShop } from '../components/shop/elements/MenuWeedShop';
import { BudMember } from '../components/shop/BudMember';

const WeedShopMember: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Degen Weed Shop - Member Only Menu</title>
        <meta
          name="description"
          content="Join our exclusive member shop and gain access to a wide selection of premium cannabis products at unbeatable prices. Our members enjoy special discounts and promotions on top-quality buds, pre-rolls, edibles, and more. We also offer exclusive access to limited edition strains and products, as well as personalized recommendations from our knowledgeable staff. Join us now and experience the best of the cannabis world with our exclusive member shop."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Member Only Menu"
        />
        <meta
          property="og:description"
          content="Join our exclusive member shop and gain access to a wide selection of premium cannabis products at unbeatable prices. Our members enjoy special discounts and promotions on top-quality buds, pre-rolls, edibles, and more. We also offer exclusive access to limited edition strains and products, as well as personalized recommendations from our knowledgeable staff. Join us now and experience the best of the cannabis world with our exclusive member shop."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/weed-shop-member" />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Degen Weed Shop - Member Only Menu"
        />
        <meta
          name="twitter:description"
          content="Join our exclusive member shop and gain access to a wide selection of premium cannabis products at unbeatable prices. Our members enjoy special discounts and promotions on top-quality buds, pre-rolls, edibles, and more. We also offer exclusive access to limited edition strains and products, as well as personalized recommendations from our knowledgeable staff. Join us now and experience the best of the cannabis world with our exclusive member shop."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-member" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuWeedShop />
        <BudMember />
      </MainLayout>
    </>
  );
};

export default WeedShopMember;
