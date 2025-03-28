import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { PreRollItem } from './PreRollItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import { ListTitle } from './elements/ListTitle';
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

export const PreRoll = () => {
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredBuds = buds
    .filter((bud) => {
      if (bud.price === 999 || bud.quantity === 0) {
        return false;
      }
      if (dominanceFilter !== 'All' && bud.dominance !== dominanceFilter) {
        return false;
      }
      return true;
    })
    .sort((a, b) => a.price - b.price); // Sort by price low to high

  const handleDominanceChange = (dominance: DominanceOption) => {
    setDominanceFilter((prevFilter) =>
      prevFilter === dominance ? 'All' : dominance
    );
  };

  return (
    <Box as={'section'} aria-labelledby="Pre Roll Joints Menu" mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Pre-rolls Menu" />
        <ListTitle title="On demand. +20THB on delivery. Free on store" />
      </WrapperShop>
      <Box
        as="ul"
        aria-label="Cannabis dominance filter options"
        display="inline-flex"
        flexWrap="wrap"
        listStyleType="none"
        my={2}
        p={0}
        fontFamily={'vt323'}
        w={'full'}
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
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Pre Roll Joints list"
        display={'flex'}
        flexWrap={'wrap'}
        mx={-0.5}
      >
        {filteredBuds.map((bud) => (
          <PreRollItem key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
