import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export const PhuketPartners = () => {
  return (
    <Box display={'flex'} flexWrap={'wrap'} mb={10} mx={-1}>
      <Box width={{ base: '50%', lg: '25%' }}>
        <Link href="https://gokai.org" title="Gokai Labs" passHref>
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
              src="/media/green-ghost-degen-weed-shop-partner-gokai-labs.webp"
              width="80px"
              height="80px"
              maxW={'inherit'}
              alt="Green Ghost - Degen Weed Shop - Gokai Labs"
              title="Green Ghost - Degen Weed Shop - Gokai Labs"
            />
            Gokai Labs
          </Box>
        </Link>
      </Box>
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
              alt="Green Ghost - My Weed Solutions"
              title="Green Ghost - My Weed Solutions"
            />
            My Weed
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
      <Box width={{ base: '50%', lg: '25%' }}>
        <Link href="/ohigho" title="Ohigho" passHref>
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
              src="/media/green-ghost-grower-ohigho.png"
              width="80px"
              height="80px"
              maxW={'inherit'}
              mx={'auto'}
              alt="Green Ghost - Ohigho"
              title="Green Ghost - Ohigho"
            />
            Ohigho
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
