import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoQuantity: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      display={'flex'}
      justifyContent="end"
      fontSize={'lg'}
      color="ghostVerse.red.base"
      mt={2}
    >
      {children}
    </Box>
  );
};

export default BoxInfoQuantity;
