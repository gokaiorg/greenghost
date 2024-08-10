import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Edible } from '../../config/edibles';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemTitleShop from './elements/BoxItemTitleShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';
import BoxItemList from './elements/BoxItemList';

type EdibleItemProps = {
  edible: Edible;
};

export const EdibleItem = ({ edible }: EdibleItemProps) => {
  return (
    <BoxItemList>
      <Link
        href={`weed-shop-edibles/${edible.slug}`}
        title={edible.name}
        passHref
      >
        <BoxItemShop>
          <Box
            width={{ base: 'full' }}
            height={{ base: 'auto' }}
            pos={'relative'}
          >
            <Image
              src={edible.images[1]}
              alt={edible.imgDesc}
              width={700}
              height={700}
              title={edible.imgDesc}
              priority={false}
              quality={75}
            />
          </Box>
          <BoxItemDescShop>
            <BoxItemTitleShop>
              {edible.price !== 999 && (
                <BoxItemPriceShop>{edible.price} THB</BoxItemPriceShop>
              )}
              {edible.name}
            </BoxItemTitleShop>

            <Box display={'flex'} fontFamily={'vt323'} fontSize={'2xl'} mb={1}>
              {edible.THC !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  THC
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'baseline'}
                  >
                    {edible.THC}
                  </Box>
                </Box>
              )}
            </Box>

            {edible.effects !== 'undefined' && (
              <Box
                display={'flex'}
                fontFamily={'vt323'}
                fontSize={'lg'}
                mt={'auto'}
                color={'ghostVerse.grey.base'}
              >
                {edible.effects}
              </Box>
            )}
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </BoxItemList>
  );
};
