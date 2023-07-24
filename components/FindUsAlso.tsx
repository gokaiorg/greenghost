import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';

export const FindUsAlso = () => {
  return (
    <>
      <Text
        as={'h3'}
        fontSize={'xl'}
        mx={'auto'}
        fontFamily={'CubicFive12'}
        mt={10}
        textAlign={'center'}
      >
        Find Us Also On
      </Text>
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        alignItems={'center'}
        justifyContent={'center'}
        mx={'auto'}
        mb={4}
        fontSize={'3xl'}
        fontFamily={'vt323'}
      >
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on Weed in th'}
            href={'https://weed.th/shop/fe835e3b-d043-4672-af43-8cc039aa013b'}
            passHref
          >
            WEED.TH Karon
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on Weed in th'}
            href={'https://weed.th/shop/0d9dde2a-13bd-4167-b063-577af34971e8'}
            passHref
          >
            WEED.TH Phuket
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on Weed in th'}
            href={'https://weed.th/shop/be232698-0464-4352-bd70-15ea51257870'}
            passHref
          >
            WEED.TH Rawai
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on Weeddee'}
            href={'https://thaiweeddee.com/listing/green-ghost/'}
            passHref
          >
            Weeddee
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on Smoking Skunk'}
            href={
              'https://smokingskunk.com/weed-in-thailand/green-ghost-degen-weed-shop-karon/'
            }
            passHref
          >
            Smoking Skunk
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on ThaiWeedGuide'}
            href={
              'https://thaiweedguide.com/directory-dispensaries/listing/green-ghost/'
            }
            passHref
          >
            ThaiWeedGuide
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on WeedHub'}
            href={'https://weedhub.asia/listing/green-ghost/'}
            passHref
          >
            WeedHub
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on Thailand Weed'}
            href={
              'https://www.thailandweed.com/directory-dispensaries/listing/green-ghost/'
            }
            passHref
          >
            Thailand Weed
          </Link>
        </Box>
        <Box m={4} color={'ghostVerse.green.base'}>
          <Link
            title={'Find Us on High Thailand'}
            href={'https://www.highthailand.com/location/green-ghost/'}
            passHref
          >
            High Thailand
          </Link>
        </Box>
      </Box>
    </>
  );
};
