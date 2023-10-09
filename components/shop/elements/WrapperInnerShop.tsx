import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const WrapperInnerShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      ml={{ base: '0', lg: '4' }}
      display={'flex'}
      flex={1}
      w={'full'}
      alignItems={{ base: 'start', lg: 'center' }}
    >
      {children}
    </Box>
  );
};

export default WrapperInnerShop;
