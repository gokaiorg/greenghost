import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { BudItemAllStrains } from './BudItemAllStrains';
import MenuFilterShop from './elements/MenuFilterShop';
import WrapperShop from './elements/WrapperShop';
import { IconSativa } from '../media/IconSativa';
import { IconHybrid } from '../media/IconHybrid';
import { IconIndica } from '../media/IconIndica';

type DominanceOption = 'All' | 'Sativa' | 'Indica' | 'Hybrid';

const filterOptions: { label: DominanceOption; icon: JSX.Element }[] = [
  { label: 'Sativa', icon: <IconSativa /> },
  { label: 'Hybrid', icon: <IconHybrid /> },
  { label: 'Indica', icon: <IconIndica /> },
];

const FilterButton = ({
  label,
  icon,
  isActive,
  onClick,
}: {
  label: DominanceOption;
  icon: JSX.Element;
  isActive: boolean;
  onClick: () => void;
}) => (
  <Box
    as="li"
    aria-label={`${label} filter button`}
    mr={1}
    mb={1}
    border={'1px'}
    borderColor={
      isActive ? `ghostVerse.dominance.${label.toLowerCase()}` : 'black'
    }
    backgroundColor={isActive ? 'black' : 'black'}
    color={
      isActive
        ? `ghostVerse.dominance.${label.toLowerCase()}`
        : `ghostVerse.dominance.${label.toLowerCase()}`
    }
    onClick={onClick}
    p={1}
    cursor={'pointer'}
    fontSize={'2xl'}
    _hover={{ backgroundColor: 'black' }}
    display="flex"
    alignItems="center"
  >
    {icon}
    <Box ml={2}>{label}</Box>
  </Box>
);

export const BudAllStrains = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredBuds = buds
    .filter((bud) => {
      const matchesSearch = bud.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesDominance =
        dominanceFilter === 'All' || bud.dominance === dominanceFilter;
      return matchesSearch && matchesDominance;
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  const handleDominanceChange = (dominance: DominanceOption) => {
    setDominanceFilter((prevFilter) =>
      prevFilter === dominance ? 'All' : dominance
    );
  };

  return (
    <Box as="section" aria-labelledby="All Cannabis Strains" mb="10">
      <WrapperShop>
        <Box
          as="h2"
          fontSize={{ base: 24, lg: 30 }}
          lineHeight={1}
          fontFamily={'CubicFive12'}
        >
          All the best cannabis strains
        </Box>
      </WrapperShop>
      <MenuFilterShop>
        <Box
          as="ul"
          aria-label="Cannabis dominance filter options"
          display="inline-flex"
          flexWrap="wrap"
          listStyleType="none"
          m={0}
          p={0}
          fontFamily={'vt323'}
        >
          {filterOptions.map(({ label, icon }) => (
            <FilterButton
              key={label}
              label={label}
              icon={icon}
              isActive={dominanceFilter === label}
              onClick={() => handleDominanceChange(label)}
            />
          ))}
        </Box>
        <Input
          placeholder="Search strain..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ml={'auto'} // Margin left for spacing
          mb={2} // Margin bottom for spacing
          fontSize="xl"
          fontFamily={'vt323'}
          borderRadius={0}
          width="auto" // Adjust width as needed
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
          _focus={{
            borderColor: 'ghostVerse.yellow.base',
            outline: 'none',
            boxShadow: 'none', // Add this line to remove the focus ring
          }}
        />
      </MenuFilterShop>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Best Cannabis Strains list"
        display={'flex'}
        flexWrap={'wrap'}
        mx={-0.5}
      >
        {filteredBuds.map((bud) => (
          <BudItemAllStrains key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
