import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const ButtonAddCart: FC<BoxItemProps> = ({ children }) => {
  return (
    <Link
      href={'/weed-delivery-phuket'}
      title={'Select your goodies and contact us to buy weed online'}
      passHref
    >
      <Box
        ml={'auto'}
        pos={'absolute'}
        left={2}
        bottom={-2}
        zIndex={10}
        color={'ghostVerse.green.base'}
        borderColor={'ghostVerse.green.base'}
        fontSize={18}
        borderWidth={1}
        borderRadius={'full'}
        bgColor={'ghostVerse.dark.lighter'}
        backdropFilter={'blur(3px)'}
        py={1}
        px={3}
        mb={4}
        display={'block'}
        width={'fit-content'}
        cursor={'pointer'}
        _hover={{
          bgColor: 'ghostVerse.green.base',
          color: 'black',
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default ButtonAddCart;
