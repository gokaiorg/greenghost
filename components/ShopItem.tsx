import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Shop } from '../config/shops';
import { IconShop } from './media/IconShop';
import { IconClock } from './media/IconClock';
import { IconPin } from './media/IconPin';
import { IconsReview } from './media/IconsReview';

type ShopItemProps = {
  shop: Shop;
};

export const ShopItem = ({ shop }: ShopItemProps) => {
  return (
    <Box
      as="li"
      display="flex"
      flexDirection="column"
      mb={4}
      w={{ base: '100%', md: '32%' }}
      bg="ghostVerse.dark.lighter"
      backdropFilter="blur(3px)"
      p={4}
      mr={2}
    >
      <Link
        href={`weed-shop-near-me/${shop.slug}`}
        title={`Green Ghost 🌿👻 ${shop.name}`}
      >
        <Text
          as="h3"
          fontSize={18}
          fontFamily="CubicFive12"
          color="ghostVerse.green.base"
          _hover={{ textDecoration: 'underline' }}
        >
          {shop.name}
        </Text>
      </Link>
      <Box fontFamily="vt323" fontSize="2xl" mb={4} lineHeight={1}>
        <Box display="flex" alignItems="center">
          <IconShop />
          <Box ml={2} mb={1}>
            {shop.details}
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <IconClock />
          <Box ml={2} mb={1}>
            {shop.hours}
          </Box>
        </Box>
      </Box>
      <Box w="100%" position="relative" pb="56.25%" overflow="hidden">
        <iframe
          src={shop.mapLink}
          title={`Green Ghost - ${shop.name} - Google Map`}
          style={{
            border: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
      <Link
        href={shop.addresLink}
        title={`Green Ghost 🌿👻 ${shop.name} Google Map`}
      >
        <Box
          display="flex"
          mt={2}
          fontSize="2xl"
          lineHeight={1}
          fontFamily="vt323"
          _hover={{ color: 'ghostVerse.green.base' }}
        >
          <IconPin />
          <Text as="h4" ml={2}>
            {shop.address}
          </Text>
        </Box>
      </Link>
      <Link
        href={shop.reviewLink}
        title={`Green Ghost 🌿👻 ${shop.name} Add a Google Map Review`}
      >
        <IconsReview />
      </Link>
      <Box as="h4" fontFamily="CubicFive12">
        Also on
      </Box>
      <Box
        as="ul"
        aria-label="Best Weed Shop Links"
        listStyleType={'none'}
        display={'flex'}
        flexWrap={'wrap'}
      >
        {shop?.tripadvisor?.length > 0 && (
          <Box
            as="li"
            aria-label={`${shop.name} on Trip Advisor`}
            listStyleType={'none'}
            fontFamily="vt323"
            mr={2}
            _hover={{
              color: 'ghostVerse.green.base',
            }}
          >
            <Link
              title={`Green Ghost 🌿👻 ${shop.name} on Trip Advisor`}
              href={shop.tripadvisor}
              passHref
            >
              Trip Advisor
            </Link>
          </Box>
        )}
        {shop?.weedin?.length > 0 && (
          <Box
            as="li"
            aria-label={`${shop.name} on WEED.TH`}
            listStyleType={'none'}
            fontFamily="vt323"
            mr={2}
            _hover={{
              color: 'ghostVerse.green.base',
            }}
          >
            <Link
              title={`Green Ghost 🌿👻 ${shop.name} on WEED.TH`}
              href={shop.weedin}
              passHref
            >
              WEED.TH
            </Link>
          </Box>
        )}
        {shop?.smokingskunk?.length > 0 && (
          <Box
            as="li"
            aria-label={`${shop.name} on Smoking Skunk`}
            listStyleType={'none'}
            fontFamily="vt323"
            mr={2}
            _hover={{
              color: 'ghostVerse.green.base',
            }}
          >
            <Link
              title={`Green Ghost 🌿👻 ${shop.name} on Smoking Skunk`}
              href={shop.smokingskunk}
              passHref
            >
              Smoking Skunk
            </Link>
          </Box>
        )}
        {shop?.restauguru?.length > 0 && (
          <Box
            as="li"
            aria-label={`${shop.name} on Restaurant Guru`}
            listStyleType={'none'}
            fontFamily="vt323"
            mr={2}
            _hover={{
              color: 'ghostVerse.green.base',
            }}
          >
            <Link
              title={`Green Ghost 🌿👻 ${shop.name} on Restaurant Guru`}
              href={shop.restauguru}
              passHref
            >
              Restaurant Guru
            </Link>
          </Box>
        )}
      </Box>
    </Box>
  );
};
