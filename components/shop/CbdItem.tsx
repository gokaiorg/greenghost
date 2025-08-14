// CbdItem.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Cbd } from '../../config/cbds';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
// import BoxItemPriceShop from './elements/BoxItemPriceShop';

type CbdItemProps = {
  cbd: Cbd;
};

export const CbdItem = ({ cbd }: CbdItemProps) => {
  SwiperCore.use([Autoplay]);

  return (
    <Box
      as="li"
      aria-label={`Order ${cbd.name} Online in France`}
      listStyleType={'none'}
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
    >
      <Link
        href={`https://greenghostcbd.fr/en/products/${cbd.slug}`}
        title={`Order ${cbd.name} Online in France`}
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
            {cbd.images.map((image, index) =>
              index !== 2 ? (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    width={250}
                    height={250}
                    alt={`Order ${cbd.name} Online in France`}
                    title={`Order ${cbd.name} Online in France`}
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
                fontSize={{ base: 'sm', md: 'lg' }}
                display={'flex'}
                flexDirection={'column'}
                marginRight={1}
              >
                {cbd.name}
              </Text>
            </Box>
            <Box
              as="li"
              aria-label={`Product Dominance and THC level`}
              listStyleType={'none'}
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={{ base: 'xl', md: '2xl' }}
              mb={1}
              color={'ghostVerse.green.base'}
            >
              {`${cbd.dominance}`}
              <Box
                as="h3"
                display={'flex'}
                flexWrap={'wrap'}
                mb={1}
                ml={'auto'}
                color={'ghostVerse.grey.base'}
              >
                {`CBD ${cbd.CBD}%`}
              </Box>
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </Box>
  );
};
