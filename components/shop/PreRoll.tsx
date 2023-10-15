import { Box, Select, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { PreRollItem } from './PreRollItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import MenuFilterShop from './elements/MenuFilterShop';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';
import WrapperInnerShop from './elements/WrapperInnerShop';

type DominanceOption = 'All' | 'Sativa' | 'Indica' | 'Hybrid';

export const PreRoll = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredBuds = buds.filter((bud) => {
    if (!showUnavailable && (bud.quantity === 0 || bud.price === 999)) {
      return false;
    }

    if (dominanceFilter !== 'All' && bud.dominance !== dominanceFilter) {
      return false;
    }

    return true;
  });

  const sortedBuds = [...filteredBuds].sort((a, b) => {
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

  const handleShowUnavailableChange = () => {
    setShowUnavailable((prevValue) => !prevValue);
  };

  return (
    <Box mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Pre-rolls Menu" />
        <WrapperInnerShop>
          <ListTitle title="Pre-Roll on demand. 1 gram." />
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
            <Box w={'full'} mb={{ base: '2' }}>
              <Box display={'none'}>
                <label htmlFor={'dominance'}>Dominance</label>
              </Box>
              <Select
                id={'dominance'}
                value={dominanceFilter}
                onChange={handleDominanceChange}
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
                <option value="All">All Dominance</option>
                <option value="Sativa">Sativa</option>
                <option value="Indica">Indica</option>
                <option value="Hybrid">Hybrid</option>
              </Select>
            </Box>
            <Checkbox
              ml={{ base: '4', lg: 'auto' }}
              my={{ base: '2', lg: '0' }}
              colorScheme="green"
              display={'none'}
              whiteSpace={'nowrap'}
              checked={showUnavailable}
              onChange={handleShowUnavailableChange}
              _checked={{ color: 'ghostVerse.green.base' }}
            >
              All Buds
            </Checkbox>
          </MenuFilterShop>
        </WrapperInnerShop>
      </WrapperShop>
      <Box display={'flex'} flexWrap={'wrap'} mx={-0.5}>
        {sortedBuds.map((bud) => (
          <PreRollItem key={bud.slug} bud={bud} />
          // Use 'bud.slug' to access the slug property
        ))}
      </Box>
    </Box>
  );
};
