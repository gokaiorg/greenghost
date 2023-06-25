import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { products } from '../config/products';
import { BudItem } from './BudItem';

type DominanceOption = 'All' | 'Sativa' | 'Indica' | 'Hybrid';

export const BudMember = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredProducts = products.filter((product) => {
    if (!showUnavailable && product.quantity === 0) {
      return false;
    }

    if (dominanceFilter !== 'All' && product.dominance !== dominanceFilter) {
      return false;
    }

    if (product.price !== 666) {
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
      case 'sativaHighToLow':
        return Number(b.sativa) - Number(a.sativa);
      case 'sativaLowToHigh':
        return Number(a.sativa) - Number(b.sativa);
      case 'indicaHighToLow':
        return Number(b.indica) - Number(a.indica);
      case 'indicaLowToHigh':
        return Number(a.indica) - Number(b.indica);
      default:
        return 0;
    }
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(event.target.value);
  };

  const handleDominanceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDominanceFilter(event.target.value as DominanceOption);
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
          Latest buds for members only.
        </Box>
        <Box
          display={'flex'}
          mb={{ base: '4', lg: '0' }}
          ml={{ base: '0', lg: '4' }}
        >
          <Box ml={4}>
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
              <option value="sativaHighToLow">Sativa: High to Low</option>
              <option value="sativaLowToHigh">Sativa: Low to High</option>
              <option value="indicaHighToLow">Indica: High to Low</option>
              <option value="indicaLowToHigh">Indica: Low to High</option>
            </Select>
          </Box>
          <Box ml={4}>
            <Select
              value={dominanceFilter}
              onChange={handleDominanceChange}
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
              <option value="All">All Dominance</option>
              <option value="Sativa">Sativa</option>
              <option value="Indica">Indica</option>
              <option value="Hybrid">Hybrid</option>
            </Select>
          </Box>
        </Box>
      </Box>

      <Box display={'flex'} flexWrap={'wrap'}>
        {sortedProducts.map((product) => (
          <BudItem key={product.slug} product={product} />
        ))}
      </Box>
    </Box>
  );
};
