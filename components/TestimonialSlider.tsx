import { Box, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import Link from 'next/link';

export const TestimonialSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      autoHeight={true}
      spaceBetween={10}
      slidesPerView={'auto'}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
      loop
      autoplay={{
        delay: 8000,
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
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              Sona Al3moudi
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              Nati is very good and beautiful lady who owns this shop and have
              good stuff.
            </Text>
            <Link
              href={'https://goo.gl/maps/NtVCHj4dKiN2UTej7'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              Jai Chopra
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              amazing collection
            </Text>
            <Link
              href={'https://goo.gl/maps/PHH4eoMhN1SikuuL7'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              Abdullah Fageeh
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              Awesome place and awesome treatment
            </Text>
            <Link
              href={'https://goo.gl/maps/aXs9vzgcNHEN2b9CA'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              G P
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              Really great shop, good quality products and the service is really
              friendly ! I recommend a lot 👍🏻 …
            </Text>
            <Link
              href={'https://goo.gl/maps/xkfjZMNEEe24E5tD9'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              Sonia Deslouis
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              Super endroit !!! Je recommande. Super accueil, j adore !!!
              N’hesitez pas à vous y rendre si vous venez à Phuket
            </Text>
            <Link
              href={'https://goo.gl/maps/sw3L6myRRmhXiopDA'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              Lea Serrar
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              The weed is amazing, they have great promotions on their
              incredible quality weed. So happy I found them!
            </Text>
            <Link
              href={'https://goo.gl/maps/kEduAbxzoCLewQ1d9'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              mark Innes
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              Great vibe and great herbs. Felt super chilled, Also Nati was
              really friendly and helpful when answering my questions.
            </Text>
            <Link
              href={'https://goo.gl/maps/xw1gbUi8zGE9kb3m9'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              Aoifelouise
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              What an amazing woman!! Very knowledgeable on her buds and also
              great prices compared to other places in the area. Highly
              recommend
            </Text>
            <Link
              href={'https://goo.gl/maps/jawsHz9Zg1PQLYg99'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
      <SwiperSlide>
        <Box display={'flex'} my={'10'}>
          <Box position={'relative'} w={'20%'} h={{ base: '100px' }}>
            <Image
              src="/media/green-ghost-smiling-pfp.webp"
              fill
              style={{ objectFit: 'contain' }}
              alt={'Green Ghost Weed Shop Phuket'}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontWeight={'black'}
            color={'white'}
            w={'80%'}
            fontFamily={'vt323'}
            px={4}
            bgColor={'ghostVerse.dark.ultralight'}
            backdropFilter={'blur(3px)'}
          >
            <Text
              as={'h2'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              fontFamily={'CubicFive10'}
            >
              Jean de Colombel
            </Text>
            <Box display={'flex'} mb={2}>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
              <svg
                width={'30px'}
                height={'30px'}
                xmlns={'http://www.w3.org/2000/svg'}
                viewBox={'0 0 20 20'}
                fill={'#4cfd27'}
              >
                <path
                  fillRule={'evenodd'}
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule={'evenodd'}
                />
              </svg>
            </Box>
            <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
              Nati a été très sympathique, ses produits sont d&apos;une grande
              qualité. Je recommande chaudement !{' '}
            </Text>
            <Link
              href={'https://goo.gl/maps/KmUpTyatuoJKXis28'}
              title={'Read more review on Google Map Place'}
              passHref
            >
              <Text
                display={'inline-flex'}
                color={'ghostVerse.green.base'}
                fontSize={{ base: 'xl' }}
                mt={4}
                fontFamily={'CubicFive10'}
              >
                Read More
              </Text>
            </Link>
          </Box>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
};
