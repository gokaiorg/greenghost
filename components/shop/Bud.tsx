import { Box, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { BudItem } from './BudItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import MenuFilterShop from './elements/MenuFilterShop';
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
    mr={2}
    mb={2}
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
    p={2}
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

export const Bud = () => {
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredBuds = buds.filter((bud) => {
    if (!showUnavailable && (bud.quantity === 0 || bud.price === 999))
      return false;
    if (dominanceFilter !== 'All' && bud.dominance !== dominanceFilter)
      return false;
    return true;
  });

  const sortedBuds = filteredBuds.sort((a, b) => a.price - b.price);

  const handleDominanceChange = (dominance: DominanceOption) => {
    setDominanceFilter((prevFilter) =>
      prevFilter === dominance ? 'All' : dominance
    );
  };

  const handleShowUnavailableChange = () => {
    setShowUnavailable((prevValue) => !prevValue);
  };

  return (
    <Box as="section" aria-labelledby="Buds Menu" mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Buds Menu" />
        <ListTitle title="Buds price for 1 gram." />
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
        <Checkbox
          ml={4}
          colorScheme={'#13DE00'}
          isChecked={!showUnavailable}
          onChange={handleShowUnavailableChange}
          fontSize={'2xl'}
          py={4}
          fontFamily={'vt323'}
        >
          Hide Sold Out
        </Checkbox>
      </MenuFilterShop>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Buds Menu Strains list"
        display={'flex'}
        flexWrap={'wrap'}
        mx={-0.5}
      >
        {sortedBuds.map((bud) => (
          <BudItem key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
