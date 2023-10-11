import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxItemPriceShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      marginLeft={'auto'}
      whiteSpace={'nowrap'}
      mb={2}
      position={'absolute'}
      zIndex={1}
      right={1}
      top={2}
      background={'ghostVerse.dark.lighter'}
      padding={'0.5rem'}
      color={'ghostVerse.green.base'}
    >
      {children}
    </Box>
  );
};

export default BoxItemPriceShop;
