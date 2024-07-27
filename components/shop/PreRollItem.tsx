import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Bud } from '../../config/buds';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemTitleShop from './elements/BoxItemTitleShop';

type PreRollItemProps = {
  bud: Bud;
};

export const PreRollItem = ({ bud }: PreRollItemProps) => {
  return (
    <Box width={{ base: '100%' }} p={0} mb={1} lineHeight={1} pos={'relative'}>
      <Link href={`weed-shop/${bud.slug}`} title={bud.name} passHref>
        <BoxItemShop>
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            flex={'1'}
            pos={'relative'}
            alignItems={'center'}
            marginLeft={{ base: 0 }}
            p={1}
          >
            <Box display={'flex'} w={{ base: '100%', lg: '20%' }}>
              <BoxItemTitleShop>{bud.name}</BoxItemTitleShop>
              <Box
                marginLeft={'auto'}
                whiteSpace={'nowrap'}
                display={{ base: 'block', md: 'none' }}
              >
                <Box
                  fontFamily={'CubicFive12'}
                  fontSize={{ base: 18, lg: 20 }}
                  color={'ghostVerse.green.base'}
                >
                  {bud.price} THB
                </Box>
              </Box>
            </Box>
            <Box
              w={{ base: '100%', lg: '30%' }}
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'2xl'}
            >
              {bud.dominance == 'Indica' && (
                <Text
                  display={'flex'}
                  whiteSpace={'nowrap'}
                  as={'h3'}
                  color={'ghostVerse.dominance.indica'}
                  w={'30%'}
                >
                  {bud.dominance} {bud.indica}%
                </Text>
              )}
              {bud.dominance == 'Sativa' && (
                <Text
                  display={'flex'}
                  whiteSpace={'nowrap'}
                  as={'h3'}
                  color={'ghostVerse.dominance.sativa'}
                  w={'30%'}
                >
                  {bud.dominance} {bud.sativa}%
                </Text>
              )}
              {bud.dominance == 'Hybrid' && (
                <Text
                  display={'flex'}
                  whiteSpace={'nowrap'}
                  as={'h3'}
                  color={'ghostVerse.dominance.hybrid'}
                  w={'30%'}
                >
                  {bud.dominance}
                </Text>
              )}
              <Box
                display={'flex'}
                fontFamily={'vt323'}
                fontSize={'2xl'}
                flexWrap={'wrap'}
                mb={1}
                mr={{ base: 4, md: 'auto' }}
              >
                {bud.THC >= bud.CBD && (
                  <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                    THC
                    <Box
                      marginLeft={2}
                      color={'ghostVerse.green.base'}
                      display={'flex'}
                      flexDirection={'row'}
                      alignItems={'baseline'}
                    >
                      {bud.THC}%
                    </Box>
                  </Box>
                )}
                {bud.THC <= bud.CBD && bud.CBD !== '0' && (
                  <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                    CBD
                    <Box
                      marginLeft={2}
                      color={'ghostVerse.green.base'}
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

            {bud.effects !== 'undefined' && (
              <Box
                display={'flex'}
                fontFamily={'vt323'}
                fontSize={'lg'}
                color={'ghostVerse.grey.base'}
                w={{ base: '100%', lg: '30%' }}
              >
                {bud.effects}
              </Box>
            )}
            <Box
              marginLeft={'auto'}
              whiteSpace={'nowrap'}
              display={{ base: 'none', md: 'block' }}
            >
              <Box
                fontFamily={'CubicFive12'}
                fontSize={{ base: 18, lg: 20 }}
                color={'ghostVerse.green.base'}
              >
                {bud.price + 20} THB
              </Box>
            </Box>
          </Box>
        </BoxItemShop>
      </Link>
    </Box>
  );
};
