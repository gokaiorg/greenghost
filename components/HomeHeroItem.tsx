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
        fontFamily={'vt323'}
        px={{ base: 5, md: 10 }}
        bgColor={'ghostVerse.dark.ultralight'}
        backdropFilter={'blur(3px)'}
      >
        <Text
          as={'h1'}
          fontSize={{ base: 22, lg: 30, xl: 44 }}
          lineHeight={{ base: '28px', lg: '46px' }}
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
            lineHeight={1}
            display={'inline-flex'}
            fontSize={{ base: 'xl', md: '4xl' }}
            borderWidth={1}
            px={{ base: 4, md: 6 }}
            pt={{ base: 2, md: 0 }}
            pb={{ base: 2, md: 2 }}
            mt={5}
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
