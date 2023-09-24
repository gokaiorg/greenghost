import NextLink from 'next/link';
import { Box } from '@chakra-ui/react';
import { ImgEarth } from './media/ImgEarth';
import { ImgG } from './media/ImgG';

export const Logo = () => {
  return (
    <Box mx={{ base: 'auto', md: 'inherit' }} mb={{ base: '4', md: '0' }}>
      <NextLink href="/">
        <Box display={'flex'} alignItems={'center'}>
          <ImgEarth />
          <Box width={{ base: '200px', md: '200px' }}>
            <ImgG />
          </Box>
        </Box>
      </NextLink>
    </Box>
  );
};
