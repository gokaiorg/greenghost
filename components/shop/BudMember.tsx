import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { BudItem } from './BudItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import MenuFilterShop from './elements/MenuFilterShop';
import WrapperShop from './elements/WrapperShop';
import WrapperInnerShop from './elements/WrapperInnerShop';
import { ListTitle } from './elements/ListTitle';

type DominanceOption = 'All' | 'Sativa' | 'Indica' | 'Hybrid';

export const BudMember = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredBuds = buds.filter((bud) => {
    if (!showUnavailable && bud.quantity === 0) {
      return false;
    }

    if (dominanceFilter !== 'All' && bud.dominance !== dominanceFilter) {
      return false;
    }

    if (bud.price !== 999) {
      return false;
    }

    return true;
  });

  const sortedBuds = [...filteredBuds].sort((a, b) => {
    switch (sortBy) {
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
    <Box mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Member Only Menu" />
        <WrapperInnerShop>
          <ListTitle title="Pre-order with a minimum of 10 grams." />
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
          </MenuFilterShop>
        </WrapperInnerShop>
      </WrapperShop>
      <Box display={'flex'} flexWrap={'wrap'}>
        {sortedBuds.map((bud) => (
          <BudItem key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
