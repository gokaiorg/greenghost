import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface HomeHeroItemProps {
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  link: string;
  linkTitle: string;
  linkLabel: string;
}

export const HomeHeroItem: FC<HomeHeroItemProps> = ({
  title,
  image,
  imageAlt,
  description,
  link,
  linkTitle,
  linkLabel,
}) => {
  return (
    <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }} mt={5}>
      <Box
        as="span"
        position={'relative'}
        w={'100%'}
        h={{ base: '300px', md: '400px' }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'contain' }}
          priority={true}
          sizes="(max-width: 600px) 768px, (max-width: 1200px) 984px, 1240px"
        />
      </Box>
      <Box
        pos={{ base: 'absolute' }}
        left={0}
        right={0}
        width={{ base: '100%' }}
        h={{ base: '300px', md: '400px' }}
        margin={{ base: 'auto' }}
        textAlign={'center'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        fontWeight={'black'}
        fontFamily={'vt323'}
        px={{ base: 5, md: 10 }}
        bgColor={'ghostVerse.dark.base'}
        backdropFilter={'blur(3px)'}
      >
        <Text
          as={'h1'}
          fontSize={{ base: 22, md: 30, lg: 44 }}
          lineHeight={1}
          marginBottom={2}
          fontFamily={'CubicFive12'}
          color={'ghostVerse.green.base'}
          w={{ base: '100%', md: '65%', lg: '70%', xl: '50%' }}
          mx={'auto'}
        >
          {title}
        </Text>
        <Text
          as={'p'}
          lineHeight={1}
          fontSize={{ base: 26, md: 40, lg: 44 }}
          w={{ base: '100%', xl: '80%' }}
          m={'auto'}
        >
          {description}
        </Text>
        <Link href={link} title={linkTitle} passHref>
          <Text
            as="span"
            lineHeight={1}
            display={'inline-flex'}
            fontSize={{ base: 'xl', md: '4xl' }}
            borderWidth={1}
            px={{ base: 4, md: 6 }}
            pt={{ base: 2, md: 0 }}
            pb={{ base: 2, md: 2 }}
            mt={{ base: 5, md: 10 }}
            mx={'auto'}
            fontFamily={'vt323'}
            color={'black'}
            borderColor={'ghostVerse.green.base'}
            backgroundColor={'ghostVerse.green.base'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
              bgColor: 'black',
              color: 'ghostVerse.green.base',
            }}
          >
            {linkLabel}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
