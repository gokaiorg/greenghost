import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Degen } from '../../config/degens';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemTitleShop from './elements/BoxItemTitleShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';
import BoxItemList from './elements/BoxItemList';
import ButtonAddCart from './elements/ButtonAddCart';

type DegenItemProps = {
  degen: Degen;
};

export const DegenItem = ({ degen }: DegenItemProps) => {
  return (
    <BoxItemList>
      <Link href={`weed-shop-degen/${degen.slug}`} title={degen.name} passHref>
        <BoxItemShop>
          <Box
            width={{ base: 'full' }}
            height={{ base: 'auto' }}
            pos={'relative'}
          >
            <Image
              src={degen.images[1]}
              alt={degen.imgDesc}
              width={700}
              height={700}
              title={degen.imgDesc}
              priority={false}
            />
            <ButtonAddCart>Buy</ButtonAddCart>
          </Box>
          <BoxItemDescShop>
            <BoxItemTitleShop>
              {degen.price !== 999 && (
                <BoxItemPriceShop>{degen.price} THB</BoxItemPriceShop>
              )}
              {degen.name}
            </BoxItemTitleShop>
            <Box
              display={'flex'}
              flexDirection={'column'}
              fontFamily={'vt323'}
              fontSize={'2xl'}
              mb={1}
            >
              {degen.THC !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  THC
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'baseline'}
                  >
                    {degen.THC}
                  </Box>
                </Box>
              )}
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </BoxItemList>
  );
};
