import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { Product } from '../../config/products';

type PreRollItemProps = {
  product: Product;
};

export const PreRollItem = ({ product }: PreRollItemProps) => {
  return (
    <Box width={{ base: '100%' }} p={0.5} lineHeight={1}>
      <Link href={`weed-shop/${product.slug}`} title={product.name} passHref>
        <Box
          borderColor={'ghostVerse.green.base'}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          p={2}
          pos={'relative'}
          fontWeight={'bold'}
          fontSize={'lg'}
          color="ghostVerse.gray.base"
          display={'flex'}
          flexDirection={{ base: 'column' }}
          height={'100%'}
          whiteSpace={{ base: 'normal' }}
          _hover={{
            bgColor: 'rgba(109, 208, 246, 0.1)',
            backdropFilter: 'blur(3px)',
          }}
          transition={'all .3s'}
        >
          <Box
            display={'flex'}
            flexDirection={{ base: 'column', lg: 'row' }}
            flex={'1'}
            pos={'relative'}
            alignItems={'center'}
            marginLeft={{ base: 0 }}
          >
            <Box
              as={'h2'}
              fontFamily={'CubicFive12'}
              fontSize={{ base: 16, lg: 18 }}
              display={'flex'}
              flexDirection={'column'}
              w={{ base: '100%', lg: '25%' }}
            >
              {product.name}
            </Box>
            <Box
              w={{ base: '100%', lg: '10%' }}
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'2xl'}
              mb={1}
            >
              {product.dominance == 'Indica' && (
                <Box as={'h3'} color={'ghostVerse.blue.base'} marginRight={2}>
                  {product.dominance} {product.indica}%
                </Box>
              )}
              {product.dominance == 'Sativa' && (
                <Box as={'h3'} color={'ghostVerse.pink.base'} marginRight={2}>
                  {product.dominance} {product.sativa}%
                </Box>
              )}
              {product.dominance == 'Hybrid' && (
                <Box as={'h3'} color={'ghostVerse.orange.base'} marginRight={2}>
                  {product.dominance}
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
              {product.THC !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  THC
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'baseline'}
                  >
                    {product.THC}%
                  </Box>
                </Box>
              )}
              {product.CBD !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  CBD
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'baseline'}
                  >
                    {product.CBD}%
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'lg'}
              w={{ base: '100%', lg: '20%' }}
            >
              {product.effects !== 'undefined' && (
                <Box color={'ghostVerse.orange.light'}>{product.effects}</Box>
              )}
            </Box>
            <Box
              pos={'absolute'}
              top={{ base: 0, lg: 1 }}
              right={0}
              marginLeft={'auto'}
              whiteSpace={'nowrap'}
            >
              <Box
                fontFamily={'CubicFive12'}
                fontSize={{ base: 18, lg: 20 }}
                color={'ghostVerse.green.base'}
              >
                {product.price} THB
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
