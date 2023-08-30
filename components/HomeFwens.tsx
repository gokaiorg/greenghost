import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const HomeFwens = () => {
  return (
    <Box
      display={'flex'}
      mt={40}
      mb={10}
      flexWrap={'wrap'}
      alignItems={'stretch'}
      justifyContent={'center'}
      mx={-2}
    >
      <Box
        display={'flex'}
        flexDir={'column'}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'center'}
        mx={'auto'}
      >
        <Text
          as={'h3'}
          fontSize={'4xl'}
          mx={'auto'}
          fontFamily={'CubicFive12'}
          mt={10}
          mb={-20}
        >
          Fwens
        </Text>
        <Box w={'300px'} mt={-40} mb={10}>
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6, 1, 0.6],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <Image
              src={'/media/green-ghost-degen-weed-shop-fire-fwens.png'}
              width={2048}
              height={2048}
              alt={'Green Ghost - Degen Weed Shop - Weed Menu.'}
            />
          </motion.div>
        </Box>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link
          href={'/my-weed-solutions'}
          passHref
          title={'Green Ghost Fwen - My Weed'}
        >
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.color2.darker'}
            fontFamily={'CubicFive12'}
            mx={2}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              bgColor: 'ghostVerse.dark.lighter',
              color: 'ghostVerse.green.base',
            }}
          >
            <Box w={'120px'}>
              <Image
                src={'/media/green-ghost-grower-my-weed-solutions.webp'}
                width={408}
                height={408}
                alt={'Green Ghost Grower - My Weed Solutions.'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              My Weed
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link
          href={'/cosmic-temple-vibes'}
          passHref
          title={'Green Ghost Fwen - Cosmic Temple Vibes'}
        >
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.color2.darker'}
            fontFamily={'CubicFive12'}
            mx={2}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              bgColor: 'ghostVerse.dark.lighter',
              color: 'ghostVerse.green.base',
            }}
          >
            <Box w={'85px'}>
              <Image
                src={'/media/green-ghost-grower-cosmic-temple-vibes.png'}
                width={208}
                height={232}
                alt={'Green Ghost Grower - Cosmic Temple Vibes.'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              Cosmic Temple Vibes
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link
          href={'/buddy-bud-weed'}
          passHref
          title={'Green Ghost Fwen - Buddy Bud Weed'}
        >
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.color2.darker'}
            fontFamily={'CubicFive12'}
            mx={2}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              bgColor: 'ghostVerse.dark.lighter',
              color: 'ghostVerse.green.base',
            }}
          >
            <Box w={'100px'}>
              <Image
                src={'/media/green-ghost-grower-buddy-bud-weed.png'}
                width={253}
                height={253}
                alt={'Green Ghost Grower - Buddy Bud Weed.'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              Buddy Bud Weed
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link href={'/ohigho'} passHref title={'Green Ghost Fwen - Ohigho'}>
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.color2.darker'}
            fontFamily={'CubicFive12'}
            mx={2}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              bgColor: 'ghostVerse.dark.lighter',
              color: 'ghostVerse.green.base',
            }}
          >
            <Box w={'100px'}>
              <Image
                src={'/media/green-ghost-grower-ohigho.png'}
                width={253}
                height={253}
                alt={'Green Ghost Grower - Ohigho.'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              Ohigho
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
