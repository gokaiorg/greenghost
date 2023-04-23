import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../config/products';
import { ImgPercent } from './ImgPercent';

type BudItemProps = {
  product: Product;
};

export const BudItem = ({ product }: BudItemProps) => {
  return (
    <Box
      width={{ base: '100%', md: '50%', lg: '33%' }}
      paddingBottom={1}
      paddingRight={1}
    >
      <Link href={product.slug} title={product.name} passHref>
        <Box
          borderColor="ghostVerse.green.base"
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          p={6}
          fontWeight="bold"
          fontSize="lg"
          color="ghostVerse.gray.base"
          display="flex"
          flexDirection={{ base: 'column' }}
          height="100%"
          whiteSpace={{ base: 'normal' }}
          _hover={{
            bgColor: 'rgba(109, 208, 246, 0.1)',
            backdropFilter: 'blur(3px)',
          }}
          transition="background-color .3s"
        >
          <Box width={{ base: 'full' }} height={{ base: 'auto' }}>
            <Image
              src={product.images[1]}
              alt={product.imgDesc}
              width={500}
              height={500}
              title={product.imgDesc}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            marginLeft={{ base: 0 }}
            marginTop={{ base: 4 }}
          >
            <Box
              as="h3"
              fontSize="2xl"
              fontFamily="CubicFive12"
              display="flex"
              flexDirection="row"
              alignItems="center"
              marginRight={1}
            >
              {product.name}
              {product.price !== 666 && (
                <Box
                  marginLeft="auto"
                  color="ghostVerse.green.base"
                  whiteSpace="nowrap"
                >
                  {product.price} THB
                </Box>
              )}
            </Box>
            <Box display="flex" fontFamily="vt323" fontSize="3xl">
              {product.dominance == 'Indica Dominant' && (
                <Box as="h4" color="ghostVerse.blue.base" marginRight={2}>
                  {product.dominance}
                </Box>
              )}
              {product.dominance == 'Sativa Dominant' && (
                <Box as="h4" color="ghostVerse.pink.base" marginRight={2}>
                  {product.dominance}
                </Box>
              )}
              {product.dominance == 'Hybrid' && (
                <Box as="h4" color="ghostVerse.orange.base" marginRight={2}>
                  {product.dominance}
                </Box>
              )}
            </Box>
            <Box
              display="flex"
              fontFamily="vt323"
              fontSize="3xl"
              flexWrap="wrap"
            >
              {product.sativa !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  Sativa
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {product.sativa}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {product.indica !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  Indica
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {product.indica}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {product.THC !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  THC
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {product.THC}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {product.CBD !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  CBD
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {product.CBD}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              display="flex"
              fontFamily="vt323"
              fontSize="3xl"
              mx="auto"
              mt="auto"
            >
              {product.effects !== 'undefined' && (
                <Box
                  display="flex"
                  textAlign="center"
                  flexDirection="column"
                  fontSize="3xl"
                >
                  Feelings
                  <Box
                    color="ghostVerse.green.base"
                    whiteSpace={{ base: 'normal', xl: 'nowrap' }}
                  >
                    {product.effects}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
