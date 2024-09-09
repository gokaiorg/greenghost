import { Box } from '@chakra-ui/react';
import { edibles } from '../../config/edibles';
import { EdibleItem } from './EdibleItem';
import { HomeSectionTitle } from './../HomeSectionTitle';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';

export const Edible = () => {
  const filteredProducts = edibles.filter((edible) => edible.price !== 999);

  const sortedProducts = [...filteredProducts].sort(
    (a, b) => Number(a.price) - Number(b.price)
  );

  return (
    <Box as={'section'} aria-labelledby="THC Cannabis Edibles Menu" mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Edibles Menu" />
        <ListTitle title="Edibles price per serving." />
      </WrapperShop>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Cannabis Edibles Menu list"
        display={'flex'}
        flexWrap={'wrap'}
        mx={-0.5}
      >
        {sortedProducts.map((edible) => (
          <EdibleItem key={edible.slug} edible={edible} />
        ))}
      </Box>
    </Box>
  );
};
