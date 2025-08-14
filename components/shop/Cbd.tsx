import { Box, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import { cbds } from '../../config/cbds';
import { CbdItem } from './CbdItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import MenuFilterShop from './elements/MenuFilterShop';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';
import { IconSativa } from '../media/IconSativa';
import { IconHybrid } from '../media/IconHybrid';
import { IconIndica } from '../media/IconIndica';

type DominanceOption = 'All' | 'Flowers' | 'Concentrates' | 'Oils' | 'Gummies';

const filterOptions: { label: DominanceOption; icon: JSX.Element }[] = [
  { label: 'Flowers', icon: <IconSativa /> },
  { label: 'Concentrates', icon: <IconHybrid /> },
  { label: 'Oils', icon: <IconIndica /> },
  { label: 'Gummies', icon: <IconIndica /> },
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
    borderColor={isActive ? `ghostVerse.green.base` : 'black'}
    backgroundColor={isActive ? 'black' : 'black'}
    color={isActive ? `ghostVerse.green.base` : `ghostVerse.green.base`}
    onClick={onClick}
    p={1}
    cursor={'pointer'}
    fontSize={'2xl'}
    _hover={{ backgroundColor: 'black' }}
    display="flex"
    alignItems="center"
  >
    <Box ml={2}>{label}</Box>
  </Box>
);

export const Cbd = () => {
  const [showUnavailable, setShowUnavailable] = useState(false);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredCbds = cbds.filter((cbd) => {
    if (!showUnavailable && cbd.quantity === 0) return false;
    if (dominanceFilter !== 'All' && cbd.dominance !== dominanceFilter)
      return false;
    return true;
  });

  const sortedCbds = filteredCbds.sort((a, b) => {
    if (a.quantity === 0 && b.quantity > 0) return 1; // Sold-out cbds appear after available ones
    if (a.quantity > 0 && b.quantity === 0) return -1; // Available cbds appear before sold-out ones
    return a.price - b.price; // Sort by price within each group
  });

  const handleDominanceChange = (dominance: DominanceOption) => {
    setDominanceFilter((prevFilter) =>
      prevFilter === dominance ? 'All' : dominance
    );
  };

  const handleShowUnavailableChange = () => {
    setShowUnavailable((prevValue) => !prevValue);
  };

  return (
    <Box as="section" aria-labelledby="Cbd France" mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Cbd France" />
        <ListTitle title="For orders in France only." />
      </WrapperShop>
      <MenuFilterShop>
        <Box
          as="ul"
          aria-label="Menu Filters List"
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
      </MenuFilterShop>
      <Box
        as="ul"
        listStyleType={'none'}
        aria-label="Cbds Menu Strains list"
        display={'flex'}
        flexWrap={'wrap'}
        mx={-0.5}
      >
        {sortedCbds.map((cbd) => (
          <CbdItem key={cbd.slug} cbd={cbd} />
        ))}
      </Box>
    </Box>
  );
};
