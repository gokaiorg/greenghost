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
      display={'flex'}
      flexDirection={{ base: 'column' }}
      mb={4}
      w={{ base: '100%', md: '32%' }}
      bgColor={'ghostVerse.dark.lighter'}
      backdropFilter={'blur(3px)'}
      p={4}
      mr={'2'}
    >
      <Link
        href={`weed-shop-near-me/${shop.slug}`}
        title={`${shop.name}`}
        passHref
      >
        <Text
          as={'h3'}
          fontSize={{ base: 18 }}
          fontFamily={'CubicFive12'}
          color={'ghostVerse.green.base'}
          _hover={{
            textDecoration: 'underline',
          }}
        >
          {shop.name}
        </Text>
      </Link>
      <Box
        as={'span'}
        fontFamily={'vt323'}
        fontSize={{ base: '2xl' }}
        mb={4}
        lineHeight={1}
      >
        <Box as={'span'} display={'flex'} alignItems={'center'}>
          <IconShop />
          <Box ml={2} mb={1}>
            {shop.details}
          </Box>
        </Box>
        <Box as={'span'} display={'flex'} alignItems={'center'}>
          <IconClock />
          <Box ml={2} mb={1}>
            {shop.hours}
          </Box>
        </Box>
      </Box>
      <Box
        w={'100%'}
        position="relative"
        pb="56.25%"
        height="0"
        overflow="hidden"
      >
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
        ></iframe>
      </Box>

      <Link
        href={shop.addresLink}
        title={`Green Ghost - ${shop.name} - Google Map`}
        passHref
      >
        <Box
          as={'span'}
          lineHeight={1}
          display={'flex'}
          mt={2}
          pr={{ base: '0' }}
          fontSize={{ base: '2xl' }}
          fontFamily={'vt323'}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
        >
          <IconPin />
          <Text as={'h4'}>{shop.address}</Text>
        </Box>
      </Link>
      <Link
        href={shop.reviewLink}
        title={`Green Ghost - ${shop.name} - Add a Google Map Review`}
        passHref
      >
        <IconsReview />
      </Link>
    </Box>
  );
};
