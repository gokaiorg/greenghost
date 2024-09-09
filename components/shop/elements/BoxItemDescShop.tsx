import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxItemDescShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      as="ul"
      aria-label="Product Details"
      listStyleType={'none'}
      display={'flex'}
      flexDirection={'column'}
      flex={'1'}
      marginLeft={{ base: 0 }}
      marginTop={{ base: 2 }}
    >
      {children}
    </Box>
  );
};

export default BoxItemDescShop;
