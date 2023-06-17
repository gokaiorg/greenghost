import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Gadget } from '../config/gadgets';

type GadgetItemProps = {
  gadget: Gadget;
};

export const GadgetItem = ({ gadget }: GadgetItemProps) => {
  return (
    <Box
      width={{ base: '100%', md: '50%', lg: '25%' }}
      paddingBottom={1}
      paddingRight={1}
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
              src={gadget.images[1]}
              alt={gadget.imgDesc}
              width={500}
              height={500}
              title={gadget.imgDesc}
              layout={'responsive'}
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
              {gadget.price !== 666 && (
                <Box
                  marginLeft={'auto'}
                  color={'ghostVerse.green.base'}
                  whiteSpace={'nowrap'}
                  mb={2}
                >
                  {gadget.price} THB
                </Box>
              )}
              {gadget.name}
            </Box>
          </Box>
          <Box
            display={'flex'}
            fontFamily={'vt323'}
            fontSize={'3xl'}
            flexDirection={'column'}
          >
            <Box as={'h4'} color="ghostVerse.blue.base" marginRight={4}>
              {gadget.packaging}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
