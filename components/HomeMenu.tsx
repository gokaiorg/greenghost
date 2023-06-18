import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const HomeMenu = () => {
  return (
    <Box
      display={'flex'}
      mt={20}
      mb={10}
      flexWrap={'wrap'}
      alignItems={'stretch'}
      mx={-2}
    >
      <Box display={'flex'} flexDir={'column'} w={'100%'} alignItems={'center'}>
        <Box w={'200px'}>
          <motion.div
            animate={{
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0,
            }}
          >
            <Image
              src="/media/green-ghost-degen-weed-shop-menu.png"
              width={100}
              height={100}
              alt="Green Ghost - Degen Weed Shop - Weed Menu."
              layout={'responsive'}
            />
          </motion.div>
        </Box>
        <Text
          as={'h3'}
          fontSize={'4xl'}
          mx={'auto'}
          fontFamily={'CubicFive12'}
          mt={10}
          mb={10}
          textAlign={'center'}
        >
          Weed Shop Menu
        </Text>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link href={'/weed-shop'} passHref title="Weed Shop Menu Buds">
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={2}
            bgColor={'ghostVerse.dark.lighter'}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
            }}
          >
            <Box w={'74px'}>
              <Image
                src="/media/green-ghost-degen-weed-shop-menu-buds.png"
                width={380}
                height={494}
                alt="Weed Shop Menu - Buds."
                layout={'responsive'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              Buds
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link
          href={'/weed-shop-edibles'}
          passHref
          title={'Weed Shop Menu Edibles'}
        >
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={2}
            bgColor={'ghostVerse.dark.lighter'}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
            }}
          >
            <Box w={'64px'}>
              <Image
                src="/media/green-ghost-degen-weed-shop-menu-edibles.png"
                width={418}
                height={608}
                alt="Weed Shop Menu - Edibles."
                layout={'responsive'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              Edibles
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link href={'/weed-shop-degen'} passHref title={'Weed Shop Menu Degen'}>
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={2}
            bgColor={'ghostVerse.dark.lighter'}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
            }}
          >
            <Box w={'25px'} my={'auto'}>
              <Image
                src="/media/green-ghost-degen-weed-shop-menu-degen.png"
                width={1200}
                height={600}
                alt="Weed Shop Menu - Degen."
                layout={'responsive'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              Degen
            </Box>
          </Box>
        </Link>
      </Box>
      <Box width={{ base: '100%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
        <Link
          href="/weed-shop-pre-rolled"
          passHref
          title="Weed Shop Menu Pre Rolled"
        >
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={2}
            bgColor={'ghostVerse.dark.lighter'}
            textAlign={'center'}
            p={4}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            transition={'all .3s'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
            }}
          >
            <Box w={'55px'}>
              <Image
                src="/media/green-ghost-degen-weed-shop-menu-gadgets.webp"
                width={342}
                height={1290}
                alt="Weed Shop Menu - Pre Rolled."
                layout={'responsive'}
              />
            </Box>
            <Box as={'h2'} w={'100%'} fontSize={{ base: '2xl' }} mt={'auto'}>
              Gadgets
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
