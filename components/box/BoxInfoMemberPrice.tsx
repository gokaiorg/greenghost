import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface BoxProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxInfoMemberPrice: FC<BoxProps> = ({ children }) => {
  return (
    <Link
      href="/crypto-weed-shop-relax-and-earn"
      title="Crypto Weed Shop Relax And Earn"
      passHref
    >
      <Box
        display={'flex'}
        fontFamily={'CubicFive12'}
        justifyContent="end"
        fontSize={14}
        color="ghostVerse.grey.base"
        _hover={{
          color: 'ghostVerse.green.base',
        }}
      >
        <Box>member</Box>
        <Box display={'flex'} ml={4}>
          {children}
        </Box>
      </Box>
    </Link>
  );
};

export default BoxInfoMemberPrice;
