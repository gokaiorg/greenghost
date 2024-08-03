import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ImgDelivery } from './media/ImgDelivery';

export const HomeFeature = () => {
  return (
    <Box
      display={'flex'}
      my={10}
      flexWrap={'wrap'}
      mx={-1}
      alignItems={'stretch'}
    >
      <Box display={'flex'} w={'100%'} alignItems={'center'}>
        <Box as={'span'} w={{ base: 'auto' }} mr={4}>
          <ImgDelivery />
        </Box>
        <Text
          as={'h2'}
          fontSize={{ base: 24, lg: 34 }}
          fontFamily={'CubicFive12'}
          mt={{ base: 5 }}
          mb={{ base: 5 }}
          textAlign={'left'}
        >
          Weed Delivery Phuket
        </Text>
      </Box>
      <Text
        as={'p'}
        fontSize={{ base: 26, md: 44 }}
        lineHeight={1}
        fontFamily={'vt323'}
        w={{ base: '60%', md: '70%' }}
        mr={4}
      >
        Experience the best weed delivery service in Phuket with Green Ghost. We
        offer instant delivery, bringing top-quality cannabis straight to your
        door.
      </Text>
      <Link
        href={'/weed-delivery-phuket'}
        passHref
        title="Weed Delivery Phuket"
      >
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
          Order Now
        </Text>
      </Link>
    </Box>
  );
};
