import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoGrow: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      display={'flex'}
      bgColor={'ghostVerse.green.transparent'}
      backdropFilter={'blur(3px)'}
      width="full"
      p={4}
      flexDirection={{ base: 'column', md: 'row' }}
      mb={4}
      fontFamily={'CubicFive12'}
      justifyContent={'center'}
    >
      {children}
    </Box>
  );
};

export default BoxInfoGrow;
