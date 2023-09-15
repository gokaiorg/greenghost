import { Box } from '@chakra-ui/react';
import { growers } from '../config/growers';
import { GrowerItem } from './GrowerItem';

export const Grower = () => {
  return (
    <Box mb="10">
      <Box display={'flex'} flexWrap={'wrap'}>
        {growers.map((grower) => (
          <GrowerItem key={grower.slug} grower={grower} />
        ))}
      </Box>
    </Box>
  );
};
