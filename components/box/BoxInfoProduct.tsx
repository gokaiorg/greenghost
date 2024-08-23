import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoProduct: FC<BoxProps> = ({ children }) => {
  return (
    <Box
      as="section"
      aria-labelledby="Strain Pricing and Characteristics"
      display={'flex'}
      flexDirection={{ base: 'row-reverse', md: 'row-reverse' }}
      alignItems={'start'}
      lineHeight={1}
      mb={4}
    >
      {children}
    </Box>
  );
};

export default BoxInfoProduct;
