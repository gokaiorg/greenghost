import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Edible } from '../config/edibles';

type EdibleItemProps = {
  edible: Edible;
};

export const EdibleItem = ({ edible }: EdibleItemProps) => {
  return (
    <Box
      width={{ base: '100%', md: '50%', lg: '25%' }}
      paddingBottom={1}
      paddingRight={1}
      lineHeight={1}
    >
      <Link
        href={`weed-shop-edibles/${edible.slug}`}
        title={edible.name}
        passHref
      >
        <Box
          borderColor={'ghostVerse.green.base'}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          p={4}
          fontWeight={'bold'}
          fontSize={'lg'}
          color="ghostVerse.gray.base"
          display={'flex'}
          flexDirection={{ base: 'column' }}
          height={'100%'}
          whiteSpace={{ base: 'normal' }}
          _hover={{
            bgColor: 'rgba(109, 208, 246, 0.1)',
            backdropFilter: 'blur(3px)',
          }}
          transition={'all .3s'}
        >
          <Box width={{ base: 'full' }} height={{ base: 'auto' }}>
            <Image
              src={edible.images[1]}
              alt={edible.imgDesc}
              width={700}
              height={700}
              title={edible.imgDesc}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            flex="1"
            marginLeft={{ base: 0 }}
            marginTop={{ base: 4 }}
          >
            <Box
              as={'h3'}
              fontSize={'xl'}
              fontFamily={'CubicFive12'}
              display={'flex'}
              flexDirection={'column'}
              marginRight={1}
            >
              {edible.price !== 666 && (
                <Box
                  marginLeft={'auto'}
                  color={'ghostVerse.green.base'}
                  whiteSpace={'nowrap'}
                  mb={2}
                  position={'absolute'}
                  right={0}
                  top={'25px'}
                  background={'black'}
                  padding={'0.5rem'}
                >
                  {edible.price} THB
                </Box>
              )}
              {edible.name}
            </Box>
            <Box
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'3xl'}
              flexDirection={'column'}
              mb={4}
            >
              {edible.THC !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  THC
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems="baseline"
                  >
                    {edible.THC}
                  </Box>
                </Box>
              )}
              {edible.CBD !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  CBD
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems="baseline"
                  >
                    {edible.CBD}
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'3xl'}
              mx={'auto'}
              mt="auto"
            >
              {edible.effects !== 'undefined' && (
                <Box
                  display={'flex'}
                  textAlign={'center'}
                  flexDirection={'column'}
                  fontSize={'2xl'}
                >
                  Feelings
                  <Box color={'ghostVerse.green.base'}>{edible.effects}</Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
