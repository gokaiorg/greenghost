import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

interface FwenItemProps {
  name: string;
  fwenLogo: string;
  fwenLink: string;
}

export const FwenItem: FC<FwenItemProps> = ({ name, fwenLogo, fwenLink }) => {
  return (
    <Box width={{ base: '33.33333%', lg: '20%' }} mb={'4'} minHeight={'170px'}>
      <Link href={fwenLink} passHref title={`Green Ghost Fwen - ${name}`}>
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
              src={fwenLogo}
              width={120}
              height={120}
              alt={`Green Ghost Fwen - ${name}`}
            />
          </Box>
          <Box as={'h4'} w={'100%'} fontSize={{ base: 16, md: 20 }} mt={'auto'}>
            {name}
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
