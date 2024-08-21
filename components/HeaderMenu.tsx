import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';

export const HeaderMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <Box
      as="header"
      aria-label="Site Header"
      display={'flex'}
      alignItems={'center'}
      flexWrap={'wrap'}
      py={{ base: '2', md: '4' }}
    >
      <Logo />
      {children}
    </Box>
  );
};
