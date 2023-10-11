import { Text } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxItemTitleShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Text
      as={'h2'}
      fontFamily={'CubicFive12'}
      fontSize={{ base: 16 }}
      display={'flex'}
      flexDirection={'column'}
      marginRight={1}
    >
      {children}
    </Text>
  );
};

export default BoxItemTitleShop;
