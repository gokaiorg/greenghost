import { FwenItem } from './FwenItem';
import { fwen } from '../config/fwens';
import { Box, Text } from '@chakra-ui/react';
import { ImgPartners } from './media/ImgPartners';
import Image from 'next/image';
import Link from 'next/link';

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
            Top dispensary in Phuket Thailand
          </Text>
          <Text
            as={'p'}
            fontSize={{ base: 26, lg: 36 }}
            lineHeight={1}
            fontFamily={'vt323'}
            mb={4}
          >
            See where Green Ghost stands among the best dispensaries in Phuket
            Thailand.
          </Text>
          <Box display={'flex'} flexWrap={'wrap'}>
            <Link
              href="https://weed.th/best-dispensaries-in-thailand"
              passHref
              title="Green Ghost Top Dispensary Phuket Thailand - Weed.th"
            >
              <Box
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
                    src="/media/green-ghost-top-dispensary-weed-th.webp"
                    width={60}
                    height={60}
                    alt="Green Ghost Top Dispensary Phuket Thailand - Weed.th"
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
                  Weed.th
                </Text>
              </Box>
            </Link>
            <Link
              href="https://www.cleverthai.com/best-cannabis-shops-in-phuket/"
              passHref
              title="Green Ghost Top Dispensary Phuket Thailand - CleverThai"
            >
              <Box
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
                    src="/media/green-ghost-top-dispensary-cleverthai.webp"
                    width={60}
                    height={60}
                    alt="Green Ghost Top Dispensary Phuket Thailand - CleverThai"
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
                  Cleverthai
                </Text>
              </Box>
            </Link>
            <Link
              href="https://www.thailandnomads.com/cannabis-shops-phuket/"
              passHref
              title="Green Ghost Top Dispensary Phuket Thailand - Thailand Nomads"
            >
              <Box
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
                    src="/media/green-ghost-top-dispensary-thailand-nomads.webp"
                    width={60}
                    height={60}
                    alt="Green Ghost Top Dispensary Phuket Thailand - Thailand Nomads"
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
                  Thailand Nomads
                </Text>
              </Box>
            </Link>
            <Link
              href="https://thai.news/news/thailand/top-13-cannabis-shops-where-to-buy-weed-in-phangnga-vol-7-2024"
              passHref
              title="Green Ghost Top Dispensary Phuket Thailand - Thai News"
            >
              <Box
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
                    src="/media/green-ghost-top-dispensary-thai-news.webp"
                    width={60}
                    height={60}
                    alt="Green Ghost Top Dispensary Phuket Thailand - Thai News"
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
                  Thai News
                </Text>
              </Box>
            </Link>
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
        </Box>
      </Box>
      {fwen.map((homeHeroItem, index) => (
        <FwenItem key={index} {...homeHeroItem} />
      ))}
    </Box>
  );
};
