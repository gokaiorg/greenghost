import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { edibles } from '../../config/edibles';
import { EdibleItem } from './EdibleItem';
import { HomeSectionTitle } from './../HomeSectionTitle';
import MenuFilterShop from './elements/MenuFilterShop';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';
import WrapperInnerShop from './elements/WrapperInnerShop';

export const Edible = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable] = useState(false);

  const filteredProducts = edibles.filter((edible) => {
    if (!showUnavailable && edible.price === 999) {
      return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'priceLowToHigh':
        return Number(a.price) - Number(b.price);
      case 'priceHighToLow':
        return Number(b.price) - Number(a.price);
      case 'THCHighToLow':
        return Number(b.THC) - Number(a.THC);
      case 'THCLowToHigh':
        return Number(a.THC) - Number(b.THC);
      default:
        return 0;
    }
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  return (
    <Box mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Edibles Menu" />
        <WrapperInnerShop>
          <ListTitle title="Edibles price per serving." />
          <MenuFilterShop>
            <Box w={'full'} mb={{ base: '2' }}>
              <Box display={'none'}>
                <label htmlFor={'filters'}>Filters</label>
              </Box>
              <Select
                id={'filters'}
                value={sortBy}
                onChange={handleSortChange}
                borderRadius={'0'}
                color={'ghostVerse.green.base'}
                borderColor={'black'}
                outline={'none'}
                p={0}
                cursor={'pointer'}
                _hover={{ borderColor: 'ghostVerse.green.base' }}
                _focusVisible={{ borderColor: 'ghostVerse.green.base' }}
                w={{ base: '100%' }}
              >
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="THCHighToLow">THC: High to Low</option>
                <option value="THCLowToHigh">THC: Low to High</option>
                <option value="sativaHighToLow">Sativa: High to Low</option>
                <option value="sativaLowToHigh">Sativa: Low to High</option>
                <option value="indicaHighToLow">Indica: High to Low</option>
                <option value="indicaLowToHigh">Indica: Low to High</option>
              </Select>
            </Box>
          </MenuFilterShop>
        </WrapperInnerShop>
      </WrapperShop>
      <Box display={'flex'} flexWrap={'wrap'}>
        {sortedProducts.map((edible) => (
          <EdibleItem key={edible.slug} edible={edible} />
        ))}
      </Box>
    </Box>
  );
};
