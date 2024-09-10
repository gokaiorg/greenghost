import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Edible } from '../../config/edibles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';

type EdibleItemProps = {
  edible: Edible;
};

export const EdibleItem = ({ edible }: EdibleItemProps) => {
  SwiperCore.use([Autoplay]);

  return (
    <Box
      as="li"
      aria-label={`Cannabis Edible Menu ${edible.name}`}
      listStyleType={'none'}
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
    >
      <Link
        href={`weed-shop-edibles/${edible.slug}`}
        title={`Green Ghost 🌿👻 Degen Weed Shop Best ${edible.name} Edible`}
        passHref
      >
        <BoxItemShop>
          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            loop
            autoplay={{
              delay: 10000,
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
            modules={[EffectCoverflow, Pagination]}
            pagination={{ clickable: true }}
            initialSlide={0}
            style={
              {
                '--swiper-pagination-color': '#13DE00',
                '--swiper-pagination-bullet-inactive-color': '#fff',
              } as React.CSSProperties
            }
          >
            {edible.images.map((image, index) =>
              index !== 2 ? (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    width={250}
                    height={250}
                    alt={edible.imgDesc}
                    title={edible.imgDesc}
                    sizes="(max-width: 600px) 160px, (max-width: 1200px) 240px, 240px"
                    quality={75}
                    style={{ objectFit: 'cover' }}
                  />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
          <BoxItemDescShop>
            <Box as="li" aria-label={`Product Name`} listStyleType={'none'}>
              <Text
                itemProp="name"
                as={'h2'}
                fontFamily={'CubicFive12'}
                fontSize={{ base: 16 }}
                display={'flex'}
                flexDirection={'column'}
                marginRight={1}
              >
                {edible.name}
              </Text>
            </Box>
            {edible.price !== 999 && (
              <BoxItemPriceShop>{`${edible.price} THB`}</BoxItemPriceShop>
            )}
            <Box
              as="li"
              aria-label={`Product THC level`}
              listStyleType={'none'}
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'2xl'}
              color={'ghostVerse.grey.base'}
              mb={1}
            >
              <Box as={'h3'} color={'ghostVerse.yellow.base'} marginRight={2}>
                {`${edible.packaging}`}
              </Box>
              <Box
                as="h3"
                display={'flex'}
                fontSize={'2xl'}
                flexWrap={'wrap'}
                mb={1}
                ml={'auto'}
                color={'ghostVerse.grey.base'}
              >
                {edible.THC >= edible.CBD && <>{`THC ${edible.THC}mg`}</>}
                {edible.THC <= edible.CBD && edible.CBD !== '0' && (
                  <>{`CBD ${edible.CBD}mg`}</>
                )}
              </Box>
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </Box>
  );
};
