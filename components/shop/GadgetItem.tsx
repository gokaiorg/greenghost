import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Gadget } from '../../config/gadgets';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';

type GadgetItemProps = {
  gadget: Gadget;
};

export const GadgetItem = ({ gadget }: GadgetItemProps) => {
  return (
    <Box
      as="li"
      aria-label={`Cannabis Accessory Menu ${gadget.name}`}
      listStyleType={'none'}
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
    >
      <Link
        href={`weed-shop-gadgets/${gadget.slug}`}
        title={gadget.name}
        passHref
      >
        <BoxItemShop>
          <Box
            width={{ base: 'full' }}
            height={{ base: 'auto' }}
            pos={'relative'}
          >
            <Image
              src={gadget.images[1]}
              alt={gadget.imgDesc}
              title={gadget.imgDesc}
              width={250}
              height={250}
              sizes="(max-width: 600px) 160px, (max-width: 1200px) 240px, 240px"
              quality={75}
              style={{ objectFit: 'cover' }}
            />
          </Box>
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
                {gadget.name}
              </Text>
            </Box>
            {gadget.price !== 999 && (
              <BoxItemPriceShop>{`${gadget.price} THB`}</BoxItemPriceShop>
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
              {`${gadget.packaging}`}
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </Box>
  );
};
