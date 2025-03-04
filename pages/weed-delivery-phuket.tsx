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
          bgColor="rgba(0, 0, 0, 0.8)"
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
          title={imgAlt}
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
        <title>Best Weed Delivery Service in Phuket - Green Ghost 🌿👻</title>
        <meta
          name="description"
          content="Green Ghost offers the best weed delivery in Phuket Thailand, bringing premium cannabis straight to your doorstep with fast, reliable service. Order now for top-quality buds."
        />
        <meta
          property="og:title"
          content="Best Weed Delivery Service in Phuket - Green Ghost 🌿👻"
        />
        <meta
          property="og:description"
          content="Green Ghost offers the best weed delivery in Phuket Thailand, bringing premium cannabis straight to your doorstep with fast, reliable service. Order now for top-quality buds."
        />
        <meta
          property="og:image"
          content="https://green.gd/media/green-ghost-weed-shop-delivery.webp"
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content="https://green.gd/weed-delivery-phuket"
        />
        <meta
          name="twitter:title"
          content="Best Weed Delivery Service in Phuket - Green Ghost 🌿👻"
        />
        <meta
          name="twitter:description"
          content="Green Ghost offers the best weed delivery in Phuket Thailand, bringing premium cannabis straight to your doorstep with fast, reliable service. Order now for top-quality buds."
        />
        <meta
          name="twitter:image"
          content="https://green.gd/media/green-ghost-weed-shop-delivery.webp"
        />
        <meta
          name="twitter:url"
          content="https://green.gd/weed-delivery-phuket"
        />
        <meta
          property="og:video"
          content="https://www.youtube.com/shorts/7FrEbdNYbI0"
        />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1080" />
        <meta property="og:video:height" content="1920" />
        <meta
          property="og:video:secure_url"
          content="https://www.youtube.com/shorts/7FrEbdNYbI0"
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
            title="Weed Shop Premium Cannabis Buds Menu"
            heading="Explore Our Premium Cannabis Selection"
            text="Whether you're looking for flowers, edibles, concentrates or gadgets, we have it for you."
            imgSrc="/media/green-ghost-degen-weed-shop-buds-menu.webp"
            imgAlt="Weed Shop Premium Cannabis Buds Menu"
            imgSizes="(max-width: 1024px) 420px, 602px"
            number="1"
          />
          <SectionLink
            href="/contact"
            title="Contact Our Weed Shop Team To Order"
            heading="Contact And Provide Delivery Details"
            text="Contact us and share your delivery information to ensure quick and seamless service."
            imgSrc="/media/green-ghost-degen-weed-shop-contact-us.webp"
            imgAlt="Contact Our Weed Shop Team To Order"
            imgSizes="(max-width: 1024px) 420px, 602px"
            number="2"
          />
        </Box>
        <WeedDeliveryFeature />
        <Box
          as="section"
          aria-labelledby="The best weed delivery service in Phuket"
          display={'flex'}
          flexDirection={{ base: 'column', md: 'row' }}
          mb={5}
        >
          <Box
            width={{ base: '100%', md: '200px' }}
            mx="auto"
            position="relative"
            overflow="hidden"
            mb={5}
            // Ensure there's a minimum height to prevent collapse
            minHeight={{ base: '600px', md: '200px' }}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              paddingTop="177.78%" // 9:16 aspect ratio
            >
              <iframe
                src="https://www.youtube.com/embed/7FrEbdNYbI0"
                title="Weed delivery in Phuket Thailand"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              ></iframe>
            </Box>
          </Box>
          <Text
            as="p"
            fontSize={{ base: 30, lg: 40 }}
            lineHeight={1}
            fontWeight="bold"
            fontFamily="vt323"
            textAlign={{ base: 'center', md: 'left' }}
            marginLeft={{ base: '0', md: '4' }}
            flex={'1'}
          >
            {
              "Explore our premium weed selection, featuring high-quality strains curated for the best experience. Whether you're in Phuket or anywhere across Thailand, including Rawai, Karon, Chalong, and Patong, we offer fast and reliable weed delivery. Find the perfect strain to suit your needs and enjoy discreet, door-to-door service. Our collection includes a variety of Indica, Sativa, and Hybrid options, all carefully sourced from trusted growers. Experience the convenience of getting top-shelf weed delivered directly to your doorstep."
            }
          </Text>
        </Box>
        <BuyOnline />
        <HomeTopInfos />
        <Box w={{ base: '100%' }}>
          <Image
            src="/media/green-ghost-weed-shop-delivery.webp"
            width={2048}
            height={1366}
            alt="Best Weed Delivery Service in Phuket - Green Ghost 🌿👻"
            title="Best Weed Delivery Service in Phuket - Green Ghost 🌿👻"
            sizes="100%"
            quality={75}
          />
        </Box>
      </MainLayout>
    </>
  );
};

export default WeedDelivery;
