import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const PhuketGrowers = () => {
  return (
    <Box display={'flex'} flexWrap={'wrap'} my={4} mx={-1} mt={10}>
      <Box width={{ base: '50%', lg: '25%' }}>
        <Link href="/my-weed-solutions" title="My Weed Solutions" passHref>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            flexDirection={'column'}
            color={'ghostVerse.green.base'}
            mx={1}
            mb={2}
            p={4}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            transition={'all .3s'}
            _hover={{
              bgColor: 'ghostVerse.dark.lighter',
              borderColor: 'ghostVerse.green.base',
            }}
          >
            <Box
              as={'img'}
              src="/media/green-ghost-grower-my-weed-solutions.webp"
              width="80px"
              height="80px"
              maxW={'inherit'}
              mx={'auto'}
              alt="Green Ghost - Degen Weed Shop"
              title="Green Ghost - Degen Weed Shop"
            />
            My Weed Solutions
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '50%', lg: '25%' }}>
        <Link href="/cosmic-temple-vibes" title="Cosmic Temple Vibes" passHref>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            flexDirection={'column'}
            color={'ghostVerse.green.base'}
            mx={1}
            mb={2}
            p={4}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            transition={'all .3s'}
            _hover={{
              bgColor: 'ghostVerse.dark.lighter',
              borderColor: 'ghostVerse.green.base',
            }}
          >
            <Box
              as={'img'}
              src="/media/green-ghost-grower-cosmic-temple-vibes.png"
              width="80px"
              height="80px"
              maxW={'inherit'}
              mx={'auto'}
              alt="Green Ghost - Cosmic Temple Vibes"
              title="Green Ghost - Cosmic Temple Vibes"
            />
            Cosmic Temple Vibes
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '50%', lg: '25%' }}>
        <Link href="/buddy-bud-weed" title="Buddy Bud Weed" passHref>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            flexDirection={'column'}
            color={'ghostVerse.green.base'}
            mx={1}
            mb={2}
            p={4}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            transition={'all .3s'}
            _hover={{
              bgColor: 'ghostVerse.dark.lighter',
              borderColor: 'ghostVerse.green.base',
            }}
          >
            <Box
              as={'img'}
              src="/media/green-ghost-grower-buddy-bud-weed.png"
              width="80px"
              height="80px"
              maxW={'inherit'}
              mx={'auto'}
              alt="Green Ghost - Buddy Bud Weed"
              title="Green Ghost - Buddy Bud Weed"
            />
            Buddy Bud Weed
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
