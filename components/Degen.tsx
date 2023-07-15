import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { degens } from '../config/degens';
import { DegenItem } from './DegenItem';

export const Degen = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable] = useState(false);

  const filteredProducts = degens.filter((degen) => {
    if (!showUnavailable && degen.price === 999) {
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
        alignItems={'baseline'}
        mr={1}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box
          as={'h2'}
          mb={4}
          display={'inline-flex'}
          mr={'auto'}
          flexWrap={'wrap'}
          fontSize={30}
          fontFamily={'vt323'}
        >
          Concentrated weed for degen.
        </Box>
        <Box display={'flex'} mb={{ base: '4', lg: '0' }}>
          <Box mr={4}>
            <Select
              value={sortBy}
              onChange={handleSortChange}
              borderRadius={'0'}
              color={'ghostVerse.green.base'}
              borderColor={'black'}
              outline={'none'}
              p={0}
              cursor={'pointer'}
              fontFamily={'vt323'}
              fontSize={{ base: '2xl' }}
              _hover={{ borderColor: 'ghostVerse.green.base' }}
              _focusVisible={{ borderColor: 'ghostVerse.green.base' }}
              w={'fit-content'}
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
        {sortedProducts.map((degen) => (
          <DegenItem key={degen.slug} degen={degen} />
        ))}
      </Box>
    </Box>
  );
};
