import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Gadget } from '../../config/gadgets';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemTitleShop from './elements/BoxItemTitleShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';
import BoxItemList from './elements/BoxItemList';

type GadgetItemProps = {
  gadget: Gadget;
};

export const GadgetItem = ({ gadget }: GadgetItemProps) => {
  return (
    <BoxItemList>
      <Link
        href={`weed-shop-gadgets/${gadget.slug}`}
        title={gadget.name}
        passHref
      >
        <BoxItemShop>
          <Box width={{ base: 'full' }} height={{ base: 'auto' }}>
            <Image
              src={gadget.images[1]}
              alt={gadget.imgDesc}
              width={700}
              height={700}
              title={gadget.imgDesc}
              priority={false}
            />
          </Box>
          <BoxItemDescShop>
            <BoxItemTitleShop>
              <BoxItemPriceShop>
                {gadget.price == 999 ? (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.green.base'}
                  >
                    Coming Soon
                  </Box>
                ) : gadget.quantity === 0 ? (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.red.base'}
                  >
                    Sold Out
                  </Box>
                ) : (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.green.base'}
                  >
                    {gadget.price} THB
                  </Box>
                )}
              </BoxItemPriceShop>
              {gadget.name}
            </BoxItemTitleShop>
            <Box
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'3xl'}
              flexDirection={'column'}
            >
              <Box as={'h4'} color={'ghostVerse.blue.base'} marginRight={4}>
                {gadget.packaging}
              </Box>
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </BoxItemList>
  );
};
