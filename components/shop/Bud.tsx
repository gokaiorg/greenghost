// Bud.tsx
import { Box, Button, Checkbox } from '@chakra-ui/react';
import { useState } from 'react';
import { buds } from '../../config/buds';
import { BudItem } from './BudItem';
import { HomeSectionTitle } from '../HomeSectionTitle';
import MenuFilterShop from './elements/MenuFilterShop';
import { ListTitle } from './elements/ListTitle';
import WrapperShop from './elements/WrapperShop';
import WrapperInnerShop from './elements/WrapperInnerShop';
import { IconSativa } from '../media/IconSativa';
import { IconHybrid } from '../media/IconHybrid';
import { IconIndica } from '../media/IconIndica';

type DominanceOption = 'All' | 'Sativa' | 'Indica' | 'Hybrid';

export const Bud = () => {
  const [showUnavailable, setShowUnavailable] = useState(true);
  const [dominanceFilter, setDominanceFilter] =
    useState<DominanceOption>('All');

  const filteredBuds = buds.filter((bud) => {
    if (!showUnavailable && (bud.quantity === 0 || bud.price === 999)) {
      return false;
    }

    if (dominanceFilter !== 'All' && bud.dominance !== dominanceFilter) {
      return false;
    }

    return true;
  });

  // Sort buds by price from low to high
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
    <Box mb="10">
      <WrapperShop>
        <HomeSectionTitle title="Buds Menu" />
        <WrapperInnerShop>
          <ListTitle title="Buds price for 1 gram." />
        </WrapperInnerShop>
      </WrapperShop>
      <MenuFilterShop>
        <Box
          w={'full'}
          mb={{ base: '2' }}
          display={'flex'}
          flexWrap={'wrap'}
          alignItems={'center'}
        >
          <Button
            border={'1px'}
            borderColor={
              dominanceFilter === 'Sativa'
                ? 'ghostVerse.dominance.sativa'
                : 'black'
            }
            backgroundColor={dominanceFilter === 'Sativa' ? 'black' : 'black'}
            color={
              dominanceFilter === 'Sativa'
                ? 'ghostVerse.dominance.sativa'
                : 'ghostVerse.dominance.sativa'
            }
            onClick={() => handleDominanceChange('Sativa')}
            mr={2}
            px={2}
            py={4}
            fontSize={'2xl'}
            _hover={{
              backgroundColor: 'black',
            }}
          >
            <IconSativa />
            <Box ml={2}>{'Sativa'}</Box>
          </Button>
          <Button
            border={'1px'}
            borderColor={
              dominanceFilter === 'Hybrid'
                ? 'ghostVerse.dominance.hybrid'
                : 'black'
            }
            backgroundColor={dominanceFilter === 'Hybrid' ? 'black' : 'black'}
            color={
              dominanceFilter === 'Hybrid'
                ? 'ghostVerse.dominance.hybrid'
                : 'ghostVerse.dominance.hybrid'
            }
            onClick={() => handleDominanceChange('Hybrid')}
            mr={2}
            px={2}
            py={4}
            fontSize={'2xl'}
            _hover={{
              backgroundColor: 'black',
            }}
          >
            <IconHybrid />
            <Box ml={2}>{'Hybrid'}</Box>
          </Button>
          <Button
            border={'1px'}
            borderColor={
              dominanceFilter === 'Indica'
                ? 'ghostVerse.dominance.indica'
                : 'black'
            }
            backgroundColor={dominanceFilter === 'Indica' ? 'black' : 'black'}
            color={
              dominanceFilter === 'Indica'
                ? 'ghostVerse.dominance.indica'
                : 'ghostVerse.dominance.indica'
            }
            onClick={() => handleDominanceChange('Indica')}
            mr={2}
            px={2}
            py={4}
            fontSize={'2xl'}
            _hover={{
              backgroundColor: 'black',
            }}
          >
            <IconIndica />
            <Box ml={2}>{'Indica'}</Box>
          </Button>
          <Checkbox
            ml={4}
            colorScheme={'#13DE00'}
            isChecked={!showUnavailable}
            onChange={handleShowUnavailableChange}
          >
            Hide Sold Out
          </Checkbox>
        </Box>
      </MenuFilterShop>
      <Box display={'flex'} flexWrap={'wrap'} mx={-0.5}>
        {sortedBuds.map((bud) => (
          <BudItem key={bud.slug} bud={bud} />
        ))}
      </Box>
    </Box>
  );
};
