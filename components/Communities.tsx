import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { ImgGhostverse } from './media/ImgGhostverse';
import { ImgWeedCard } from './media/ImgWeedCard';
import { ImgGreenGhostNFT } from './media/ImgGreenGhostNFT';

export const Communities = () => {
  return (
    <Box display={'flex'} my={10} flexWrap={'wrap'} alignItems={'stretch'}>
      <Box display={'flex'} w={'100%'} alignItems={'center'} width={'100%'}>
        <Text
          as={'h2'}
          fontSize={{ base: 20, lg: 24 }}
          lineHeight={1}
          fontFamily={'CubicFive12'}
          my={{ base: 4 }}
          textAlign={'left'}
        >
          Exclusive Discounts & Cash Back for Our Cannabis Community
        </Text>
      </Box>
      <Text
        as={'p'}
        fontSize={{ base: 26, lg: 36 }}
        lineHeight={1}
        fontFamily={'vt323'}
      >
        At Green Ghost, we value our cannabis community by offering special
        discounts and occasional cash back rewards. Join our club to enjoy
        exclusive benefits and connect with fellow enthusiasts. Explore tailored
        deals for Green Ghost, GhostVerse, and Weed.th communities and maximize
        your cannabis experience.
      </Text>
      <Box w={'100%'} display={'flex'} flexWrap={'wrap'} mt={5}>
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
          <Link title="Green Ghost Degen NFT Collection" href="/nft" passHref>
            <Text
              as={'h3'}
              fontSize={{ base: 18 }}
              fontFamily={'CubicFive12'}
              color={'ghostVerse.green.base'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              Green Ghost Degen NFT
            </Text>
          </Link>
          <ImgGreenGhostNFT />
          <Box
            mb={'auto'}
            as={'p'}
            fontFamily={'vt323'}
            fontSize={{ base: 26 }}
            lineHeight={1}
          >
            Degen Based Coming Soon! Up to 30% discount and degen tips.
          </Box>
        </Box>{' '}
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
          <Link href={'https://ghostverse.org'} title={'Ghostverse'} passHref>
            <Text
              as={'h3'}
              fontSize={{ base: 18 }}
              fontFamily={'CubicFive12'}
              color={'ghostVerse.green.base'}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              GhostVerse community
            </Text>
          </Link>
          <ImgGhostverse />
          <Box
            mb={'auto'}
            as={'p'}
            fontFamily={'vt323'}
            fontSize={{ base: 26 }}
            lineHeight={1}
          >
            Hold a Mr Ghost NFT on MultiversX Blockchain using xPortal wallet
            and get 20% discount and cashback. Soon on Solana.
          </Box>
          <Box
            display={'flex'}
            fontFamily={'vt323'}
            fontSize={{ base: 'xl' }}
            lineHeight={1}
            py={{ base: 2, md: 2 }}
            color={'ghostVerse.green.base'}
          >
            <Link
              title="Crypto Weed Shop Relax and Earn"
              href="/crypto-weed-shop-relax-and-earn"
              passHref
            >
              Read More&nbsp;
            </Link>
            <Link
              title="Community-driven collectible NFT DAO on MultiversX"
              href="https://ghostverse.org/mxghosts"
              passHref
            >
              Buy Now
            </Link>
          </Box>
        </Box>
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
            href={'https://weed.th/'}
            title={'Green Ghost 🌿👻 Map of Cannabis Shops in Thailand'}
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
              Weed.th community
            </Text>
          </Link>
          <ImgWeedCard />
          <Box
            mb={'auto'}
            as={'p'}
            fontFamily={'vt323'}
            fontSize={{ base: 26 }}
            lineHeight={1}
          >
            {
              "Registered card holder in thailand's weed.th medicinal cannabis card system get 10% discount."
            }
          </Box>
          <Box
            display={'flex'}
            fontFamily={'vt323'}
            fontSize={{ base: 'xl' }}
            lineHeight={1}
            py={{ base: 2, md: 2 }}
            color={'ghostVerse.green.base'}
          >
            <Link
              title="Verified Cannabis Card Dispensaries which offer discounts"
              href="https://card.weed.th/en/verified-cannabis-card-dispensaries"
              passHref
            >
              Read More&nbsp;
            </Link>
            <Link
              title="Medicinal Cannabis Card for Thailand"
              href="https://card.weed.th/en"
              passHref
            >
              Apply Now
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
