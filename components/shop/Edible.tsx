import { Box, MenuButton, Menu, MenuList, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { edibles } from '../../config/edibles';
import { EdibleItem } from './EdibleItem';
import { HomeSectionTitle } from './../HomeSectionTitle';

export const Edible = () => {
  const [sortBy, setSortBy] = useState('priceLowToHigh');
  const [showUnavailable] = useState(false);

  const filteredProducts = edibles.filter((edible) => {
    if (!showUnavailable && edible.price === 999) {
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
    <Box mb="10">
      <Box
        display={'flex'}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'start', lg: 'center' }}
        lineHeight={1}
      >
        <HomeSectionTitle title="Edibles Menu" />
        <Box
          ml={{ base: '0', lg: '4' }}
          display={'flex'}
          flex={1}
          w={'full'}
          alignItems={{ base: 'start', lg: 'center' }}
        >
          <Box
            as={'h2'}
            display={'inline-flex'}
            mr={'auto'}
            mb={2}
            flexWrap={'wrap'}
            fontSize={26}
            fontFamily={'vt323'}
          >
            Edibles price per serving.
          </Box>
          <Menu>
            <MenuButton w={8} h={8} color={'ghostVerse.green.base'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </MenuButton>
            <MenuList
              marginLeft={'auto'}
              p={4}
              borderRadius={0}
              background={'black'}
              borderColor={'ghostVerse.green.base'}
            >
              <Box
                display={'flex'}
                width={'100%'}
                alignItems={{ base: 'start', lg: 'center' }}
                flexDirection={{ base: 'column', lg: 'row' }}
              >
                <Box w={'full'} mr={{ base: '0', lg: '4' }}>
                  <Box
                    fontFamily={'CubicFive12'}
                    fontSize={14}
                    color={'ghostVerse.grey.base'}
                    display={'none'}
                  >
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
                    fontFamily={'vt323'}
                    fontSize={24}
                    _hover={{ borderColor: 'ghostVerse.green.base' }}
                    _focusVisible={{ borderColor: 'ghostVerse.green.base' }}
                    w={{ base: '100%', lg: 'fit-content' }}
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
              </Box>
            </MenuList>
          </Menu>
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
