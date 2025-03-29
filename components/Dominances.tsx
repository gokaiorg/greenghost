import { Box, Text } from '@chakra-ui/react';
import { ImgSativa } from './media/ImgSativa';
import { ImgHybrid } from './media/ImgHybrid';
import { ImgIndica } from './media/ImgIndica';
import Image from 'next/image';

const dominanceData = [
  {
    image: <ImgSativa />,
    title: 'Sativa Strains',
    color: 'ghostVerse.dominance.sativa',
    description:
      'Sativas are your go-to for that daytime boost! Imagine a friend who always shows up with energy drinks and party vibes—yeah, that’s a sativa. Perfect for a sunny day or when you need a creative kick, these strains are like your personal hype squad!',
  },
  {
    image: <ImgHybrid />,
    title: 'Hybrid Strains',
    color: 'ghostVerse.dominance.hybrid',
    description:
      "Hybrids are the ultimate mix-tape of weed. One puff can spark a dance party, and the next can lead to a deep chat. Perfect for those indecisive days when you can't decide whether to hit the town or chill at home.",
  },
  {
    image: <ImgIndica />,
    title: 'Indica Strains',
    color: 'ghostVerse.dominance.indica',
    description:
      "Indicas are like a warm hug after a long day. Perfect for evenings spent lounging. They turn your living room into a paradise of peace and comfort—just don't forget to set the snacks within reach!",
  },
];

export const Dominances = () => {
  return (
    <>
      <Text
        as="h2"
        fontSize={{ base: '20', md: '30' }}
        fontFamily={'CubicFive12'}
      >
        What Is Weed, The Basics
      </Text>
      <Text
        as="p"
        fontSize={{ base: '2xl' }}
        lineHeight={1}
        fontFamily="vt323"
        mb={10}
      >
        Welcome to Weed 101—where we break down the green stuff that’s been
        sparking curiosity (and joints) for centuries. So, what is weed,
        exactly? It’s cannabis, a leafy plant with a knack for chilling you out,
        hyping you up, or even helping you cash in with crypto. From its
        psychoactive THC vibes to its mellow CBD glow, this isn’t just your
        garden-variety herb—it’s a cultural icon with roots deeper than a sativa
        stalk. Let’s dig into the basics and light up your knowledge!
      </Text>
      <Box
        as="ul"
        aria-labelledby="Cannabis Dominance List"
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={'top'}
        gap={2}
        mb={2}
      >
        {dominanceData.map(({ image, title, color, description }) => (
          <Box
            as="li"
            aria-labelledby={title}
            key={title}
            bgColor={'ghostVerse.dark.lighter'}
            p={1}
            display="flex"
            flexDirection="column"
            alignItems="top"
            fontFamily={'CubicFive12'}
            gap={2}
            w={{ base: '100%', md: '33,333333%' }}
          >
            {image}
            <Text as="h3" fontSize="xl" display={'flex'} gap={2} color={color}>
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
      <Box
        as="ul"
        aria-labelledby="Psychoactive List"
        listStyleType={'none'}
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={'stretch'}
        gap={2}
        mb={10}
      >
        <Box as="li" bgColor={'ghostVerse.dark.lighter'} p={2}>
          <Text
            as="h4"
            fontSize="xl"
            fontFamily={'CubicFive12'}
            color={'ghostVerse.grey.darker'}
          >
            THC: The High Maker
          </Text>
          <Text
            as="p"
            fontSize={{ base: '2xl' }}
            lineHeight={1}
            fontFamily="vt323"
          >
            Psychoactive compound in weed that sparks euphoria and creativity.
          </Text>
        </Box>
        <Box as="li" bgColor={'ghostVerse.dark.lighter'} p={2}>
          <Text
            as="h4"
            fontSize="xl"
            fontFamily={'CubicFive12'}
            color={'ghostVerse.grey.darker'}
          >
            CBD: The Chill Factor
          </Text>
          <Text
            as="p"
            fontSize={{ base: '2xl' }}
            lineHeight={1}
            fontFamily="vt323"
          >
            Non-psychoactive, calms you down, eases pain, no high included.
          </Text>
        </Box>
      </Box>
      <Text
        as="h2"
        fontSize={{ base: '20', md: '30' }}
        fontFamily={'CubicFive12'}
      >
        Strains, Flavors, and Vibes
      </Text>
      <Box
        display={'flex'}
        flexDirection={{ base: 'column', md: 'row' }}
        gap={2}
      >
        <Box w={{ base: '100%', md: '40%' }}>
          <Image
            src="/media/strains-flavors-vibes-weed-shop-green-ghost.webp"
            width={1366}
            height={1366}
            alt="Strains Flavors Vibes Weed Shop Green Ghost"
            title="Strains Flavors Vibes Weed Shop Green Ghost"
            quality={75}
          />
        </Box>
        <Box w={{ base: '100%', md: '60%' }} mb={10}>
          <Text
            as="p"
            fontSize={{ base: '2xl' }}
            lineHeight={1}
            fontFamily="vt323"
            mb={10}
          >
            {
              'Strains are the rockstars of the weed world—unique breeds of cannabis crafted by nature and growers to deliver specific highs, tastes, and feelings. Think of them as the playlists of pot: sativa strains crank up the energy like a dance floor banger, indica strains mellow you out like a lo-fi chill track, and hybrids remix the best of both into a vibe all their own. But it’s not just about the buzz—it’s the flavors that make every puff a party.'
            }
          </Text>
          <Text
            as="p"
            fontSize={{ base: '2xl' }}
            lineHeight={1}
            fontFamily="vt323"
            mb={10}
          >
            {
              'Imagine zesty citrus sativa strains, like Super Lemon Haze, waking up your taste buds with a Mango Sticky Rice, sunny kick that screams ‘let’s get moving!’ Then there’s the earthy pine indica strains—think Northern Lights—rolling in deep, woodsy notes that ground you into a cozy, forest-floor nap. Hybrids? They’re the flavor mashups: sweet berry blends like Pink Zkittlez hit you with juicy, candy-like goodness, while spicy diesel strains like Sour Diesel bring a bold, funky edge. You might even catch creamy hints in strains like Scotty 2 Hotty, or skunky, herbal punches from classics like OG Kush.'
            }
          </Text>
          <Text
            as="p"
            fontSize={{ base: '2xl' }}
            lineHeight={1}
            fontFamily="vt323"
            mb={10}
          >
            {
              'Each strain’s vibe is a mood-lifter—whether it’s giggling with friends, melting into the couch, or sparking crypto-trading genius, there’s a flavor and feel for every moment. Dive in, taste the rainbow, and find your dank destiny!'
            }
          </Text>
        </Box>
      </Box>
    </>
  );
};
