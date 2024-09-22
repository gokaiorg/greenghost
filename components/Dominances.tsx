import { Box, Text } from '@chakra-ui/react';
import { IconHybrid } from './media/IconHybrid';
import { IconSativa } from './media/IconSativa';
import { IconIndica } from './media/IconIndica';

const dominanceData = [
  {
    icon: <IconSativa />,
    title: 'Sativa Strains',
    description:
      'Sativas are your go-to for that daytime boost! Imagine a friend who always shows up with energy drinks and party vibes—yeah, that’s a sativa. Perfect for a sunny day or when you need a creative kick, these strains are like your personal hype squad!',
  },
  {
    icon: <IconHybrid />,
    title: 'Hybrid Strains',
    description:
      "Hybrids are the ultimate mix-tape of weed. One puff can spark a dance party, and the next can lead to a deep chat. Perfect for those indecisive days when you can't decide whether to hit the town or chill at home.",
  },
  {
    icon: <IconIndica />,
    title: 'Indica Strains',
    description:
      "Indicas are like a warm hug after a long day. Perfect for evenings spent lounging. They turn your living room into a paradise of peace and comfort—just don't forget to set the snacks within reach!",
  },
];

export const Dominances = () => {
  return (
    <Box
      as="section"
      aria-labelledby="Cannabis Dominance"
      display={'flex'}
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems={'stretch'}
      mb={10}
      gap={2}
    >
      {dominanceData.map(({ icon, title, description }) => (
        <Box
          as="li"
          aria-labelledby={'Cannabis Dominance'}
          key={title}
          bgColor={'ghostVerse.dark.lighter'}
          p={1}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          fontFamily={'CubicFive12'}
          mb={10}
          gap={2}
        >
          <Text as="h2" fontSize="xl" display={'flex'} gap={2}>
            {icon}
            {title}
          </Text>
          <Text
            as="p"
            fontSize={{ base: '2xl' }}
            lineHeight={1}
            fontFamily="vt323"
          >
            {description}
          </Text>
        </Box>
      ))}
    </Box>
  );
};
