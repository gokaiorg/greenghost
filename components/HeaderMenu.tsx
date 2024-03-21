import { FC, PropsWithChildren } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Logo } from './Logo';
import Link from 'next/link';

export const HeaderMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexWrap={'wrap'}
      py={{ base: '2', md: '4' }}
    >
      <Logo />
      <Box mr={{ base: 'auto', md: '2' }} ml={{ base: 'auto' }}>
        <Link
          href="https://greenghostweed.shop"
          title="Green Ghost Weed Shop"
          passHref
        >
          <Text
            display={'inline-flex'}
            color={'ghostVerse.green.base'}
            borderColor={'ghostVerse.green.base'}
            fontSize={{ base: 'xl' }}
            borderWidth={1}
            bgColor="transparent"
            backdropFilter={'blur(3px)'}
            p={3}
            mb={2}
            fontFamily={'CubicFive10'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
              color: 'ghostVerse.green.base',
            }}
          >
            Order Online Soon
          </Text>
        </Link>
      </Box>
      {children}
    </Box>
  );
};
