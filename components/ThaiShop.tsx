import { Box, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { thaishops } from '../config/thaishops';
import { ThaiShopItem } from './ThaiShopItem';

type CityOption = 'All' | 'Rawai' | 'Karon' | 'Phuket Town' | 'Patong';

export const ThaiShop = () => {
  const [cityFilter, setCityFilter] = useState<CityOption>('All');

  // Create a Set to track unique shop IDs
  const shopIds = new Set<string>();

  const filteredProducts = thaishops.filter((thaishop) => {
    if (cityFilter !== 'All' && thaishop.city !== cityFilter) {
      return false;
    }

    // Check if the shop ID is already in the Set; skip duplicates
    if (shopIds.has(thaishop.map)) {
      return false;
    }

    // Add the shop ID to the Set
    shopIds.add(thaishop.map);

    return true;
  });

  filteredProducts.sort((a, b) => a.city.localeCompare(b.city));

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCityFilter(event.target.value as CityOption);
  };

  return (
    <Box mb="10">
      <Box
        display={'flex'}
        width={'100%'}
        mb={4}
        alignItems={{ base: 'start', lg: 'center' }}
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        <Box w={'full'} mb={{ base: '2' }}>
          <Box
            fontFamily={'CubicFive12'}
            fontSize={14}
            color={'ghostVerse.grey.base'}
            display={'none'}
          >
            <label htmlFor={'city'}>City</label>
          </Box>
          <Select
            id={'city'}
            value={cityFilter}
            onChange={handleCityChange}
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
            w={{ base: '100%' }}
          >
            <option value="All">Thailand</option>
            <option value="Karon">Karon</option>
            <option value="Patong">Patong</option>
            <option value="Phuket Town">Phuket Town</option>
            <option value="Rawai">Rawai</option>
          </Select>
        </Box>
      </Box>
      <Box display={'flex'} flexWrap={'wrap'}>
        {filteredProducts.map((thaishop) => (
          <ThaiShopItem key={thaishop.map} thaishop={thaishop} />
        ))}
      </Box>
    </Box>
  );
};
