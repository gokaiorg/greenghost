import { Box, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCreative } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';

export const HomeSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 8000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      effect={'creative'}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[EffectCreative]}
    >
      <SwiperSlide>
        <Box position={'relative'} w="100%" h={{ base: '600px' }}>
          <Image
            src="/media/green-ghost-weed-shop-phuket.webp"
            fill
            style={{ objectFit: 'cover' }}
            alt={'Green Ghost Weed Shop Phuket'}
            priority={true}
          />
        </Box>
        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign={'center'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          fontWeight={'black'}
          color={'white'}
          fontFamily={'vt323'}
          px={10}
          bgColor={'ghostVerse.dark.ultralight'}
          backdropFilter={'blur(3px)'}
        >
          <Text
            as={'h1'}
            fontSize={{ base: '3xl', md: '6xl' }}
            marginBottom={4}
            fontFamily={'CubicFive12'}
            color={'ghostVerse.green.base'}
          >
            DEGEN WEED SHOP
          </Text>
          <Text as={'p'} fontSize={{ base: '3xl', md: '4xl' }}>
            Highest quality organic cannabis, hand-selected from the best
            growers in Thailand.
          </Text>
          <Link href="/about-green-ghost" title={'About Green Ghost'} passHref>
            <Text
              display={'inline-flex'}
              color={'white'}
              borderColor={'white'}
              fontSize={{ base: '3xl', md: '4xl' }}
              borderWidth={1}
              bgColor="transparent"
              backdropFilter={'blur(3px)'}
              p={6}
              mt={10}
              mx={'auto'}
              fontFamily={'CubicFive10'}
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
        <Box position={'relative'} w="100%" h={{ base: '600px' }}>
          <Image
            src="/media/green-ghost-weed-shop-buds.webp"
            fill
            style={{ objectFit: 'cover' }}
            alt="Green Ghost Weed Shop Buds Menu"
          />
        </Box>
        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign={'center'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          fontWeight={'black'}
          color={'white'}
          fontFamily={'vt323'}
          px={10}
          bgColor={'ghostVerse.dark.ultralight'}
          backdropFilter={'blur(3px)'}
        >
          <Text
            as={'h2'}
            fontSize={{ base: '3xl', md: '6xl' }}
            marginBottom={4}
            fontFamily={'CubicFive12'}
          >
            Experience a New High
          </Text>
          <Text as={'p'} fontSize={{ base: '3xl', md: '4xl' }}>
            Try our wide range of cannabis products and discover your new
            favorite strain and elevate your experience today.
          </Text>

          <Link href={'/weed-shop'} title={'Weed Shop'} passHref>
            <Text
              display={'inline-flex'}
              color={'white'}
              borderColor={'white'}
              fontSize={{ base: '3xl', md: '4xl' }}
              borderWidth={1}
              bgColor="transparent"
              backdropFilter={'blur(3px)'}
              p={6}
              mt={10}
              mx={'auto'}
              fontFamily={'CubicFive10'}
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
        <Box position={'relative'} w="100%" h={{ base: '600px' }}>
          <Image
            src="/media/green-ghost-weed-shop-delivery.webp"
            fill
            style={{ objectFit: 'cover' }}
            alt="Green Ghost Weed Shop Delivery"
          />
        </Box>
        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign={'center'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          fontWeight={'black'}
          color={'white'}
          fontFamily={'vt323'}
          px={10}
          bgColor={'ghostVerse.dark.ultralight'}
          backdropFilter={'blur(3px)'}
        >
          <Text
            as={'h2'}
            fontSize={{ base: '3xl', md: '6xl' }}
            marginBottom={4}
            fontFamily={'CubicFive12'}
          >
            Weed Delivery Phuket
          </Text>
          <Text as={'p'} fontSize={{ base: '3xl', md: '4xl' }}>
            No need to leave the house for your favorite buds, your choice of
            strains is delivered right to your doorstep.
          </Text>
          <Link
            href={'/contact-us-buy-weed-online'}
            title={'Contact Us to buy weed online'}
          >
            <Text
              display={'inline-flex'}
              color={'white'}
              borderColor={'white'}
              fontSize={{ base: '3xl', md: '4xl' }}
              borderWidth={1}
              bgColor="transparent"
              backdropFilter={'blur(3px)'}
              p={6}
              mt={10}
              mx={'auto'}
              fontFamily={'CubicFive10'}
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
      <SwiperSlide>
        <Box position={'relative'} w="100%" h={{ base: '600px' }}>
          <Image
            src="/media/green-ghost-weed-shop-crypto-cashback.webp"
            fill
            style={{ objectFit: 'cover' }}
            alt="Green Ghost Weed Shop Crypto Cashback"
          />
        </Box>

        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign={'center'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          fontWeight={'black'}
          color={'white'}
          fontFamily={'vt323'}
          px={10}
          bgColor={'ghostVerse.dark.ultralight'}
          backdropFilter={'blur(3px)'}
        >
          <Text
            as={'h2'}
            fontSize={{ base: '3xl', md: '6xl' }}
            marginBottom={4}
            fontFamily={'CubicFive12'}
          >
            Relax and earn
          </Text>
          <Text as={'p'} fontSize={{ base: '3xl', md: '4xl' }}>
            Visit our crypto weed shop and explore a new world of possibilities
            with blockchain and cannabis.
          </Text>
          <Link
            href="/crypto-weed-shop-relax-and-earn"
            title="Crypto Weed Shop Relax And Earn"
            passHref
          >
            <Text
              display={'inline-flex'}
              color={'white'}
              borderColor={'white'}
              fontSize={{ base: '3xl', md: '4xl' }}
              borderWidth={1}
              bgColor="transparent"
              backdropFilter={'blur(3px)'}
              p={6}
              mt={10}
              mx={'auto'}
              fontFamily={'CubicFive10'}
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
        <Box position={'relative'} w="100%" h={{ base: '600px' }}>
          <Image
            src="/media/green-ghost-weed-shop-pixel-art.webp"
            fill
            style={{ objectFit: 'cover' }}
            alt="Green Ghost Weed Shop Pixel Art"
          />
        </Box>
        <Box
          position={'absolute'}
          top={0}
          bottom={0}
          left={0}
          right={0}
          margin="auto"
          textAlign={'center'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          fontWeight={'black'}
          color={'white'}
          fontFamily={'vt323'}
          px={10}
          bgColor={'ghostVerse.dark.ultralight'}
          backdropFilter={'blur(3px)'}
        >
          <Text
            as={'h2'}
            fontSize={{ base: '3xl', md: '6xl' }}
            marginBottom={4}
            fontFamily={'CubicFive12'}
          >
            GhostVerse
          </Text>
          <Text as={'p'} fontSize={{ base: '3xl', md: '4xl' }}>
            Join the Ghost Clan and earn 31% on every order, get cashback and
            get exclusive access to our latest strains. #MxGhosts
          </Text>
          <Link
            href="https://ghostverse.org/mxghosts"
            title="GhostVerse MxGhosts"
            passHref
          >
            <Text
              display={'inline-flex'}
              color={'white'}
              borderColor={'white'}
              fontSize={{ base: '3xl', md: '4xl' }}
              borderWidth={1}
              bgColor="transparent"
              backdropFilter={'blur(3px)'}
              p={6}
              mt={10}
              mx={'auto'}
              fontFamily={'CubicFive10'}
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
    </Swiper>
  );
};
