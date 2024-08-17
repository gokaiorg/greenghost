import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = () => {
  const router = useRouter();

  const isActive = (href: string): boolean => {
    return router.asPath === href;
  };

  return (
    <Box
      marginLeft={'auto'}
      marginRight={{ base: 'auto', md: 0 }}
      py={{ base: '4', lg: '0' }}
      display={'flex'}
      fontFamily={'CubicFive12'}
    >
      <Link
        href={'/weed-shop'}
        title={'Green Ghost 🌿👻 Weed Shop Premium Cannabis Buds Menu'}
        passHref
      >
        <Box
          as={'span'}
          ml={4}
          display={'flex'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
          color={isActive('/weed-shop') ? 'ghostVerse.green.base' : 'inherit'}
        >
          Shop
        </Box>
      </Link>
      <Link
        href={'/contact'}
        title={'Green Ghost 🌿👻 Contact Our Weed Shop Team To Order'}
        passHref
      >
        <Box
          as={'span'}
          ml={4}
          display={'flex'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
          color={isActive('/contact') ? 'ghostVerse.green.base' : 'inherit'}
        >
          Contact
        </Box>
      </Link>
      <Link
        href="/weed-shop-near-me"
        title={'Green Ghost 🌿👻 Best Weed Shop Near Me in Phuket'}
        passHref
      >
        <Box
          as={'span'}
          ml={4}
          display={'flex'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
          color={
            isActive('/weed-shop-near-me') ? 'ghostVerse.green.base' : 'inherit'
          }
        >
          Map
        </Box>
      </Link>
    </Box>
  );
};
