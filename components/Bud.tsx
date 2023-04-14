import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { products } from '../config/products';
import { BudItem } from './BudItem';

type DominanceOption = 'All' | 'Sativa Dominant' | 'Indica Dominant' | 'Hybrid';

export const Bud = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredProducts = products.filter((product) => {
    if (!showUnavailable && product.price === 'undefined') {
      return false;
    }

    if (dominanceFilter !== 'All' && product.dominance !== dominanceFilter) {
      return false;
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'priceLowToHigh') {
      return Number(a.price) - Number(b.price);
    } else {
      return Number(b.price) - Number(a.price);
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
      <Box display="flex" alignItems="baseline" mr={4} flexDirection={{ base: "column", lg: "row" }}>
        <Box
          as="h2"
          borderColor="ghostVerse.color2.base"
          bgColor="ghostVerse.dark.lighter"
          borderWidth={1}
          backdropFilter="blur(3px)"
          p={4}
          mb={4}
          display="inline-flex"
          marginRight="auto"
          flexWrap="wrap"
          fontSize={30}
        >
          Buds price for 1 gram.
        </Box>
        <Box display="flex" mb={{ base: "4", lg: "0" }}>
          <Box mr={4}>
            <Select value={sortBy} onChange={handleSortChange}
              borderRadius="0"
              borderColor="ghostVerse.green.base"
              color="ghostVerse.green.base"
              outline="none">
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </Select>
          </Box>
          <Box>
            <Select
              value={dominanceFilter}
              onChange={handleDominanceChange}
              borderRadius="0"
              borderColor="ghostVerse.green.base"
              color="ghostVerse.green.base"
              outline="none"
            >
              <option value="All">Dominance</option>
              <option value="Sativa Dominant">Sativa Dominant</option>
              <option value="Indica Dominant">Indica Dominant</option>
              <option value="Hybrid">Hybrid</option>
            </Select>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexWrap="wrap">
        {sortedProducts.map((product) => (
          <BudItem key={product.slug} product={product} />
        ))}
      </Box>
    </Box>
  );
};
