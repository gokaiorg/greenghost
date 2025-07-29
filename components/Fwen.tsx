import { FwenItem } from './FwenItem';
import { fwen } from '../config/fwens';
import { Box, Text } from '@chakra-ui/react';
import { ImgPartners } from './media/ImgPartners';
import Image from 'next/image';
import Link from 'next/link';

// config/dispensaries.ts
export const dispensaries = [
  // {
  //   href: 'https://www.bangkokpost.com/thailand/pr/2470009/best-cannabis-shops-in-phuket-2025',
  //   title: 'Best Cannabis Shops in Phuket 2025 - Bangkok Post',
  //   imageSrc: '/media/green-ghost-top-dispensary-bangkok-post.webp',
  //   alt: 'Green Ghost Top Dispensary Phuket Thailand - Bangkok Post',
  //   label: 'Bangkok Post',
  // },
  {
    href: 'https://weed.th/best-dispensaries-in-thailand',
    title: 'Top Dispensaries In Thailand - Best Weed In Thailand - WEED.TH',
    imageSrc: '/media/green-ghost-top-dispensary-weed-th.webp',
    alt: 'Green Ghost Top Dispensary Phuket Thailand - Weed.th',
    label: 'Weed.th',
  },
  {
    href: 'https://www.cleverthai.com/best-cannabis-shops-in-phuket/',
    title:
      "Phuket's Finest: Exploring the Top 11 Cannabis Destinations [2025 ]",
    imageSrc: '/media/green-ghost-top-dispensary-cleverthai.webp',
    alt: 'Green Ghost Top Dispensary Phuket Thailand - CleverThai',
    label: 'Cleverthai',
  },
  {
    href: 'https://www.thailandnomads.com/cannabis-shops-phuket/',
    title: '25 Cannabis Shops & Cafes to Buy Weed in Phuket 2025',
    imageSrc: '/media/green-ghost-top-dispensary-thailand-nomads.webp',
    alt: 'Green Ghost Top Dispensary Phuket Thailand - Thailand Nomads',
    label: 'Thailand Nomads',
  },
  {
    href: 'https://thai.news/news/thailand/top-20-cannabis-shops-where-to-buy-weed-in-phuket-vol-1-2024',
    title:
      'Top 20 Cannabis Shops: Where to Buy Weed in Phuket Vol 1, 2024 – THAI.NEWS – Thailand Breaking News',
    imageSrc: '/media/green-ghost-top-dispensary-thai-news.webp',
    alt: 'Green Ghost Top Dispensary Phuket Thailand - Thai News',
    label: 'Thai News',
  },
];

export const Fwen = () => {
  if (!Array.isArray(fwen)) return null;
  return (
    <Box
      display={'flex'}
      mt={16}
      mb={4}
      flexWrap={'wrap'}
      alignItems={'stretch'}
      justifyContent={'end'}
    >
      <Box display={'flex'} flexDir={{ base: 'column', md: 'row' }}>
        <Box
          as="section"
          aria-label="Top Dispensary in Phuket Thailand 2025"
          display={'flex'}
          flexDir={'column'}
          w={'100%'}
          alignItems={'start'}
        >
          <Text
            as={'h3'}
            fontSize={{ base: 20, lg: 28 }}
            lineHeight={1}
            fontFamily={'CubicFive12'}
            mb={{ base: 2 }}
            textAlign={'left'}
          >
            Top dispensary in Phuket Thailand 2025
          </Text>
          <Text
            as={'p'}
            fontSize={{ base: 26, lg: 36 }}
            lineHeight={1}
            fontFamily={'vt323'}
            mb={4}
          >
            See where Green Ghost stands among the best dispensaries in Phuket
            Thailand in 2025.
          </Text>
          <Box
            as="ul"
            listStyleType={'none'}
            aria-label="Listing of best dispensaries in 2025 list"
            display={'flex'}
            flexWrap={'wrap'}
          >
            {dispensaries.map((dispensary, index) => (
              <Box
                as="li"
                key={index}
                aria-label={`${dispensary.label} cannabis stores listing 2025`}
              >
                <Link href={dispensary.href} passHref title={dispensary.title}>
                  <Box
                    as="span"
                    h={'100%'}
                    fontSize={{ base: 'xl' }}
                    color={'ghostVerse.color2.darker'}
                    fontFamily={'CubicFive12'}
                    mx={2}
                    textAlign={'center'}
                    p={2}
                    display={'flex'}
                    justifyContent={'center'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    transition={'all .3s'}
                    _hover={{
                      bgColor: 'ghostVerse.dark.lighter',
                      color: 'ghostVerse.green.base',
                    }}
                  >
                    <Box w={'60px'} h={'60px'}>
                      <Image
                        src={dispensary.imageSrc}
                        width={60}
                        height={60}
                        alt={dispensary.alt}
                        sizes="(max-width: 60px) 60px, 60px"
                        style={{ objectFit: 'cover' }}
                        quality={75}
                      />
                    </Box>
                    <Text
                      as={'h4'}
                      fontSize={{ base: 10, md: 10 }}
                      lineHeight={'12px'}
                    >
                      {dispensary.label}
                    </Text>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box
          display={'flex'}
          flexDir={'column'}
          w={'100%'}
          alignItems={'end'}
          mt={{ base: '4', md: '0' }}
        >
          <Box as={'span'} w={{ base: '100%' }}>
            <ImgPartners />
          </Box>
          <Text
            as={'h3'}
            fontSize={{ base: 20, lg: 28 }}
            lineHeight={1}
            fontFamily={'CubicFive12'}
            my={{ base: 2 }}
            textAlign={'right'}
          >
            Our premium cannabis partners
          </Text>
          <Box
            mx={2}
            fontFamily={'vt323'}
            fontSize={{ base: 'xl' }}
            lineHeight={1}
            px={{ base: 4, md: 0 }}
            pb={{ base: 2, md: 2 }}
            color={'ghostVerse.green.base'}
          >
            <Link title="Weed Growers in Thailand" href="/weed-grower" passHref>
              Best Cannabis Growers
            </Link>
          </Box>
          <Box
            mx={2}
            fontFamily={'vt323'}
            fontSize={{ base: 'xl' }}
            lineHeight={1}
            px={{ base: 4, md: 0 }}
            pb={{ base: 2, md: 2 }}
            color={'ghostVerse.green.base'}
          >
            <Link
              title="Premium Cannabis Seeds Partners"
              href="/seeds"
              passHref
            >
              Get some seeds
            </Link>
          </Box>
        </Box>
      </Box>
      {fwen.map((homeHeroItem, index) => (
        <FwenItem key={index} {...homeHeroItem} />
      ))}
    </Box>
  );
};
