import { Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';

export const StrainWeek = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {isOpen && (
        <Box
          color={'white'}
          maxW={'360px'}
          fontFamily={'vt323'}
          p={4}
          m={2}
          pos={'fixed'}
          zIndex={10}
          bottom={0}
          right={0}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
        >
          <Button
            size="xl"
            onClick={handleClose}
            colorScheme={'ghostVerse.green.base'}
            color={'ghostVerse.blue.base'}
            position="absolute"
            top={-4}
            right={1}
            fontSize={{ base: '50' }}
          >
            x
          </Button>
          {/* <Text
            display={'flex'}
            alignItems={'center'}
            fontFamily={'CubicFive12'}
            fontWeight={'bold'}
            as={'h2'}
            fontSize={{ base: '16' }}
            color={'ghostVerse.green.base'}
          >
            <Box w={8} h={8} mr={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Box>
            Strain of the week!
          </Text>
          <Text
            mb={4}
            fontFamily={'vt323'}
            fontSize={{ base: '24' }}
            lineHeight={1}
          >
            Discover the{' '}
            <Link
              href="/weed-shop/purple-queen"
              title="Purple Queen only 300 THB this week!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                Purple Queen
              </Box>
            </Link>{' '}
            for only 300 THB.
          </Text> */}
          <Text
            display={'flex'}
            alignItems={'center'}
            fontFamily={'CubicFive12'}
            fontWeight={'bold'}
            as={'h2'}
            fontSize={{ base: '16' }}
            color={'ghostVerse.orange.light'}
          >
            <Box w={8} h={8} mr={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </Box>
            New strains
          </Text>
          <Text
            mb={4}
            fontFamily={'vt323'}
            fontSize={{ base: '24' }}
            lineHeight={1}
          >
            Try our new{' '}
            <Link
              href="/weed-shop/mommys-milk"
              title="New weed Strain - Mommy's Milk!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                Mommy's Milk
              </Box>
            </Link>{' '}
            strains now!
          </Text>
          <Text
            display={'flex'}
            alignItems={'center'}
            fontFamily={'CubicFive12'}
            fontWeight={'bold'}
            as={'h2'}
            fontSize={{ base: '16' }}
            color={'ghostVerse.orange.light'}
          >
            <Box w={8} h={8} mr={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </Box>
            New Gadgets
          </Text>
          <Text
            mb={4}
            fontFamily={'vt323'}
            fontSize={{ base: '24' }}
            lineHeight={1}
          >
            Elevate your experience with{' '}
            <Link
              href="/weed-shop-gadgets/slimjim-rolling-papers"
              title="New weed Gadget - SlimJim Rolling Paper!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                SlimJim Rolling Papers
              </Box>
            </Link>
            ,{' '}
            <Link
              href="/weed-shop-gadgets/small-metal-grinder"
              title="New weed Gadget - Small Metal Grinder!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                Small Metal Grinder
              </Box>
            </Link>{' '}
            and{' '}
            <Link
              href="/weed-shop-gadgets/classic-ice-bong"
              title="New weed Gadget - Classic Ice Bong!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                Classic Ice Bong
              </Box>
            </Link>{' '}
            today!
          </Text>
          {/* <Text
            display={'flex'}
            alignItems={'center'}
            fontFamily={'CubicFive12'}
            fontWeight={'bold'}
            as={'h2'}
            fontSize={{ base: '16' }}
            color={'ghostVerse.orange.light'}
          >
            <Box w={8} h={8} mr={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                />
              </svg>
            </Box>
            New grower!
          </Text>
          <Text
            mb={4}
            fontFamily={'vt323'}
            fontSize={{ base: '24' }}
            lineHeight={1}
          >
            Enjoy amazing{' '}
            <Link
              href="/weed-grower/sweed-dreams"
              title="New weed Grower - Sweed Dreams!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                Sweed Dreams
              </Box>
            </Link>{' '}
            strains at Green ghost.
          </Text> */}
          <Text
            display={'flex'}
            alignItems={'center'}
            fontFamily={'CubicFive12'}
            fontWeight={'bold'}
            as={'h2'}
            fontSize={{ base: '16' }}
            color={'ghostVerse.red.base'}
          >
            <Box w={8} h={8} mr={2}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </Box>
            Sold Out
          </Text>
          <Text
            mb={4}
            fontFamily={'vt323'}
            fontSize={{ base: '24' }}
            lineHeight={1}
          >
            Say goodbye to the{' '}
            <Link
              href="/weed-shop/forbidden-fruit"
              title="Strain Sold Out - Fordidden Fruit!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                Fordidden Fruit
              </Box>
            </Link>
            ,{' '}
            <Link
              href="/weed-shop/pink-sunset"
              title="Strain Sold Out - Pink Sunset!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                Pink Sunset
              </Box>
            </Link>{' '}
            And{' '}
            <Link
              href="/weed-shop/white-widow"
              title="Strain Sold Out - White Widow!"
              passHref
            >
              <Box as={'span'} color={'ghostVerse.blue.base'}>
                White Widow
              </Box>
            </Link>
            . We&apos;ll miss you...
          </Text>
        </Box>
      )}
    </>
  );
};
