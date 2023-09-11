import type { NextPage } from 'next';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../../components/HomeSectionTitle';
import Head from 'next/head';
import { MenuWeedShop } from '../../components/MenuWeedShop';
import { Gadget } from '../../components/Gadget';

const WeedShopGadgets: NextPage = () => {
  return (
    <>
      <Head>
        <title>Green Ghost - Degen Weed Shop - Gadgets Menu</title>
        <meta
          name="description"
          content="Elevate your smoking experience with our premium selection of weed gadgets. From high-quality grinders to sleek bongs and rolling papers, we offer everything you need to enhance your sessions. Discover top-notch accessories designed for convenience, durability, and optimal performance. Whether you're a casual smoker or a seasoned connoisseur, our weed gadgets are crafted to meet your needs and elevate your enjoyment. Explore our collection and unlock a new level of satisfaction in your smoking rituals."
        />
        <meta
          property="og:title"
          content="Green Ghost - Degen Weed Shop - Gadgets Menu"
        />
        <meta
          property="og:description"
          content="Elevate your smoking experience with our premium selection of weed gadgets. From high-quality grinders to sleek bongs and rolling papers, we offer everything you need to enhance your sessions. Discover top-notch accessories designed for convenience, durability, and optimal performance. Whether you're a casual smoker or a seasoned connoisseur, our weed gadgets are crafted to meet your needs and elevate your enjoyment. Explore our collection and unlock a new level of satisfaction in your smoking rituals."
        />
        <meta
          property="og:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta property="og:image:width" content="2400" />
        <meta property="og:image:height" content="1260" />
        <meta property="og:url" content="https://green.gd/weed-shop-gadgets" />
        <meta
          name="twitter:title"
          content="Green Ghost - Degen Weed Shop - Gadgets Menu"
        />
        <meta
          name="twitter:description"
          content="Elevate your smoking experience with our premium selection of weed gadgets. From high-quality grinders to sleek bongs and rolling papers, we offer everything you need to enhance your sessions. Discover top-notch accessories designed for convenience, durability, and optimal performance. Whether you're a casual smoker or a seasoned connoisseur, our weed gadgets are crafted to meet your needs and elevate your enjoyment. Explore our collection and unlock a new level of satisfaction in your smoking rituals."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/green-ghost-degen-weed-shop.png"
        />
        <meta name="twitter:url" content="https://green.gd/weed-shop-gadgets" />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <MenuWeedShop />
        <HomeSectionTitle title="Gadgets Menu" />
        <Gadget />
      </MainLayout>
    </>
  );
};

export default WeedShopGadgets;
