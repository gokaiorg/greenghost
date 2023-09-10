import { Box, Select, Checkbox, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { products } from '../config/products';
import { BudItem } from './BudItem';

type DominanceOption = 'All' | 'Sativa' | 'Indica' | 'Hybrid';
type GrowerOption = 'All';
('Buddy Bud Weed');
('Cosmic Temple Vibes');
('My Weed Solutions');
('Ohigho');

export const Bud = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');
  const [growerFilter, setGrowerFilter] = useState<GrowerOption>('All');

  const filteredProducts = products.filter((product) => {
    if (!showUnavailable && (product.quantity === 0 || product.price === 999)) {
      return false;
    }

    if (dominanceFilter !== 'All' && product.dominance !== dominanceFilter) {
      return false;
    }
    if (growerFilter !== 'All' && product.grower !== growerFilter) {
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

  const handleGrowerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGrowerFilter(event.target.value as GrowerOption);
  };

  const handleShowUnavailableChange = () => {
    setShowUnavailable((prevValue) => !prevValue);
  };

  return (
    <Box mb="10">
      <Box
        as={'h2'}
        mb={4}
        display={'inline-flex'}
        mr={'auto'}
        flexWrap={'wrap'}
        fontSize={26}
        fontFamily={'vt323'}
      >
        Buds price for 1 gram.
      </Box>
      <Box
        display={'flex'}
        width={'100%'}
        alignItems={'end'}
        mb={4}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box mr={4}>
          <Text
            as={'label'}
            fontFamily={'CubicFive12'}
            fontSize={14}
            color={'ghostVerse.grey.base'}
          >
            Filters
          </Text>
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
            fontSize={24}
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
        <Box mr={4}>
          <Text
            as={'label'}
            fontFamily={'CubicFive12'}
            fontSize={14}
            color={'ghostVerse.grey.base'}
          >
            Dominance
          </Text>
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
            fontSize={24}
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
        <Box>
          <Text
            as={'label'}
            fontFamily={'CubicFive12'}
            fontSize={14}
            color={'ghostVerse.grey.base'}
          >
            Grower
          </Text>
          <Select
            value={growerFilter}
            onChange={handleGrowerChange}
            borderRadius={'0'}
            color={'ghostVerse.green.base'}
            borderColor={'black'}
            outline={'none'}
            p={0}
            cursor={'pointer'}
            fontFamily={'vt323'}
            fontSize={24}
            _hover={{ borderColor: 'ghostVerse.green.base' }}
            _focusVisible={{ borderColor: 'ghostVerse.green.base' }}
            w={'fit-content'}
          >
            <option value="All">All Growers</option>
            <option value="Buddy Bud Weed">Buddy Bud Weed</option>
            <option value="Cosmic Temple Vibes">Cosmic Temple Vibes</option>
            <option value="My Weed Solutions">My Weed Solutions</option>
            <option value="Ohigho">Ohigho</option>
          </Select>
        </Box>
        <Checkbox
          ml={{ base: '4', lg: 'auto' }}
          my={{ base: '2', lg: '0' }}
          pl={4}
          colorScheme="green"
          display={'flex'}
          checked={showUnavailable}
          onChange={handleShowUnavailableChange}
          _checked={{ color: 'ghostVerse.green.base' }}
        >
          All Buds
        </Checkbox>
      </Box>

      <Box display={'flex'} flexWrap={'wrap'}>
        {sortedProducts.map((product) => (
          <BudItem key={product.slug} product={product} />
        ))}
      </Box>
    </Box>
  );
};
