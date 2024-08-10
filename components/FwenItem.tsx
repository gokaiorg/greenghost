import { Box, Text } from '@chakra-ui/react';
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
    <Box
      width={{ base: '33%', md: '20%', lg: '10%' }}
      mb={'4'}
      minHeight={'100px'}
    >
      <Link
        href={fwenLink}
        passHref
        title={`Green Ghost Premium Cannabis Partner - ${name}`}
      >
        <Box
          h={'100%'}
          fontSize={{ base: 'xl' }}
          color={'ghostVerse.color2.darker'}
          fontFamily={'CubicFive12'}
          mx={2}
          textAlign={'center'}
          p={2}
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
          <Box w={'60px'} h={'60px'}>
            <Image
              src={fwenLogo}
              alt={`Green Ghost Premium Cannabis Partner - ${name}`}
              width={60}
              height={60}
              sizes="(max-width: 600px) 60px, (max-width: 1200px) 60px, 60px"
              style={{ objectFit: 'contain' }}
              quality={75}
            />
          </Box>
          <Text as={'h4'} fontSize={{ base: 10, md: 10 }} lineHeight={'12px'}>
            {name}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};
