import { Box } from '@chakra-ui/react';
import { FC } from 'react';

interface BoxItemProps {
  children: React.ReactNode; // Use React.ReactNode to accept any valid JSX as children
}

const BoxItemPriceShop: FC<BoxItemProps> = ({ children }) => {
  return (
    <Box
      as="li"
      listStyleType={'none'}
      aria-label={`Buds Menu Strain Price`}
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
      fontFamily={'CubicFive12'}
      lineHeight={1}
      itemProp="offers"
      itemScope
      itemType="https://schema.org/Offer"
    >
      {children}
    </Box>
  );
};

export default BoxItemPriceShop;
