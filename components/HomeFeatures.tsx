import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ImgDelivery } from './media/ImgDelivery';

export const HomeFeature = () => {
  return (
    <Box display={'flex'} my={10} flexWrap={'wrap'} alignItems={'stretch'}>
      <Box display={'flex'} w={'100%'} alignItems={'center'}>
        <Box as={'span'} w={{ base: 'auto' }} mr={4}>
          <ImgDelivery />
        </Box>
        <Text
          as={'h2'}
          fontSize={{ base: 24, lg: 34 }}
          lineHeight={'28px'}
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
        fontSize={{ base: 26, md: 40, lg: 44 }}
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
          fontSize={{ base: 'xl', md: '4xl' }}
          lineHeight={1}
          borderWidth={1}
          px={{ base: 4, md: 6 }}
          pt={{ base: 2, md: 0 }}
          pb={{ base: 2, md: 2 }}
          mt={5}
          mx={'auto'}
          fontFamily={'vt323'}
          color={'black'}
          borderColor={'ghostVerse.green.base'}
          backgroundColor={'ghostVerse.green.base'}
          _hover={{
            borderColor: 'ghostVerse.green.base',
            bgColor: 'black',
            color: 'ghostVerse.green.base',
          }}
        >
          Order Now
        </Text>
      </Link>
    </Box>
  );
};
