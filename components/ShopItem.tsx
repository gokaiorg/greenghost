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
    <Box display={'flex'} flexDirection={{ base: 'column', lg: 'row' }} mb={10}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={{ base: '100%', lg: '65%' }}
      >
        <Box
          display={'flex'}
          alignItems={{ base: 'left', lg: 'center' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Text
            as={'h2'}
            color={'white'}
            fontSize={{ base: 20, lg: 26 }}
            fontFamily={'CubicFive12'}
            borderColor={'ghostVerse.color2.base'}
            bgColor={'ghostVerse.dark.lighter'}
            borderWidth={1}
            backdropFilter={'blur(3px)'}
            p={4}
            mr={'2'}
          >
            {shop.name}
          </Text>
          <Link
            href={`weed-shop-near-me/${shop.slug}`}
            title={`${shop.name}`}
            passHref
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              color={'ghostVerse.green.base'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={'40px'}
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              <Box ml={2}>Gallery</Box>
            </Box>
          </Link>
        </Box>
        <Box
          as={'div'}
          color={'ghostVerse.blue.base'}
          fontFamily={'vt323'}
          fontSize={{ base: '2xl' }}
          mb={4}
        >
          <Box display={'flex'} alignItems={'center'}>
            <IconShop />
            <Box ml={2} mb={1}>
              {shop.details}
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            <IconClock />
            <Box ml={2} mb={1}>
              {shop.hours}
            </Box>
          </Box>
        </Box>
        <Text
          display={'flex'}
          pr={{ base: '0', md: '10rem' }}
          fontSize={{ base: '3xl', md: '3xl' }}
          fontFamily={'vt323'}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
        >
          <Link
            href={shop.addresLink}
            title={`Green Ghost - ${shop.name} - Google Map`}
            passHref
          >
            <IconPin />
            {shop.address}
          </Link>
        </Text>
        <Link
          href={shop.reviewLink}
          title={`Green Ghost - ${shop.name} - Add a Google Map Review`}
          passHref
        >
          <IconsReview />
        </Link>
      </Box>
      <Box
        width={{ base: '100%', lg: 'auto' }}
        ml={{ base: 0, lg: 'auto' }}
        mt={8}
      >
        <iframe
          src={shop.mapLink}
          width="350"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};
