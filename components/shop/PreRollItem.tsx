import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { Bud } from '../../config/buds';
import BoxItemShop from './elements/BoxItemShop';
import BoxItemTitleShop from './elements/BoxItemTitleShop';

type PreRollItemProps = {
  bud: Bud;
};

export const PreRollItem = ({ bud }: PreRollItemProps) => {
  return (
    <Box width={{ base: '100%' }} p={0} mb={1} lineHeight={1}>
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
            <Box w={{ base: '100%', lg: '25%' }}>
              <BoxItemTitleShop>{bud.name}</BoxItemTitleShop>
            </Box>
            <Box
              w={{ base: '100%', lg: '10%' }}
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'2xl'}
              mb={1}
            >
              {bud.dominance == 'Indica' && (
                <Box as={'h3'} color={'ghostVerse.blue.base'} marginRight={2}>
                  {bud.dominance} {bud.indica}%
                </Box>
              )}
              {bud.dominance == 'Sativa' && (
                <Box as={'h3'} color={'ghostVerse.pink.base'} marginRight={2}>
                  {bud.dominance} {bud.sativa}%
                </Box>
              )}
              {bud.dominance == 'Hybrid' && (
                <Box as={'h3'} color={'ghostVerse.orange.base'} marginRight={2}>
                  {bud.dominance}
                </Box>
              )}
            </Box>
            <Box
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'2xl'}
              flexWrap={'wrap'}
              mb={1}
              w={{ base: '100%', lg: '15%' }}
            >
              {bud.THC !== 'undefined' && (
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
              {bud.CBD !== 'undefined' && (
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
            {bud.effects !== 'undefined' && (
              <Box
                display={'flex'}
                fontFamily={'vt323'}
                fontSize={'lg'}
                color={'ghostVerse.grey.base'}
              >
                {bud.effects}
              </Box>
            )}
            <Box marginLeft={'auto'} whiteSpace={'nowrap'}>
              <Box
                fontFamily={'CubicFive12'}
                fontSize={{ base: 18, lg: 20 }}
                color={'ghostVerse.green.base'}
              >
                {bud.price} THB
              </Box>
            </Box>
          </Box>
        </BoxItemShop>
      </Link>
    </Box>
  );
};
