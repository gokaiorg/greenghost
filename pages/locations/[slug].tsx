import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getShops, Shop } from '../../config/shops';
import { MainLayout } from '../../components/MainLayout';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderMenuButtons } from '../../components/HeaderMenuButtons';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { IconsReview } from '../../components/media/IconsReview';
import { IconPin } from '../../components/media/IconPin';
import { Review } from '../../components/Review';
import { IconShop } from '../../components/media/IconShop';
import { IconClock } from '../../components/media/IconClock';
import { HomeFeature } from '../../components/HomeFeatures';

interface ShopPageProps {
  shop: Shop;
}

export default function ShopPage({ shop }: ShopPageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Head>
        <title>{shop.name} - Green Ghost 🌿👻</title>
        <meta name="description" content={shop.descSeo} />
        <meta property="og:title" content={`${shop.name} - Green Ghost 🌿👻`} />
        <meta property="og:description" content={shop.descSeo} />
        <meta
          property="og:image"
          content={`https://green.gd/media/${shop.imagesOg}`}
        />
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1366" />
        <meta
          property="og:url"
          content={`https://green.gd/locations/${shop.slug}`}
        />
        <meta
          name="twitter:title"
          content={`${shop.name}  - Green Ghost 🌿👻`}
        />
        <meta name="twitter:description" content={shop.descSeo} />
        <meta
          name="twitter:image"
          content={`https://green.gd/media/${shop.imagesOg}`}
        />
        <meta
          name="twitter:url"
          content={`https://green.gd/locations/${shop.slug}`}
        />
        <meta property="og:video" content={shop.videoLink} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta property="og:video:secure_url" content={shop.videoLink} />
      </Head>
      <MainLayout>
        <HeaderMenu>
          <HeaderMenuButtons enabled={['auth']} />
        </HeaderMenu>
        <Box as="main">
          <Box
            as="span"
            cursor="pointer"
            color="ghostVerse.green.base"
            onClick={handleBack}
            title="BACK"
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
            as="h1"
            fontSize={{ base: 24, lg: 40 }}
            lineHeight={1}
            maxW={{ base: '100%', md: '80%', lg: '45%' }}
            m={'auto'}
            color="ghostVerse.green.base"
            fontFamily="CubicFive12"
            my={{ base: 4 }}
            textAlign="center"
          >
            {shop.name}
          </Box>
          <Box
            display={{
              base: 'block',
              md: 'flex',
            }}
            flexWrap="wrap"
            gap={4}
          >
            <Box flex="1" w={{ base: '100%', md: '50%' }} mb={4}>
              <Box
                as="section"
                aria-labelledby={`${shop.name} Google Map`}
                width="100%"
              >
                <Text
                  as="h2"
                  fontSize={{ base: 18 }}
                  lineHeight={1}
                  fontFamily="CubicFive12"
                  mb={2}
                  textAlign="left"
                >
                  Location
                </Text>
                <Box
                  as="div"
                  position="relative"
                  pb="56.25%"
                  overflow="hidden"
                  width="100%"
                  mb={2}
                >
                  <iframe
                    src={shop.mapLink}
                    title={`${shop.name} Google Map`}
                    style={{
                      border: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
                <Text
                  as="h3"
                  fontSize={{ base: 16 }}
                  lineHeight={1}
                  fontFamily="CubicFive12"
                  mb={2}
                  textAlign="left"
                >
                  Address
                </Text>
                <Link
                  href={shop.addresLink}
                  title={`${shop.name} Google Map`}
                  passHref
                >
                  <Box
                    display="flex"
                    mt={2}
                    fontSize="2xl"
                    lineHeight={1}
                    fontFamily="vt323"
                    _hover={{ color: 'ghostVerse.green.base' }}
                  >
                    <IconPin />
                    <Text as="h4" ml={2}>
                      {shop.address}
                    </Text>
                  </Box>
                </Link>
                <Link
                  href={shop.reviewLink}
                  title={`${shop.name} Add a Google Map Review`}
                >
                  <IconsReview />
                </Link>
                <Box
                  as="ul"
                  fontFamily="vt323"
                  fontSize="2xl"
                  mb={4}
                  lineHeight={1}
                  p={0}
                >
                  <Box
                    as="li"
                    display="flex"
                    alignItems="center"
                    aria-label="Accommodations"
                  >
                    <IconShop />
                    <Box as="span" ml={2} mb={1}>
                      {shop.details}
                    </Box>
                  </Box>
                  <Box
                    as="li"
                    display="flex"
                    alignItems="center"
                    aria-label="Hours"
                  >
                    <IconClock />
                    <Box as="span" ml={2} mb={1}>
                      {shop.hours}
                    </Box>
                  </Box>
                </Box>
                <Text
                  as="h3"
                  fontSize={{ base: 16 }}
                  lineHeight={1}
                  fontFamily="CubicFive12"
                  textAlign="left"
                >
                  Phone
                </Text>
                <Text
                  as="div"
                  fontSize="xl"
                  color="ghostVerse.green.base"
                  fontFamily="CubicFive12"
                  mb={2}
                >
                  <Link
                    title={`Call: +66936459898`}
                    href="tel:+66936459898"
                    passHref
                  >
                    +66936459898
                  </Link>
                </Text>
                <Text
                  as="h3"
                  fontSize={{ base: 16 }}
                  lineHeight={1}
                  fontFamily="CubicFive12"
                  mb={2}
                  textAlign="left"
                >
                  Social
                </Text>
                <Box
                  as="ul"
                  aria-label={`${shop.name} Social Links`}
                  listStyleType="none"
                  display="flex"
                  flexWrap="wrap"
                  mt={2}
                >
                  {shop.socialLinks.map(
                    (social) =>
                      social.link && (
                        <Box
                          as="li"
                          aria-label={`${shop.name} ${social.label} Link`}
                          listStyleType="none"
                          fontFamily="vt323"
                          mr={2}
                          key={social.label}
                          px={1}
                          color={'black'}
                          bgColor={'ghostVerse.green.base'}
                          _hover={{
                            color: 'ghostVerse.grey.lighter',
                            backgroundColor: 'ghostVerse.dark.lighter',
                          }}
                        >
                          <Link
                            title={`${shop.name} on ${social.label}`}
                            href={social.link}
                            passHref
                          >
                            {social.label}
                          </Link>
                        </Box>
                      )
                  )}
                </Box>
              </Box>
              <Box
                as="section"
                aria-labelledby={`${shop.name} Images Gallery`}
                mt={4}
              >
                <Text
                  as="h2"
                  fontSize={{ base: 18 }}
                  lineHeight={1}
                  fontFamily="CubicFive12"
                  mb={2}
                  textAlign="left"
                >
                  Photos
                </Text>
                <Box display="flex" flexWrap="wrap" mt={4}>
                  {shop.images.map((image, index) => (
                    <Box key={index} w="33.33333%">
                      <Image
                        src={image}
                        width={250}
                        height={250}
                        alt={`Green Ghost 🌿👻 ${shop.name}`}
                        title={`Green Ghost 🌿👻 ${shop.name}`}
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 250px"
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box flex="1" w={{ base: '100%', md: '50%' }}>
              <Text
                as="h2"
                fontSize={{ base: 18 }}
                lineHeight={1}
                fontFamily="CubicFive12"
                mb={2}
                textAlign="left"
              >
                Video
              </Text>
              <Box
                as="section"
                aria-labelledby={`${shop.name} Video`}
                position="relative"
                paddingTop="56.25%"
                overflow="hidden"
              >
                <iframe
                  src={shop.videoLink}
                  title={`${shop.name} Video`}
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
              <Box
                bgColor="ghostVerse.dark.lighter"
                as="p"
                fontSize={{ base: 26 }}
                lineHeight={1}
                fontFamily="vt323"
                w={{ base: '100%' }}
                p={4}
              >
                {shop.description}
              </Box>
            </Box>
          </Box>
          <Link
            href={'/locations'}
            passHref
            title="Best Weed shops near me in Phuket"
          >
            <Text
              as="span"
              display={'inline-flex'}
              w={'auto'}
              fontSize={{ base: 'xl', md: '4xl' }}
              lineHeight={1}
              borderWidth={1}
              px={{ base: 4, md: 6 }}
              pb={{ base: 2, md: 2 }}
              mx={'auto'}
              mb={4}
              fontFamily={'vt323'}
              color={'black'}
              borderColor={'ghostVerse.green.base'}
              backgroundColor={'ghostVerse.green.base'}
              _hover={{
                borderColor: 'ghostVerse.green.base',
                bgColor: 'black',
                color: 'ghostVerse.green.base',
              }}
            >
              Find a store near you
            </Text>
          </Link>
          <Review />
          <HomeFeature />
          <Box>
            <Image
              src={`/media/${shop.imagesOg}`}
              alt={`Green Ghost 🌿👻 ${shop.name}`}
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
}

export const getStaticPaths: GetStaticPaths = async () => {
  const shops = getShops();
  const paths = shops.map((shop) => ({ params: { slug: shop.slug } }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ShopPageProps> = async ({
  params,
}) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const shops = getShops();
  const shop = shops.find((p) => p.slug === params?.slug);

  if (!shop) {
    return { notFound: true };
  }

  return {
    props: { shop },
    revalidate: 60 * 60, // 1 hour
  };
};
