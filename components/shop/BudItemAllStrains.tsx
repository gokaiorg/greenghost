// BudItemAllStrains.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Bud } from '../../config/buds';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';

type BudItemAllStrainsProps = {
  bud: Bud;
};

export const BudItemAllStrains = ({ bud }: BudItemAllStrainsProps) => {
  return (
    <Box
      as="li"
      aria-label={`${bud.name} Strain`}
      listStyleType={'none'}
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
    >
      <Link
        href={`/strains/${bud.slug}`}
        title={`Order ${bud.name} Cannabis Strain Online`}
        passHref
      >
        <Box p={'0.5'} m={'0.5'} background={'ghostVerse.green.transparent'}>
          {bud.images.length > 1 && (
            <Image
              src={bud.images[0]}
              width={250}
              height={250}
              alt={bud.imgDesc}
              title={bud.imgDesc}
              sizes="(max-width: 600px) 160px, (max-width: 1200px) 240px, 240px"
              quality={75}
              style={{ objectFit: 'cover' }}
            />
          )}
          <Text
            itemProp="name"
            as={'h3'}
            fontFamily={'CubicFive12'}
            fontSize={{ base: 14 }}
            p={1}
            whiteSpace={'nowrap'}
            noOfLines={1}
            display={'block'}
          >
            {bud.name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
