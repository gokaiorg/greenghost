import { Box, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { BudItemAll } from './BudItemAll';
import { HomeSectionTitle } from '../HomeSectionTitle';
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

export const BudAll = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredBuds = buds.filter((bud) => {
    const matchesSearch = bud.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDominance =
      dominanceFilter === 'All' || bud.dominance === dominanceFilter;
    return matchesSearch && matchesDominance;
  });

  const sortedBuds = filteredBuds.sort(
    (a, b) => a.name.localeCompare(b.name) // Sort by name alphabetically
  );

  const handleDominanceChange = (dominance: DominanceOption) => {
    setDominanceFilter((prevFilter) =>
      prevFilter === dominance ? 'All' : dominance
    );
  };

  return (
    <Box as="section" aria-labelledby="All Cannabis Strains" mb="10">
      <WrapperShop>
        <HomeSectionTitle title="All the best cannabis strains" />
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
          placeholder="Search buds..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          ml={'auto'} // Margin left for spacing
          mb={2} // Margin bottom for spacing
          fontSize="md"
          width="auto" // Adjust width as needed
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
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
        {sortedBuds.map((bud) => (
          <BudItemAll key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
