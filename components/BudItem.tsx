import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../config/products';

type BudItemProps = {
  product: Product;
};

export const BudItem = ({ product }: BudItemProps) => {
  return (
    <Box
      width={{ base: '50%', md: '33.33333%', lg: '25%', xl: '20%' }}
      p={0.5}
      lineHeight={1}
    >
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
          <Box width={{ base: 'full' }} height={{ base: 'auto' }}>
            <Image
              src={product.images[1]}
              alt={product.imgDesc}
              width={700}
              height={700}
              title={product.imgDesc}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            flex={'1'}
            marginLeft={{ base: 0 }}
            marginTop={{ base: 4 }}
          >
            <Text
              as={'h2'}
              fontFamily={'CubicFive12'}
              fontSize={{ base: 16, lg: 18 }}
              display={'flex'}
              flexDirection={'column'}
              marginRight={1}
            >
              <Box
                marginLeft={'auto'}
                whiteSpace={'nowrap'}
                mb={2}
                position={'absolute'}
                right={0}
                top={4}
                background={'black'}
                padding={'0.5rem'}
              >
                {product.price == 999 ? (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.green.base'}
                  >
                    Coming Soon
                  </Box>
                ) : product.quantity === 0 ? (
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
                    {product.price} THB
                  </Box>
                )}
              </Box>
              {product.name}
            </Text>
            <Box display={'flex'} fontFamily={'vt323'} fontSize={'2xl'} mb={1}>
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
              mt={'auto'}
            >
              {product.effects !== 'undefined' && (
                <Box color={'ghostVerse.orange.light'}>{product.effects}</Box>
              )}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
