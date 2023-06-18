import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { edibles } from '../config/edibles';
import { EdibleItem } from './EdibleItem';

export const Edible = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable] = useState(false);

  const filteredProducts = edibles.filter((edible) => {
    if (!showUnavailable && edible.price === 666) {
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
    <Box mt={4} mb="10">
      <Box
        display={'flex'}
        alignItems="baseline"
        mr={1}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box
          as={'h2'}
          borderColor={'ghostVerse.color2.base'}
          bgColor={'ghostVerse.dark.lighter'}
          borderWidth={1}
          backdropFilter={'blur(3px)'}
          p={4}
          mb={4}
          display={'inline-flex'}
          mr={'auto'}
          flexWrap={'wrap'}
          fontSize={30}
        >
          Edibles price per serving.
        </Box>
        <Box display={'flex'} mb={{ base: '4', lg: '0' }}>
          <Box mr={4}>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              borderRadius="0"
              borderColor={'ghostVerse.green.base'}
              color={'ghostVerse.green.base'}
              outline="none"
            >
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="THCHighToLow">THC: High to Low</option>
              <option value="THCLowToHigh">THC: Low to High</option>
            </Select>
          </Box>
        </Box>
      </Box>

      <Box display={'flex'} flexWrap={'wrap'}>
        {sortedProducts.map((edible) => (
          <EdibleItem key={edible.slug} edible={edible} />
        ))}
      </Box>
    </Box>
  );
};
