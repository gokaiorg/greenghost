import { Box, Select, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { BudItem } from './BudItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import MenuFilterShop from './elements/MenuFilterShop';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';
import WrapperInnerShop from './elements/WrapperInnerShop';

type DominanceOption = 'All' | 'Sativa' | 'Indica' | 'Hybrid';
type GrowerOption = 'All';
('Buddy Bud Weed');
('Cosmic Temple Vibes');
('My Weed Solutions');
('Ohigho');
('Sweed dreams');

export const Bud = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');
  const [growerFilter, setGrowerFilter] = useState<GrowerOption>('All');

  const filteredBuds = buds.filter((bud) => {
    if (!showUnavailable && (bud.quantity === 0 || bud.price === 999)) {
      return false;
    }

    if (dominanceFilter !== 'All' && bud.dominance !== dominanceFilter) {
      return false;
    }
    if (growerFilter !== 'All' && bud.grower !== growerFilter) {
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

  const handleGrowerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGrowerFilter(event.target.value as GrowerOption);
  };

  const handleShowUnavailableChange = () => {
    setShowUnavailable((prevValue) => !prevValue);
  };

  return (
    <Box mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Buds Menu" />
        <WrapperInnerShop>
          <ListTitle title="Buds price for 1 gram." />
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
            <Box w={'full'} mb={{ base: '2' }}>
              <Box display={'none'}>
                <label htmlFor={'grower'}>Grower</label>
              </Box>
              <Select
                id={'grower'}
                value={growerFilter}
                onChange={handleGrowerChange}
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
                <option value="All">All Growers</option>
                <option value="Buddy Bud Weed">Buddy Bud Weed</option>
                <option value="Cosmic Temple Vibes">Cosmic Temple Vibes</option>
                <option value="My Weed Solutions">My Weed Solutions</option>
                <option value="Ohigho">Ohigho</option>
                <option value="Sweed Dreams">Sweed Dreams</option>
              </Select>
            </Box>
            <Checkbox
              ml={{ base: '4' }}
              my={{ base: '2' }}
              colorScheme="green"
              display={'flex'}
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
          <BudItem key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
