// BudItem.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Bud } from '../../config/buds';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';

type BudItemProps = {
  bud: Bud;
};

export const BudItem = ({ bud }: BudItemProps) => {
  SwiperCore.use([Autoplay]);

  return (
    <Box
      as="li"
      aria-label={`Buds Menu ${bud.name} Strain`}
      listStyleType={'none'}
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
    >
      <Link href={`/strains/${bud.slug}`} title={bud.imgDesc} passHref>
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
            {bud.images.map((image, index) =>
              index !== 2 ? (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    width={250}
                    height={250}
                    alt={bud.imgDesc}
                    title={bud.imgDesc}
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
                {bud.name}
              </Text>
            </Box>
            <BoxItemPriceShop>
              {bud.price == 999 ? (
                <Box
                  as="span"
                  fontSize={{ base: 14, lg: 16 }}
                  color={'ghostVerse.green.base'}
                >
                  Coming Soon
                </Box>
              ) : bud.quantity === 0 ? (
                <Box
                  as="span"
                  fontSize={{ base: 14, lg: 16 }}
                  margin={'-0.5rem'}
                  padding={'0.5rem'}
                  color={'white'}
                  backgroundColor={'ghostVerse.red.base'}
                >
                  Sold Out
                </Box>
              ) : (
                <>{`${bud.price} THB`}</>
              )}
            </BoxItemPriceShop>
            <Box
              as="li"
              aria-label={`Product Dominance and THC level`}
              listStyleType={'none'}
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={{ base: 'xl', md: '2xl' }}
              mb={1}
            >
              {bud.dominance == 'Indica' && (
                <Box
                  as={'h3'}
                  color={'ghostVerse.dominance.indica'}
                  marginRight={2}
                >
                  {`${bud.dominance} ${bud.indica}%`}
                </Box>
              )}
              {bud.dominance == 'Sativa' && (
                <Box
                  as={'h3'}
                  color={'ghostVerse.dominance.sativa'}
                  marginRight={2}
                >
                  {`${bud.dominance} ${bud.sativa}%`}
                </Box>
              )}
              {bud.dominance == 'Hybrid' && (
                <Box
                  as={'h3'}
                  color={'ghostVerse.dominance.hybrid'}
                  marginRight={2}
                >
                  {`${bud.dominance}`}
                </Box>
              )}
              <Box
                as="h3"
                display={'flex'}
                flexWrap={'wrap'}
                mb={1}
                ml={'auto'}
                color={'ghostVerse.grey.base'}
              >
                {bud.THC >= bud.CBD && <>{`THC ${bud.THC}%`}</>}
                {bud.THC <= bud.CBD && bud.CBD !== '0' && (
                  <>{`CBD ${bud.CBD}%`}</>
                )}
              </Box>
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </Box>
  );
};
