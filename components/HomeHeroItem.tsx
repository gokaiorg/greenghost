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
    <Box display={'flex'} flexDirection={{ base: 'column', md: 'row' }}>
      <Box
        as="span"
        position={'relative'}
        w={{ base: '100%' }}
        h={{ base: '300px', md: '400px' }}
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{ objectFit: 'contain' }}
          priority={true}
          sizes="(max-width: 600px) 480px, (max-width: 1200px) 800px, 1200px"
        />
      </Box>
      <Box
        pos={{ base: 'absolute' }}
        left={0}
        right={0}
        width={{ base: '100%', md: '70%' }}
        margin={{ base: 'auto' }}
        textAlign={'center'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        fontWeight={'black'}
        color={'white'}
        fontFamily={'vt323'}
        px={{ base: 5, md: 10 }}
        bgColor={'ghostVerse.dark.ultralight'}
      >
        <Text
          as={'h1'}
          fontSize={{ base: 22, lg: 30, xl: 44 }}
          lineHeight={1}
          marginBottom={2}
          fontFamily={'CubicFive12'}
          color={'ghostVerse.green.base'}
          w={{ base: '100%', lg: '80%', xl: '60%' }}
          mx={'auto'}
        >
          {title}
        </Text>
        <Text as={'p'} fontSize={{ base: 26, md: 44 }} lineHeight={1}>
          {description}
        </Text>
        <Link href={link} title={linkTitle} passHref>
          <Text
            as="span"
            display={'inline-flex'}
            color={'ghostVerse.green.base'}
            borderColor={'ghostVerse.green.base'}
            fontSize={{ base: 'xl', md: '4xl' }}
            borderWidth={1}
            bgColor="transparent"
            backdropFilter={'blur(3px)'}
            px={{ base: 4, md: 6 }}
            pt={{ base: 2, md: 0 }}
            pb={{ base: 2, md: 2 }}
            mt={5}
            mx={'auto'}
            fontFamily={'vt323'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
              bgColor: 'ghostVerse.green.base',
              color: 'black',
            }}
          >
            {linkLabel}
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
