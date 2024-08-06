// BudItem.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Bud } from '../../config/buds';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemTitleShop from './elements/BoxItemTitleShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';
import BoxItemList from './elements/BoxItemList';

type BudItemProps = {
  bud: Bud;
};

export const BudItem = ({ bud }: BudItemProps) => {
  SwiperCore.use([Autoplay]);

  return (
    <BoxItemList>
      <Link href={`weed-shop/${bud.slug}`} title={bud.name} passHref>
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
                '--swiper-pagination-color': '#4cfd27',
                '--swiper-pagination-bullet-inactive-color': '#fff',
              } as React.CSSProperties
            }
          >
            {bud.images.map(
              (image, index) =>
                index !== 2 && (
                  <SwiperSlide key={index}>
                    <Box as="span">
                      <Image
                        src={image}
                        width={250}
                        height={250}
                        alt={bud.imgDesc}
                        sizes="(max-width: 600px) 160px, (max-width: 1200px) 240px, 240px"
                      />
                    </Box>
                  </SwiperSlide>
                )
            )}
          </Swiper>
          <BoxItemDescShop>
            <BoxItemTitleShop>
              <BoxItemPriceShop>
                {bud.price == 999 ? (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.green.base'}
                  >
                    Coming Soon
                  </Box>
                ) : bud.quantity === 0 ? (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    margin={'-0.5rem'}
                    padding={'0.5rem'}
                    color={'white'}
                    backgroundColor={'ghostVerse.red.base'}
                  >
                    Sold Out
                  </Box>
                ) : (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.green.base'}
                  >
                    {bud.price} THB
                  </Box>
                )}
              </BoxItemPriceShop>
              {bud.name}
            </BoxItemTitleShop>

            <Box display={'flex'} fontFamily={'vt323'} fontSize={'2xl'} mb={1}>
              {bud.dominance == 'Indica' && (
                <Box
                  as={'h3'}
                  color={'ghostVerse.dominance.indica'}
                  marginRight={2}
                >
                  {bud.dominance} {bud.indica}%
                </Box>
              )}
              {bud.dominance == 'Sativa' && (
                <Box
                  as={'h3'}
                  color={'ghostVerse.dominance.sativa'}
                  marginRight={2}
                >
                  {bud.dominance} {bud.sativa}%
                </Box>
              )}
              {bud.dominance == 'Hybrid' && (
                <Box
                  as={'h3'}
                  color={'ghostVerse.dominance.hybrid'}
                  marginRight={2}
                >
                  {bud.dominance}
                </Box>
              )}
              <Box
                display={'flex'}
                fontSize={'2xl'}
                flexWrap={'wrap'}
                mb={1}
                ml={'auto'}
              >
                {bud.THC >= bud.CBD && (
                  <Box
                    display={'flex'}
                    marginRight={2}
                    flexDirection={'row'}
                    color={'ghostVerse.grey.base'}
                  >
                    THC
                    <Box
                      marginLeft={2}
                      display={'flex'}
                      flexDirection={'row'}
                      alignItems={'baseline'}
                    >
                      {bud.THC}%
                    </Box>
                  </Box>
                )}
                {bud.THC <= bud.CBD && bud.CBD !== '0' && (
                  <Box
                    display={'flex'}
                    marginRight={2}
                    flexDirection={'row'}
                    color={'ghostVerse.grey.base'}
                  >
                    CBD
                    <Box
                      marginLeft={2}
                      display={'flex'}
                      flexDirection={'row'}
                      alignItems={'baseline'}
                    >
                      {bud.CBD}%
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </BoxItemList>
  );
};
