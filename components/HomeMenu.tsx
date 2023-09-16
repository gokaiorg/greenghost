import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconMenu } from './IconMenu';

export const HomeMenu = () => {
  return (
    <Box
      display={'flex'}
      mt={{ base: 10, lg: 20 }}
      mb={10}
      flexWrap={'wrap'}
      alignItems={'stretch'}
      mx={-1}
    >
      <Box display={'flex'} flexDir={'column'} w={'100%'} alignItems={'center'}>
        <Box w={{ base: '100px', lg: '200px' }}>
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
            <IconMenu />
          </motion.div>
        </Box>
        <Text
          as={'h3'}
          fontSize={{ base: 24, lg: 34 }}
          mx={'auto'}
          fontFamily={'CubicFive12'}
          mt={{ base: 5, lg: 10 }}
          mb={{ base: 5, lg: 10 }}
          textAlign={'center'}
        >
          Weed Shop Menu
        </Text>
      </Box>
      <Box
        width={{ base: '50%', lg: '20%' }}
        mb={{ base: 1, lg: 2 }}
        minHeight={'170px'}
      >
        <Link href={'/weed-shop'} passHref title="Weed Shop Menu Buds">
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={{ base: 0.5, lg: 1 }}
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
              />
            </Box>
            <Box
              as={'h4'}
              w={'100%'}
              fontSize={{ base: 18, md: 22 }}
              mt={'auto'}
            >
              Buds
            </Box>
          </Box>
        </Link>
      </Box>
      <Box
        width={{ base: '50%', lg: '20%' }}
        mb={{ base: 1, lg: 2 }}
        minHeight={'170px'}
      >
        <Link
          href={'/weed-shop-pre-rolls'}
          passHref
          title="Weed Shop Menu Pre Rolls"
        >
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={{ base: 0.5, lg: 1 }}
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
            <Box w={'28px'}>
              <Image
                src="/media/green-ghost-degen-weed-shop-menu-pre-rolls.png"
                width={380}
                height={494}
                alt="Weed Shop Menu - Pre-Rolls."
              />
            </Box>
            <Box
              as={'h4'}
              w={'100%'}
              fontSize={{ base: 18, md: 22 }}
              mt={'auto'}
            >
              Pre-Rolls
            </Box>
          </Box>
        </Link>
      </Box>
      <Box
        width={{ base: '50%', lg: '20%' }}
        mb={{ base: 1, lg: 2 }}
        minHeight={'170px'}
      >
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
            mx={{ base: 0.5, lg: 1 }}
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
              />
            </Box>
            <Box
              as={'h4'}
              w={'100%'}
              fontSize={{ base: 18, md: 22 }}
              mt={'auto'}
            >
              Edibles
            </Box>
          </Box>
        </Link>
      </Box>
      <Box
        width={{ base: '50%', lg: '20%' }}
        mb={{ base: 1, lg: 2 }}
        minHeight={'170px'}
      >
        <Link href={'/weed-shop-degen'} passHref title={'Weed Shop Menu Degen'}>
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={{ base: 0.5, lg: 1 }}
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
              />
            </Box>
            <Box
              as={'h4'}
              w={'100%'}
              fontSize={{ base: 18, md: 22 }}
              mt={'auto'}
            >
              Degen
            </Box>
          </Box>
        </Link>
      </Box>
      <Box
        width={{ base: '50%', lg: '20%' }}
        mb={{ base: 1, lg: 2 }}
        minHeight={'170px'}
      >
        <Link href="/weed-shop-gadgets" passHref title="Weed Shop Menu Gadgets">
          <Box
            h={'100%'}
            fontSize={{ base: 'xl' }}
            color={'ghostVerse.green.base'}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.grey.base'}
            borderWidth={1}
            mx={{ base: 0.5, lg: 1 }}
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
                alt="Weed Shop Menu - Gadgets."
              />
            </Box>
            <Box
              as={'h4'}
              w={'100%'}
              fontSize={{ base: 18, md: 22 }}
              mt={'auto'}
            >
              Gadgets
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
