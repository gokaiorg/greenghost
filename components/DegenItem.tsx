import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Degen } from '../config/degens';

type DegenItemProps = {
  degen: Degen;
};

export const DegenItem = ({ degen }: DegenItemProps) => {
  return (
    <Box
      width={{ base: '100%', md: '50%', lg: '25%' }}
      paddingBottom={1}
      paddingRight={1}
      lineHeight={1}
    >
      <Link href={`weed-shop-degen/${degen.slug}`} title={degen.name} passHref>
        <Box
          borderColor={'ghostVerse.green.base'}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          p={6}
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
              src={degen.images[1]}
              alt={degen.imgDesc}
              width={500}
              height={500}
              title={degen.imgDesc}
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
              {degen.price !== 666 && (
                <Box
                  marginLeft={'auto'}
                  color={'ghostVerse.green.base'}
                  whiteSpace={'nowrap'}
                  mb={2}
                >
                  {degen.price} THB
                </Box>
              )}
              {degen.name}
            </Box>
            <Box
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'3xl'}
              flexDirection={'column'}
            >
              {degen.THC !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  THC
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems="baseline"
                  >
                    {degen.THC}
                  </Box>
                </Box>
              )}
              {degen.CBD !== 'undefined' && (
                <Box display={'flex'} marginRight={2} flexDirection={'row'}>
                  CBD
                  <Box
                    marginLeft={2}
                    color={'ghostVerse.green.base'}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems="baseline"
                  >
                    {degen.CBD}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
