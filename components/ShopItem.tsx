import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Shop } from '../config/shops';
import { IconShop } from './media/IconShop';
import { IconClock } from './media/IconClock';
import { IconPin } from './media/IconPin';

type ShopItemProps = {
  shop: Shop;
};

export const ShopItem = ({ shop }: ShopItemProps) => {
  return (
    <Box
      as="li"
      aria-label={`${shop.name}`}
      listStyleType={'none'}
      display="flex"
      flexDirection="column"
      mb={4}
      w={{ base: '100%', md: '32%' }}
      bg="ghostVerse.dark.lighter"
      backdropFilter="blur(3px)"
      p={4}
      mr={2}
    >
      <Link href={`locations/${shop.slug}`} title={`${shop.name}`}>
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
      <Box
        as="ul"
        fontFamily="vt323"
        fontSize="2xl"
        mb={4}
        lineHeight={1}
        p={0}
      >
        <Box
          as="li"
          display="flex"
          alignItems="center"
          aria-label="Accommodations"
        >
          <IconShop />
          <Box as="span" ml={2} mb={1}>
            {shop.details}
          </Box>
        </Box>
        <Box as="li" display="flex" alignItems="center" aria-label="Hours">
          <IconClock />
          <Box as="span" ml={2} mb={1}>
            {shop.hours}
          </Box>
        </Box>
      </Box>
      <Box
        as="section"
        aria-labelledby={`${shop.name} Google Map`}
        w="100%"
        position="relative"
        pb="56.25%"
        overflow="hidden"
      >
        <iframe
          src={shop.mapLink}
          title={`${shop.name} on Google Map`}
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
      <Link href={shop.addresLink} title={`${shop.name} on Google Map`}>
        <Box
          display="flex"
          my={2}
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
      <Box
        as="ul"
        aria-label={`${shop.name} Social Links`}
        listStyleType={'none'}
        display={'flex'}
        flexWrap={'wrap'}
      >
        {shop.socialLinks.map(
          (social) =>
            social.link && ( // Check if the link is not empty
              <Box
                as="li"
                aria-label={`${shop.name} ${social.label} Link`}
                listStyleType="none"
                fontFamily="CubicFive12"
                fontSize={{ base: '12px', md: '12px' }}
                mr={1}
                mb={1}
                key={social.label}
                p={1}
                color={'black'}
                bgColor={'ghostVerse.green.base'}
                _hover={{
                  color: 'ghostVerse.grey.lighter',
                  backgroundColor: 'ghostVerse.dark.lighter',
                }}
              >
                <Link
                  title={`${shop.name} on ${social.label}`}
                  href={social.link}
                  passHref
                >
                  {social.label}
                </Link>
              </Box>
            )
        )}
      </Box>
    </Box>
  );
};
