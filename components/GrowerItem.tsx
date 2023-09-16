import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { Grower } from '../config/growers';

type GrowerItemProps = {
  grower: Grower;
};

export const GrowerItem = ({ grower }: GrowerItemProps) => {
  return (
    <Box width={{ base: '50%', lg: '25%' }} mb={'4'} minHeight={'170px'}>
      <Link href={`weed-grower/${grower.slug}`} title={grower.name} passHref>
        <Box
          h={'100%'}
          fontSize={{ base: 'xl' }}
          color={'ghostVerse.color2.darker'}
          fontFamily={'CubicFive12'}
          mx={2}
          textAlign={'center'}
          p={4}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
          transition={'all .3s'}
          _hover={{
            bgColor: 'ghostVerse.dark.lighter',
            color: 'ghostVerse.green.base',
          }}
        >
          <Box w={'120px'}>
            <Image
              src={grower.logo}
              alt={`${grower.name} - Weed grower in Thailand`}
              width={120}
              height={120}
              title={`${grower.name} - Weed grower in Thailand`}
              priority={false}
            />
          </Box>
          <Box as={'h3'} w={'100%'} fontSize={{ base: 18, md: 22 }} mt={'auto'}>
            {grower.name}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
