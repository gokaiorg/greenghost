import { Box } from '@chakra-ui/react';
import { degens } from '../../config/degens';
import { DegenItem } from './DegenItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';

export const Degen = () => {
  const filteredProducts = degens
    .filter((degen) => degen.price !== 999)
    .sort((a, b) => Number(a.price) - Number(b.price));

  return (
    <Box as={'section'} aria-labelledby="Cannabis Concentrate Menu" mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Degen Menu" />
        <ListTitle title="Concentrated weed for degen." />
      </WrapperShop>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Cannabis Concentrate Menu list"
        display={'flex'}
        flexWrap={'wrap'}
        mx={-0.5}
      >
        {filteredProducts.map((degen) => (
          <DegenItem key={degen.slug} degen={degen} />
        ))}
      </Box>
    </Box>
  );
};
