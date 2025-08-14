import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

export const HomeTopInfos = () => {
  return (
    <Box
      display="flex"
      my={{ base: 5, lg: 10 }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box
        as="section"
        aria-labelledby="Green Ghost CBD, Premier Online CBD Experience"
        w={{ base: '100%', md: '60%', lg: '65%' }}
        display="flex"
        bgColor="ghostVerse.dark.lighter"
        p={5}
        mr={{ base: 0, lg: 4 }}
        mb={{ base: 2, lg: 0 }}
      >
        <Box w={{ base: '50%', lg: '30%' }} mr={4} mb={{ base: 4, md: 0 }}>
          <Image
            src="/media/cbd/logo-green-ghost-cbd.webp"
            width={2000}
            height={2000}
            style={{ objectFit: 'contain' }}
            priority
            alt="Green Ghost CBD, Premier Online CBD Experience"
            title="Green Ghost CBD, Premier Online CBD Experience"
            sizes="200px"
            quality={75}
          />
        </Box>
        <Box display="flex" flexDirection="column" w="100%" alignItems="start">
          <Text
            as="h2"
            fontSize={{ base: 18, lg: 24 }}
            lineHeight={1}
            fontFamily="CubicFive12"
            mb={2}
            textAlign="left"
          >
            Green Ghost CBD, Premier Online CBD Experience
          </Text>
          <Text
            as="p"
            fontSize={{ base: 26 }}
            lineHeight={1}
            fontFamily="vt323"
            mb="auto"
          >
            Discover the ultimate CBD experience with{' '}
            <Link
              href="https://greenghostcbd.fr/en"
              passHref
              title="Fast CBD Delivery –  Best Degen CBD Online Shop in France"
            >
              <Text
                as="span"
                color="ghostVerse.green.base"
                textDecoration="underline"
              >
                Green Ghost CBD
              </Text>
            </Link>
            , France’s top online store for premium CBD sourced from trusted
            partners
          </Text>
          <Link
            href="/cbd-france"
            passHref
            title="WEED.TH Rolling Papers + Tips"
          >
            <Text
              as="span"
              display="inline-flex"
              fontFamily="CubicFive12"
              fontSize={{ base: 'md', md: 'lg' }}
              whiteSpace={'nowrap'}
              px={6}
              py={2}
              mt={5}
              mx="auto"
              color="black"
              borderWidth={1}
              borderColor="ghostVerse.green.base"
              bgColor="ghostVerse.green.base"
              _hover={{
                bgColor: 'black',
                color: 'ghostVerse.green.base',
              }}
            >
              Check It Out
            </Text>
          </Link>
        </Box>
      </Box>
      <Box
        as="section"
        aria-labelledby="Cannabis Club"
        display="flex"
        flexDirection="column"
        w={{ base: '100%', md: '40%', lg: '35%' }}
        bgColor="ghostVerse.green.base"
        color="black"
        p={5}
      >
        <Text
          as="h3"
          fontSize={{ base: 24, lg: 34 }}
          lineHeight={1}
          fontFamily="CubicFive12"
          mb={2}
          textAlign="left"
        >
          Cannabis Club
        </Text>
        <Text as="p" fontFamily="vt323" fontSize={26} lineHeight={1} mb="auto">
          Exclusive community for premium cannabis enthusiasts.
        </Text>
        <Box
          mt={5}
          display={'flex'}
          flexWrap={'wrap'}
          alignItems={{ base: 'left', lg: 'center' }}
          justifyContent={{ base: 'left', lg: 'center' }}
        >
          <Link
            href="/cannabis-club"
            passHref
            title="Best Cannabis Social Club in Phuket Thailand"
            aria-label="Join the club"
          >
            <Text
              as="span"
              display="inline-flex"
              fontFamily="CubicFive12"
              fontSize={{ base: 'md', md: 'lg' }}
              px={6}
              py={2}
              mt={0}
              mx="auto"
              borderWidth={1}
              borderColor="black"
              bgColor="black"
              whiteSpace={'nowrap'}
              color="ghostVerse.green.base"
              _hover={{
                bgColor: 'ghostVerse.green.base',
                color: 'black',
              }}
            >
              {'Become a member'}
            </Text>
          </Link>
          <Box
            fontFamily={'vt323'}
            fontSize={{ base: '2xl' }}
            lineHeight={1}
            px={{ base: 0, md: 6 }}
            py={{ base: 2, md: 2 }}
            ml={{ base: 2, md: 0 }}
            fontWeight={'bold'}
            whiteSpace={'nowrap'}
            aria-label="Grab your NFT"
          >
            <Link href="/nft" passHref title="Green Ghost Degen NFT Collection">
              {'GET NFT!'}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
