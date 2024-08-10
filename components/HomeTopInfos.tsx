import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

export const HomeTopInfos = () => {
  return (
    <Box
      display={'flex'}
      my={{ base: 5, lg: 10 }}
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems={'stretch'}
    >
      <Box
        w={{ base: '100%', lg: '65%' }}
        display={'flex'}
        flexDirection={{ base: 'row', md: 'row' }}
        bgColor={'ghostVerse.dark.lighter'}
        p={{ base: 5 }}
        mr={{ base: '0', lg: '4' }}
        mb={{ base: '2', lg: '0' }}
      >
        <Box
          as={'span'}
          w={{ base: '50%', md: '30%', lg: '50%', xl: '30%' }}
          mr={{ base: '4', md: '4' }}
          mb={{ base: '4', md: '0' }}
        >
          <Link
            href={'/weed-shop-gadgets/weed-th-rolling-papers-tips'}
            passHref
            title="Green Ghost - WEED.TH Rolling Papers + Tips"
          >
            <Image
              src="/media/green-ghost-degen-weed-shop-menu-gadget-weed-th-rolling-paper-tips-03.webp"
              width={400}
              height={400}
              alt="Weed Menu - Weed delivery Phuket - Green Ghost Degen Community"
              sizes="(max-width: 400px) 100vw, 400px"
              quality={75}
            />
          </Link>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          w={'100%'}
          alignItems={'start'}
        >
          <Text
            as={'h3'}
            fontSize={{ base: '18', lg: '24' }}
            lineHeight={1}
            fontFamily={'CubicFive12'}
            mb={{ base: 2 }}
            textAlign={'left'}
          >
            New cannabis gadget in store
          </Text>
          <Text
            as={'h4'}
            fontSize={{ base: 26 }}
            lineHeight={1}
            fontFamily={'vt323'}
            w={{ base: '100%', md: '100%' }}
            mr={4}
            mb={'auto'}
          >
            Experience smooth, natural smoking with{' '}
            <Link
              href={'https://weed.th/'}
              passHref
              title="Green Ghost - WEED.TH"
            >
              <Text
                as={'span'}
                color={'ghostVerse.green.base'}
                textDecoration={'underline'}
              >
                WEED.TH
              </Text>
            </Link>{' '}
            Rolling Papers + Tips.
          </Text>
          <Link
            href={'/weed-shop-gadgets/weed-th-rolling-papers-tips'}
            passHref
            title="Green Ghost - WEED.TH Rolling Papers + Tips"
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
              mt={'5'}
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
              Check It Out
            </Text>
          </Link>
        </Box>
      </Box>
      <Box
        display={'flex'}
        flexDirection={'column'}
        w={{ base: '100%', lg: '35%' }}
        bgColor={'ghostVerse.green.base'}
        color={'black'}
        p={{ base: 5 }}
      >
        <Text
          as={'h3'}
          fontSize={{ base: 24, lg: 34 }}
          lineHeight={1}
          fontFamily={'CubicFive12'}
          mb={{ base: 2 }}
          textAlign={'left'}
        >
          Cannabis Club
        </Text>
        <Text
          mb={'auto'}
          as={'p'}
          fontFamily={'vt323'}
          fontSize={{ base: 26 }}
          lineHeight={1}
        >
          Exclusive community for premium cannabis enthusiasts.
        </Text>
        <Link
          href={'/crypto-weed-shop-relax-and-earn'}
          passHref
          title="Green Ghost - WEED.TH Rolling Papers + Tips"
        >
          <Text
            as="span"
            display={'inline-flex'}
            color={'ghostVerse.green.base'}
            borderColor={'black'}
            backgroundColor={'black'}
            fontSize={{ base: 'xl', lg: '4xl' }}
            lineHeight={1}
            borderWidth={1}
            px={{ base: 4, md: 6 }}
            pt={{ base: 2, md: 0 }}
            pb={{ base: 2, md: 2 }}
            mx={'auto'}
            mt={'4'}
            fontFamily={'vt323'}
            _hover={{
              borderColor: 'black',
              bgColor: 'ghostVerse.green.base',
              color: 'black',
            }}
          >
            Become a member
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
