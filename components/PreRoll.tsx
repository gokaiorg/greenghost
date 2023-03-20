import { Box, Text, SimpleGrid } from '@chakra-ui/react';
import { PreRollItem } from './PreRollItem';
import { preroll } from '../config/dappUi';
import { ImgQuestion } from './ImgQuestion';
import { ImgDollar } from './ImgDollar';
import { ImgPercent } from './ImgPercent';

export const PreRoll = () => {
  if (!Array.isArray(preroll)) return null;

  return (
    <Box
      as="div"
      color="white"
      fontSize={{ base: '3xl' }}
      borderColor="ghostVerse.color2.base"
      bgColor="ghostVerse.dark.lighter"
      borderWidth={1}
      backdropFilter="blur(3px)"
      mt={5}
      mb={6}
      p={4}
      mr="auto"
      fontFamily="vt323"
    >
      <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
        Looking for a convenient and hassle-free way to enjoy your favorite
        strains
        <ImgQuestion />
      </Text>
      Look no further than Green Garden! Our selection of pre-rolled joints
      allows you to indulge in the variety of your choice with ease. Whether
      you're looking for a quick hit on the go or just prefer the convenience of
      a pre-rolled joint, we've got you covered.
      <br />
      <br />
      <Text as="h2" fontWeight="black" fontSize="4xl" marginBottom={4}>
        And the best part
        <ImgQuestion /> Our prices are just as affordable as buying bud by the
        gram.
      </Text>
      For example, a 0.5 gram joint of Poison Dream is just 125THB, while a 1
      gram joint of Snoop Punch will only set you back 900THB. So why wait?
      Browse our selection of buds today and find your new favorite way to enjoy
      cannabis.
    </Box>
  );
};
