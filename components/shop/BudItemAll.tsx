// BudItemAll.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Bud } from '../../config/buds';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

type BudItemAllProps = {
  bud: Bud;
};

export const BudItemAll = ({ bud }: BudItemAllProps) => {
  return (
    <Box
      as="li"
      aria-label={`${bud.name} Cannabis Strain`}
      listStyleType={'none'}
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
    >
      <Link
        href={`/strains/${bud.slug}`}
        title={`Order ${bud.name} Cannabis Strain Online`}
        passHref
      >
        <Text
          itemProp="name"
          as={'h3'}
          fontFamily={'CubicFive12'}
          fontSize={{ base: 14 }}
          p={1}
          whiteSpace={'nowrap'}
          background={'ghostVerse.green.transparent'}
          noOfLines={1}
          display={'block'}
        >
          {bud.name}
        </Text>
      </Link>
    </Box>
  );
};
