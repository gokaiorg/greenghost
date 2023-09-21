import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Gadget } from '../config/gadgets';

type GadgetItemProps = {
  gadget: Gadget;
};

export const GadgetItem = ({ gadget }: GadgetItemProps) => {
  return (
    <Box
      width={{ base: '50%', md: '33.33333%', lg: '25%' }}
      p={0.5}
      lineHeight={1}
    >
      <Link
        href={`weed-shop-gadgets/${gadget.slug}`}
        title={gadget.name}
        passHref
      >
        <Box
          borderColor={'ghostVerse.green.base'}
          borderWidth={1}
          bgColor={'ghostVerse.dark.lighter'}
          backdropFilter={'blur(3px)'}
          p={2}
          pos={'relative'}
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
              src={gadget.images[1]}
              alt={gadget.imgDesc}
              width={700}
              height={700}
              title={gadget.imgDesc}
              priority={false}
            />
          </Box>
          <Box
            display={'flex'}
            flexDirection={'column'}
            flex={'1'}
            marginLeft={{ base: 0 }}
            marginTop={{ base: 4 }}
          >
            <Text
              as={'h2'}
              fontFamily={'CubicFive12'}
              fontSize={{ base: 16, lg: 18 }}
              display={'flex'}
              flexDirection={'column'}
              marginRight={1}
            >
              <Box
                marginLeft={'auto'}
                whiteSpace={'nowrap'}
                mb={2}
                position={'absolute'}
                right={0}
                top={4}
                background={'black'}
                padding={'0.5rem'}
              >
                {gadget.price == 999 ? (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.green.base'}
                  >
                    Coming Soon
                  </Box>
                ) : gadget.quantity === 0 ? (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.red.base'}
                  >
                    Sold Out
                  </Box>
                ) : (
                  <Box
                    fontSize={{ base: 14, lg: 16 }}
                    color={'ghostVerse.green.base'}
                  >
                    {gadget.price} THB
                  </Box>
                )}
              </Box>
              {gadget.name}
            </Text>
            <Box
              display={'flex'}
              fontFamily={'vt323'}
              fontSize={'3xl'}
              flexDirection={'column'}
            >
              <Box as={'h4'} color={'ghostVerse.blue.base'} marginRight={4}>
                {gadget.packaging}
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
