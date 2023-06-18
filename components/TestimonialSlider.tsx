import { Box, Text } from '@chakra-ui/react';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';
import { motion } from 'framer-motion';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { TestimonialStars } from './TestimonialStars';
import { TestimonialPfp } from './TestimonialPfp';

export const TestimonialSlider = () => {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Box display={'flex'} flexDir={'column'} alignItems={'center'} mt={20}>
        <Box w={'160px'}>
          <motion.div
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <Image
              src={'/media/green-ghost-degen-weed-shop-cannabis-leaf.png'}
              width={478}
              height={475}
              alt={'Green Ghost - Degen Weed Shop - Cannabis Leaf.'}
            />
          </motion.div>
        </Box>
        <Text
          as={'h3'}
          fontSize={'4xl'}
          mx={'auto'}
          fontFamily={'CubicFive12'}
          mt={5}
          textAlign={'center'}
        >
          Green Ghosted Peeps
        </Text>
      </Box>
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
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Alli Rainer
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Great shop! I love the different grinders and the lady was super
                nice!!! Must go!
              </Text>
              <Link
                href={'https://g.co/kgs/FCkLhk'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                MantorMBU
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                super cool store. Just best quality
              </Text>
              <Link
                href={'https://g.co/kgs/3d6buh'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Martin
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Great service, prompt and with free delivery if you&apos;re in
                Rawai 😊
              </Text>
              <Link
                href={'https://g.co/kgs/DgPkUo'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                R de Hooge
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Make sure to visit this new great place, to try one or more of
                those tasty 😋 buds
              </Text>
              <Link
                href={'https://g.co/kgs/oGcK7n'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Aaron Chong
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                I came here for the service and people. Cannabis is better with
                people. They have a variety of ganjas for newbies to connoseurs.
                The vibe is pretty cool as it feels like a house.
              </Text>
              <Link
                href={'https://g.co/kgs/1UN67Y'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Nikki-Rilie
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Quick response time, nati is very kind and responsive and green
                ghost provides good delivery services!! Cute NFT options that
                give discounts in store.
              </Text>
              <Link
                href={'https://g.co/kgs/ugCnyP'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Adrian Ivascu
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                New Location same good stuff
              </Text>
              <Link
                href={'https://g.co/kgs/T6QbmU'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Monique Munoz
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                💖 Nice place to relax 👻
              </Text>
              <Link
                href={'https://g.co/kgs/4Y8AGR'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Nati is very good and beautiful lady who owns this shop and have
                good stuff.
              </Text>
              <Link
                href={'https://goo.gl/maps/NtVCHj4dKiN2UTej7'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Nica Dragos (Jeje)
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Lovely place! It&apos;s a must check if you&apos;re nearby
              </Text>
              <Link
                href={'https://g.co/kgs/4Gm4kh'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                amazing collection
              </Text>
              <Link
                href={'https://goo.gl/maps/PHH4eoMhN1SikuuL7'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Awesome place and awesome treatment
              </Text>
              <Link
                href={'https://goo.gl/maps/aXs9vzgcNHEN2b9CA'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Really great shop, good quality products and the service is
                really friendly ! I recommend a lot 👍🏻 …
              </Text>
              <Link
                href={'https://goo.gl/maps/xkfjZMNEEe24E5tD9'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Super endroit !!! Je recommande. Super accueil, j adore !!!
                N’hesitez pas à vous y rendre si vous venez à Phuket
              </Text>
              <Link
                href={'https://goo.gl/maps/sw3L6myRRmhXiopDA'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                The weed is amazing, they have great promotions on their
                incredible quality weed. So happy I found them!
              </Text>
              <Link
                href={'https://goo.gl/maps/kEduAbxzoCLewQ1d9'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Great vibe and great herbs. Felt super chilled, Also Nati was
                really friendly and helpful when answering my questions.
              </Text>
              <Link
                href={'https://goo.gl/maps/xw1gbUi8zGE9kb3m9'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Apiwat Puchchong
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Nice place, Great buds in Karon town. Recommended if you need to
                find somewhere get you relaxing.
              </Text>
              <Link
                href={'https://g.co/kgs/1rs95T'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                What an amazing woman!! Very knowledgeable on her buds and also
                great prices compared to other places in the area. Highly
                recommend
              </Text>
              <Link
                href={'https://goo.gl/maps/jawsHz9Zg1PQLYg99'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
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
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Nati a été très sympathique, ses produits sont d&apos;une grande
                qualité. Je recommande chaudement !{' '}
              </Text>
              <Link
                href={'https://goo.gl/maps/KmUpTyatuoJKXis28'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            display={'flex'}
            my={'10'}
            bgColor={'ghostVerse.dark.lighter'}
            p={'5'}
          >
            <TestimonialPfp />
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              fontWeight={'black'}
              color={'white'}
              w={'80%'}
              fontFamily={'vt323'}
              px={4}
              backdropFilter={'blur(3px)'}
            >
              <Text
                as={'h2'}
                fontSize={{ base: 'xl' }}
                marginBottom={2}
                fontFamily={'CubicFive10'}
              >
                Aneas Morelli
              </Text>
              <TestimonialStars />
              <Text as={'p'} fontSize={{ base: '3xl' }} lineHeight={'1'}>
                Satisfied{' '}
              </Text>
              <Link
                href={'https://g.co/kgs/aT54qW'}
                title={'Read More Review on Google Map Place'}
                passHref
              >
                <Text
                  display={'inline-flex'}
                  color={'ghostVerse.green.base'}
                  fontSize={{ base: 'xl' }}
                  mt={4}
                  fontFamily={'CubicFive10'}
                >
                  Read Review
                </Text>
              </Link>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
