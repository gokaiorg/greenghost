import { Box } from '@chakra-ui/react';
import { gadgets } from '../../config/gadgets';
import { GadgetItem } from './GadgetItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';

export const Gadget = () => {
  const filteredProducts = gadgets
    .filter((gadget) => gadget.price !== 999)
    .sort((a, b) => Number(a.price) - Number(b.price));

  return (
    <Box as={'section'} aria-labelledby="Cannabis Accessories Menu" mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Gadgets Menu" />
        <ListTitle title="Elevate your smoking experience." />
      </WrapperShop>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Cannabis Accessories Menu list"
        display={'flex'}
        flexWrap={'wrap'}
        mx={-0.5}
      >
        {filteredProducts.map((gadget) => (
          <GadgetItem key={gadget.slug} gadget={gadget} />
        ))}
      </Box>
    </Box>
  );
};
