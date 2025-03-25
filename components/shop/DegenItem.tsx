import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Degen } from '../../config/degens';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemDescShop from './elements/BoxItemDescShop';
import BoxItemPriceShop from './elements/BoxItemPriceShop';

type DegenItemProps = {
  degen: Degen;
};

export const DegenItem = ({ degen }: DegenItemProps) => {
  return (
    <Box
      as="li"
      aria-label={`Cannabis Concentrate Menu ${degen.name}`}
      listStyleType={'none'}
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
    >
      <Link
        href={`/concentrates/${degen.slug}`}
        title={`${degen.name} Cannabis Concentrate`}
        passHref
      >
        <BoxItemShop>
          <Box
            width={{ base: 'full' }}
            height={{ base: 'auto' }}
            pos={'relative'}
          >
            <Image
              src={degen.images[1]}
              alt={degen.imgDesc}
              title={degen.imgDesc}
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
                fontSize={{ base: 'sm', md: 'lg' }}
                display={'flex'}
                flexDirection={'column'}
                marginRight={1}
              >
                {degen.name}
              </Text>
            </Box>
            {degen.price !== 999 && (
              <BoxItemPriceShop>{`${degen.price} THB`}</BoxItemPriceShop>
            )}
            <Box
              as="li"
              aria-label={`Product THC level`}
              listStyleType={'none'}
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={{ base: 'xl', md: '2xl' }}
              color={'ghostVerse.grey.base'}
              mb={1}
            >
              {`THC ${degen.THC}%`}
            </Box>
          </BoxItemDescShop>
        </BoxItemShop>
      </Link>
    </Box>
  );
};
