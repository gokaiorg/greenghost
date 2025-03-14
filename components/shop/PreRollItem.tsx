import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { Bud } from '../../config/buds';
import BoxItemTitleShop from './elements/BoxItemTitleShop';

type PreRollItemProps = {
  bud: Bud;
};

export const PreRollItem = ({ bud }: PreRollItemProps) => {
  return (
    <Box
      as="li"
      aria-label={`Pre Roll ${bud.name} Joint`}
      listStyleType={'none'}
      width={{ base: '100%' }}
      p={0}
      mb={1}
      lineHeight={1}
      pos={'relative'}
    >
      <Link href={`/weed-shop/${bud.slug}`} title={bud.imgDesc} passHref>
        <Box
          as="ul"
          aria-label="Product Details"
          listStyleType={'none'}
          display={'flex'}
          flex={'1'}
          flexWrap={'wrap'}
          alignItems={'center'}
          marginLeft={{ base: 0 }}
          lineHeight={1}
          p={2}
          pos={'relative'}
          fontWeight={'bold'}
          fontSize={'lg'}
          bgColor={'ghostVerse.dark.lighter'}
          height={'100%'}
          whiteSpace={{ base: 'normal' }}
          position={'relative'}
          _hover={{
            bgColor: 'ghostVerse.green.transparent',
          }}
          transition={'all .3s'}
        >
          <Box
            as="li"
            aria-label={`Product Name`}
            listStyleType={'none'}
            display={'flex'}
            w={{ base: '100%', lg: '20%' }}
          >
            <BoxItemTitleShop>{bud.name}</BoxItemTitleShop>
          </Box>
          <Box
            as="li"
            aria-label={`Product Dominance and THC level`}
            listStyleType={'none'}
            display={'flex'}
            fontFamily={'vt323'}
            fontSize={'2xl'}
            w={{ base: '60%', lg: '20%' }}
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
              fontSize={'2xl'}
              flexWrap={'wrap'}
              ml={'auto'}
              color={'ghostVerse.grey.base'}
            >
              {bud.THC >= bud.CBD && <>{`THC ${bud.THC}%`}</>}
              {bud.THC <= bud.CBD && bud.CBD !== '0' && (
                <>{`CBD ${bud.CBD}%`}</>
              )}
            </Box>
          </Box>
          <Box
            as="li"
            listStyleType={'none'}
            aria-label={`Product Price`}
            marginLeft={{ base: 'auto', lg: 'auto' }}
            whiteSpace={'nowrap'}
            display={'block'}
            fontFamily={'CubicFive12'}
            fontSize={{ base: 18, lg: 20 }}
            color={'ghostVerse.green.base'}
          >
            {`${bud.price + 20} THB`}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
