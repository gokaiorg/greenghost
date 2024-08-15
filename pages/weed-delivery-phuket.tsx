import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MainLayout } from '../components/MainLayout';
import { HeaderMenu } from '../components/HeaderMenu';
import { HeaderMenuButtons } from '../components/HeaderMenuButtons';
import { HomeSectionTitle } from '../components/HomeSectionTitle';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { WeedDeliveryFeature } from '../components/WeedDeliveryFeature';
import { ImgDelivery } from '../components/media/ImgDelivery';
import { BuyOnline } from '../components/BuyOnline';
import { HomeTopInfos } from '../components/HomeTopInfos';

const WeedDelivery: NextPage = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };

  const SectionLink = ({
    href,
    title,
    heading,
    text,
    imgSrc,
    imgAlt,
    imgSizes,
    number,
  }: {
    href: string;
    title: string;
    heading: string;
    text: string;
    imgSrc: string;
    imgAlt: string;
    imgSizes: string;
    number: string;
  }) => (
    <Box
      position="relative"
      width={{ base: '100%', md: '50%' }}
      mb={2}
      mx={{ base: '0', md: '2' }}
    >
      <Link href={href} title={title} passHref>
        <Box
          as="span"
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter="blur(3px)"
          textAlign="center"
          p={4}
          position="absolute"
          top={0}
          bottom={0}
          left={0}
          right={0}
          transition="all .3s"
          _hover={{
            color: 'ghostVerse.green.base',
            bgColor: 'ghostVerse.dark.lighter',
          }}
        >
          <Text
            as="h3"
            fontSize={{ base: 'lg', lg: '2xl' }}
            fontFamily="CubicFive12"
            color="ghostVerse.green.base"
          >
            <Box fontSize={{ base: '3xl', lg: '5xl' }}>{number}</Box>
            {heading}
          </Text>
          <Text
            as="p"
            fontSize={{ base: 24, xl: 50 }}
            lineHeight={1}
            fontWeight="bold"
            fontFamily="vt323"
            textAlign="center"
          >
            {text}
          </Text>
        </Box>
      </Link>
      <Box width="100%">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={2048}
          height={1366}
          sizes={imgSizes}
          quality={75}
        />
      </Box>
    </Box>
  );

  return (
    <>
      <Head>
        <title>Green Ghost 🌿👻 Weed Delivery Phuket</title>
        <meta
          name="description"
          content="Discover Green Ghost, the premier weed delivery service in Phuket. Buy high-quality weed products and enjoy convenient, reliable delivery right to your doorstep."
        />
        <meta
          property="og:title"
          content="Green Ghost 🌿👻 Weed Delivery Phuket"
        />
        <meta
          property="og:description"
          content="Discover Green Ghost, the premier weed delivery service in Phuket."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-weed-shop-delivery-menu.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/weed-delivery-phuket"
        />
        <meta
          name="twitter:title"
          content="Green Ghost 🌿👻 Weed Delivery Phuket"
        />
        <meta
          name="twitter:description"
          content="Discover Green Ghost, the premier weed delivery service in Phuket."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-weed-shop-delivery-menu.webp"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/weed-delivery-phuket"
        />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box
          cursor="pointer"
          color="ghostVerse.green.base"
          onClick={handleBack}
          title={'BACK'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#13DE00"
            width="30px"
            height="30px"
          >
            <path
              fillRule="evenodd"
              d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
              clipRule="evenodd"
            />
          </svg>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          my={4}
          lineHeight={1}
        >
          <ImgDelivery />
          <HomeSectionTitle title="Weed Delivery Phuket" />
        </Box>
        <Text
          as="p"
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontWeight="bold"
          fontFamily="vt323"
          mb={{ base: 4 }}
          textAlign="center"
        >
          Savor the best strains and products without leaving your home!
        </Text>
        <Text
          as="h2"
          textAlign="center"
          fontSize={{ base: 20 }}
          lineHeight={1}
          fontFamily="CubicFive12"
          mb={4}
        >
          To enjoy our weed delivery service in Phuket
        </Text>
        <Box
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems="stretch"
          mb={4}
        >
          <SectionLink
            href="/weed-shop"
            title="Weed Shop"
            heading="Explore Our Premium Cannabis Selection"
            text="Whether you're looking for flowers, edibles, concentrates or gadgets, we have it for you."
            imgSrc="/media/green-ghost-weed-shop-delivery-menu.webp"
            imgAlt="Green Ghost - Weed delivery Phuket - Weed Menu"
            imgSizes="(max-width: 1024px) 420px, 602px"
            number="1"
          />
          <SectionLink
            href="/contact-green-ghost"
            title="Contact Green Ghost"
            heading="Contact And Provide Delivery Details"
            text="Contact us and share your delivery information to ensure quick and seamless service."
            imgSrc="/media/green-ghost-degen-weed-shop-weed-delivery-phuket-contact-us.webp"
            imgAlt="Green Ghost - Buy weed on delivery Phuket - Contact online"
            imgSizes="(max-width: 1024px) 420px, 602px"
            number="2"
          />
        </Box>
        <WeedDeliveryFeature />
        <Text
          as="p"
          fontSize={{ base: 30, lg: 40 }}
          lineHeight={1}
          fontWeight="bold"
          fontFamily="vt323"
          mb={{ base: 10 }}
          textAlign="center"
        >
          {
            "Explore our premium weed selection, featuring high-quality strains curated for the best experience. Whether you're in Phuket or anywhere across Thailand, including Rawai, Karon, Chalong, and Patong, we offer fast and reliable weed delivery. Find the perfect strain to suit your needs and enjoy discreet, door-to-door service. Our collection includes a variety of Indica, Sativa, and Hybrid options, all carefully sourced from trusted growers. Experience the convenience of getting top-shelf weed delivered directly to your doorstep."
          }
        </Text>
        <BuyOnline />
        <HomeTopInfos />
      </MainLayout>
    </>
  );
};

export default WeedDelivery;
