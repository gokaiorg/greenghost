import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const HomeFeature = () => {
  return (
    <Box
      display={'flex'}
      my={10}
      flexWrap={'wrap'}
      mx={-1}
      alignItems={'stretch'}
    >
      <Box width={{ base: '100%', lg: '33.333333%' }} mb={2}>
        <Link
          href="/weed-delivery-phuket"
          passHref
          title="Weed Delivery Phuket"
        >
          <Box
            fontSize={{ base: 'xl' }}
            height={'100%'}
            fontFamily={'CubicFive12'}
            color={'black'}
            mx={1}
            mb={1}
            bgColor={'ghostVerse.green.base'}
            textAlign={'center'}
            p={4}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
            transition={'all .3s'}
            _hover={{
              color: 'ghostVerse.green.base',
              backgroundColor: 'ghostVerse.dark.lighter',
            }}
          >
            <Box
              as={'h4'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              display={'flex'}
              mx={'auto'}
              justifyContent={'center'}
            >
              Weed Delivery Phuket
            </Box>
            <Box
              as={'p'}
              fontSize={{ base: '2xl' }}
              display={'flex'}
              mx={'auto'}
              justifyContent={'center'}
              fontFamily={'vt323'}
            >
              Experience the convenience of our Phuket weed delivery service!
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '33.333333%' }} mb={2}>
        <Link
          href={'/weed-drive-thru-phuket'}
          passHref
          title="Weed Drive Thru Phuket"
        >
          <Box
            fontSize={{ base: 'xl' }}
            height={'100%'}
            fontFamily={'CubicFive12'}
            color={'black'}
            mx={1}
            mb={1}
            bgColor={'ghostVerse.green.base'}
            textAlign={'center'}
            p={4}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
            transition={'all .3s'}
            _hover={{
              color: 'ghostVerse.green.base',
              backgroundColor: 'ghostVerse.dark.lighter',
            }}
          >
            <Box
              as={'h4'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              display={'flex'}
              mx={'auto'}
              justifyContent={'center'}
            >
              Weed Drive-thru Phuket
            </Box>
            <Box
              as={'p'}
              fontSize={{ base: '2xl' }}
              display={'flex'}
              mx={'auto'}
              justifyContent={'center'}
              fontFamily={'vt323'}
            >
              Phuket&apos;s premier Weed Drive-thru experience!
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '33.333333%' }} mb={2}>
        <Link
          href={'/contact-us-buy-weed-online'}
          passHref
          title={'Contact Us'}
        >
          <Box
            fontSize={{ base: 'xl' }}
            height={'100%'}
            fontFamily={'CubicFive12'}
            color={'black'}
            mx={1}
            mb={1}
            bgColor={'ghostVerse.green.base'}
            textAlign={'center'}
            p={4}
            display={'flex'}
            alignItems={'center'}
            flexDirection={'column'}
            justifyContent={'center'}
            transition={'all .3s'}
            _hover={{
              color: 'ghostVerse.green.base',
              backgroundColor: 'ghostVerse.dark.lighter',
            }}
          >
            <Box
              as={'h4'}
              fontSize={{ base: 'xl' }}
              marginBottom={2}
              display={'flex'}
              mx={'auto'}
              justifyContent={'center'}
            >
              24/7 Support
            </Box>
            <Box
              as={'p'}
              fontSize={{ base: '2xl' }}
              display={'flex'}
              mx={'auto'}
              justifyContent={'center'}
              fontFamily={'vt323'}
            >
              Our team is available 24/7 to provide you with prompt assistance!
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
