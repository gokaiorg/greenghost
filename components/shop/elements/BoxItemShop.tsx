import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxItemShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      as="div"
      lineHeight={1}
      p={1}
      pos={'relative'}
      fontWeight={'bold'}
      fontSize={{ base: 'md', md: 'lg' }}
      bgColor={'ghostVerse.dark.lighter'}
      display={'flex'}
      flexDirection={{ base: 'column' }}
      height={'100%'}
      whiteSpace={{ base: 'normal' }}
      position={'relative'}
      _hover={{
        bgColor: 'ghostVerse.green.transparent',
      }}
      transition={'all .3s'}
    >
      {children}
    </Box>
  );
};

export default BoxItemShop;
