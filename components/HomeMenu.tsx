import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { IconMenu } from './media/IconMenu';

export const HomeMenu = () => {
  return (
    <Box
      display={'flex'}
      mt={{ base: 10 }}
      mb={10}
      flexWrap={'wrap'}
      alignItems={'stretch'}
    >
      <Box display={'flex'} flexDir={'column'} w={'100%'} alignItems={'center'}>
        <Box as={'span'} w={{ base: '80%', lg: '50%' }}>
          <IconMenu />
        </Box>
        <Text
          as={'h2'}
          fontSize={{ base: 24, lg: 34 }}
          mx={'auto'}
          fontFamily={'CubicFive12'}
          mt={{ base: 5 }}
          mb={{ base: 5 }}
          textAlign={'center'}
        >
          Weed Menu
        </Text>
      </Box>

      <Box display={'flex'}>
        <Text
          as={'p'}
          fontSize={{ base: 26, md: 44 }}
          lineHeight={1}
          fontFamily={'vt323'}
          w={{ base: '60%', md: '70%' }}
          mr={4}
        >
          Find the rarest strains, from top-tier selections to the cheapest weed
          in Phuket. Whether you seek premium quality or great value, we have
          something for everyone in our cannabis menu.
        </Text>

        <Box
          display={'flex'}
          flexDirection={{ base: 'column' }}
          fontSize={{ base: 16, md: 20 }}
          fontFamily={'CubicFive12'}
          color={'ghostVerse.green.base'}
          justifyContent={{ base: 'top', md: 'center' }}
        >
          <Link href={'/weed-shop'} passHref title="Weed Shop Menu Buds">
            <Text
              as={'h3'}
              mb={2}
              w={'100%'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              Buds
            </Text>
          </Link>
          <Link
            href={'/weed-shop-pre-rolls'}
            passHref
            title="Weed Shop Menu Pre Rolls"
          >
            <Text
              as={'h3'}
              mb={2}
              w={'100%'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              Pre-Rolls
            </Text>
          </Link>
          <Link
            href={'/weed-shop-edibles'}
            passHref
            title={'Weed Shop Menu Edibles'}
          >
            <Text
              as={'h3'}
              mb={2}
              w={'100%'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              Edibles
            </Text>
          </Link>
          <Link
            href={'/weed-shop-degen'}
            passHref
            title={'Weed Shop Menu Degen'}
          >
            <Text
              as={'h3'}
              mb={2}
              w={'100%'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              Degen
            </Text>
          </Link>
          <Link
            href="/weed-shop-gadgets"
            passHref
            title="Weed Shop Menu Gadgets"
          >
            <Text
              as={'h3'}
              mb={2}
              w={'100%'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              Gadgets
            </Text>
          </Link>
          <Link href={'/weed-shop'} passHref title="Green Ghost Menu">
            <Text
              as="span"
              display={'inline-flex'}
              color={'ghostVerse.green.base'}
              borderColor={'ghostVerse.green.base'}
              fontSize={{ base: 'xl', md: '4xl' }}
              borderWidth={1}
              bgColor="transparent"
              backdropFilter={'blur(3px)'}
              px={{ base: 4, md: 6 }}
              pt={{ base: 2, md: 0 }}
              pb={{ base: 2, md: 2 }}
              mt={5}
              mx={'auto'}
              fontFamily={'vt323'}
              _hover={{
                borderColor: 'ghostVerse.green.base',
                bgColor: 'ghostVerse.green.base',
                color: 'black',
              }}
            >
              Menu
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
