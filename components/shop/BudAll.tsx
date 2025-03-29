import { Box, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { BudItemAll } from './BudItemAll';
import MenuFilterShop from './elements/MenuFilterShop';
import WrapperShop from './elements/WrapperShop';
import { IconSativa } from '../media/IconSativa';
import { IconHybrid } from '../media/IconHybrid';
import { IconIndica } from '../media/IconIndica';
import Link from 'next/link';

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

  // Shuffle the filtered buds
  const shuffledBuds = [...filteredBuds].sort(() => 0.5 - Math.random());

  // Get the first 25 random buds
  const sortedBuds = shuffledBuds.slice(0, 25);

  const handleDominanceChange = (dominance: DominanceOption) => {
    setDominanceFilter((prevFilter) =>
      prevFilter === dominance ? 'All' : dominance
    );
  };

  return (
    <Box as="section" aria-labelledby="All Cannabis Strains" mb="10">
      <WrapperShop>
        <Box
          as="h3"
          fontSize={{ base: '20', md: '24' }}
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
          ml={'auto'}
          mb={2}
          fontSize="xl"
          fontFamily={'vt323'}
          borderRadius={0}
          width="auto"
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
          _focus={{
            borderColor: 'ghostVerse.yellow.base',
            outline: 'none',
            boxShadow: 'none',
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
        {sortedBuds.map((bud) => (
          <BudItemAll key={bud.slug} bud={bud} />
        ))}
      </Box>
      <Link href={'/strains'} passHref>
        <Text
          as="span"
          display="inline-flex"
          fontFamily="CubicFive12"
          fontSize={{ base: 'md', md: 'lg' }}
          px={6}
          py={2}
          mt={5}
          mx="auto"
          borderWidth={1}
          borderColor="ghostVerse.green.base"
          bgColor="black"
          color="ghostVerse.green.base"
          _hover={{
            bgColor: 'ghostVerse.green.base',
            color: 'black',
          }}
        >
          More strains
        </Text>
      </Link>
    </Box>
  );
};
