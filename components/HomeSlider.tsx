import { Box, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';

export const HomeSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
      }}
      loop
      autoplay={{
        delay: 4000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
    >
      <SwiperSlide>
        <Image
          src="/green-ghost-weed-shop-phuket.png"
          width={1260}
          height={600}
          alt="ok"
          layout="responsive"
        />
        <Box
          position="absolute"
          top="0"
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontWeight="black"
          color="white"
          fontFamily="vt323"
          px={10}
          bgColor="ghostVerse.dark.ultralight"
          backdropFilter="blur(3px)"
        >
          <Text
            as="h2"
            fontSize="6xl"
            marginBottom={4}
            fontFamily="CubicFive10"
          >
            Welcome to Green Ghost
          </Text>
          <Text as="p" fontSize="5xl">
            Highest quality organic cannabis, hand-selected from the best
            growers in Thailand.
          </Text>
          <Link href="/about-green-ghost">
            <Text
              display="inline-flex"
              color="white"
              borderColor="white"
              fontSize="4xl"
              borderWidth={1}
              bgColor="transparent"
              backdropFilter="blur(3px)"
              p={6}
              mt={10}
              mx="auto"
              fontFamily="CubicFive10"
              _hover={{
                borderColor: 'ghostVerse.green.base',
                color: 'ghostVerse.green.base',
              }}
            >
              Discover
            </Text>
          </Link>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/green-ghost-weed-shop-buds.png"
          width={1260}
          height={600}
          alt="ok"
          layout="responsive"
        />
        <Box
          position="absolute"
          top="0"
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontWeight="black"
          color="white"
          fontFamily="vt323"
          px={10}
          bgColor="ghostVerse.dark.ultralight"
          backdropFilter="blur(3px)"
        >
          <Text
            as="h2"
            fontSize="6xl"
            marginBottom={4}
            fontFamily="CubicFive10"
          >
            Experience a New High
          </Text>
          <Text as="p" fontSize="5xl">
            Try our wide range of cannabis products and discover your new
            favorite strain and elevate your experience today.
          </Text>

          <Link href="/weed-shop">
            <Text
              display="inline-flex"
              color="white"
              borderColor="white"
              fontSize="4xl"
              borderWidth={1}
              bgColor="transparent"
              backdropFilter="blur(3px)"
              p={6}
              mt={10}
              mx="auto"
              fontFamily="CubicFive10"
              _hover={{
                borderColor: 'ghostVerse.green.base',
                color: 'ghostVerse.green.base',
              }}
            >
              Menu
            </Text>
          </Link>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/green-ghost-weed-shop-crypto-cashback.png"
          width={1260}
          height={600}
          alt="ok"
          layout="responsive"
        />
        <Box
          position="absolute"
          top="0"
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontWeight="black"
          color="white"
          fontFamily="vt323"
          px={10}
          bgColor="ghostVerse.dark.ultralight"
          backdropFilter="blur(3px)"
        >
          <Text
            as="h2"
            fontSize="6xl"
            marginBottom={4}
            fontFamily="CubicFive10"
          >
            Relax and earn
          </Text>
          <Text as="p" fontSize="5xl">
            Visit our crypto weed shop and explore a new world of possibilities
            with blockchain and cannabis.
          </Text>
          <Link href="/crypto-weed-shop-relax-and-earn">
            <Text
              display="inline-flex"
              color="white"
              borderColor="white"
              fontSize="4xl"
              borderWidth={1}
              bgColor="transparent"
              backdropFilter="blur(3px)"
              p={6}
              mt={10}
              mx="auto"
              fontFamily="CubicFive10"
              _hover={{
                borderColor: 'ghostVerse.green.base',
                color: 'ghostVerse.green.base',
              }}
            >
              Rewards
            </Text>
          </Link>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/green-ghost-weed-shop-pixel-art.png"
          width={1260}
          height={600}
          alt="ok"
          layout="responsive"
        />
        <Box
          position="absolute"
          top="0"
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontWeight="black"
          color="white"
          fontFamily="vt323"
          px={10}
          bgColor="ghostVerse.dark.ultralight"
          backdropFilter="blur(3px)"
        >
          <Text
            as="h2"
            fontSize="6xl"
            marginBottom={4}
            fontFamily="CubicFive10"
          >
            GhostVerse
          </Text>
          <Text as="p" fontSize="5xl">
            Join the Ghost Clan and earn 31% on every order, get cashback and
            get exclusive access to our latest strains. #MxGhosts
          </Text>
          <Link href="https://ghostverse.org/mxghosts">
            <Text
              display="inline-flex"
              color="white"
              borderColor="white"
              fontSize="4xl"
              borderWidth={1}
              bgColor="transparent"
              backdropFilter="blur(3px)"
              p={6}
              mt={10}
              mx="auto"
              fontFamily="CubicFive10"
              _hover={{
                borderColor: 'ghostVerse.green.base',
                color: 'ghostVerse.green.base',
              }}
            >
              Buy NFT
            </Text>
          </Link>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/green-ghost-weed-shop-delivery.png"
          width={1260}
          height={600}
          alt="ok"
          layout="responsive"
        />
        <Box
          position="absolute"
          top="0"
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          fontWeight="black"
          color="white"
          fontFamily="vt323"
          px={10}
          bgColor="ghostVerse.dark.ultralight"
          backdropFilter="blur(3px)"
        >
          <Text
            as="h2"
            fontSize="6xl"
            marginBottom={4}
            fontFamily="CubicFive10"
          >
            Weed Delivery
          </Text>
          <Text as="p" fontSize="5xl">
            No need to leave the house for your favorite buds, your choice of
            strains is delivered right to your doorstep.
          </Text>
          <Link href="/contact-us-buy-weed-online">
            <Text
              display="inline-flex"
              color="white"
              borderColor="white"
              fontSize="4xl"
              borderWidth={1}
              bgColor="transparent"
              backdropFilter="blur(3px)"
              p={6}
              mt={10}
              mx="auto"
              fontFamily="CubicFive10"
              _hover={{
                borderColor: 'ghostVerse.green.base',
                color: 'ghostVerse.green.base',
              }}
            >
              Contact Us
            </Text>
          </Link>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
