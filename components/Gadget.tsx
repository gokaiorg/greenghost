import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { gadgets } from '../config/gadgets';
import { GadgetItem } from './GadgetItem';

export const Gadget = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable] = useState(false);

  const filteredProducts = gadgets.filter((gadget) => {
    if (!showUnavailable && gadget.price === 666) {
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
          Elevate your smoking experience.
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
            </Select>
          </Box>
        </Box>
      </Box>

      <Box display={'flex'} flexWrap={'wrap'}>
        {sortedProducts.map((gadget) => (
          <GadgetItem key={gadget.slug} gadget={gadget} />
        ))}
      </Box>
    </Box>
  );
};
