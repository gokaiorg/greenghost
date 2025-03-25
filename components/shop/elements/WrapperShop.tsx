import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const WrapperShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      as="header"
      display={'flex'}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'start', md: 'center' }}
      lineHeight={1}
    >
      {children}
    </Box>
  );
};

export default WrapperShop;
