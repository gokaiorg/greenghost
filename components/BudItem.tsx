import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ImgPercent } from './ImgPercent';

interface BudItemProps {
  image: string;
  name: string;
  price: string;
  pageLink: string;
  dominance: string;
  sativa: string;
  indica: string;
  THC: string;
  CBD: string;
  effects: string;
  imageName: string;
}

export const BudItem: FC<BudItemProps> = ({
  image,
  name,
  price,
  pageLink,
  dominance,
  sativa,
  indica,
  THC,
  CBD,
  effects,
  imageName,
}) => {
  return (
    <Box width={{ base: '100%' }}>
      <Link href={pageLink}>
        <Box
          borderColor="ghostVerse.green.base"
          borderWidth={1}
          bgColor="ghostVerse.dark.lighter"
          backdropFilter="blur(3px)"
          p={6}
          fontWeight="bold"
          fontSize="lg"
          color="ghostVerse.gray.base"
          display="flex"
          flexDirection={{ base: 'column', md: 'row' }}
          marginRight={{ base: 0, lg: 2 }}
          marginBottom={{ base: 2 }}
          whiteSpace={{ base: 'normal', md: 'nowrap' }}
          _hover={{
            bgColor: 'rgba(109, 208, 246, 0.1)',
            backdropFilter: 'blur(3px)',
          }}
          transition="background-color .3s"
        >
          <Image
            src={image}
            alt={imageName}
            width={200}
            height={200}
            title={imageName}
          />
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            marginLeft={{ base: 0, md: 4 }}
            marginTop={{ base: 4, md: 0 }}
          >
            <Box
              as="h3"
              fontSize="2xl"
              fontFamily="CubicFive12"
              display="flex"
              alignItems="center"
            >
              {name}{' '}
              <Box marginLeft="auto" color="ghostVerse.green.base">
                {price}THB
              </Box>
            </Box>
            <Box display="flex" fontFamily="vt323" fontSize="3xl">
              {dominance == 'Indica Dominant' && (
                <Box as="h4" color="ghostVerse.blue.base" marginRight={2}>
                  {dominance}
                </Box>
              )}
              {dominance == 'Sativa Dominant' && (
                <Box as="h4" color="ghostVerse.pink.base" marginRight={2}>
                  {dominance}
                </Box>
              )}
              {dominance == 'Hybrid' && (
                <Box as="h4" color="ghostVerse.orange.base" marginRight={2}>
                  {dominance}
                </Box>
              )}
            </Box>
            <Box
              display="flex"
              fontFamily="vt323"
              fontSize="2xl"
              flexWrap="wrap"
            >
              {sativa !== 'undefined' && (
                <Box display="flex" marginRight={2}>
                  Sativa
                  <Box marginLeft={2} color="ghostVerse.green.base">
                    {sativa}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {indica !== 'undefined' && (
                <Box display="flex" marginRight={2}>
                  Indica
                  <Box marginLeft={2} color="ghostVerse.green.base">
                    {indica}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {THC !== 'undefined' && (
                <Box display="flex" marginRight={2}>
                  THC
                  <Box marginLeft={2} color="ghostVerse.green.base">
                    {THC}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {CBD !== 'undefined' && (
                <Box display="flex" marginRight={2}>
                  CBD
                  <Box marginLeft={2} color="ghostVerse.green.base">
                    {CBD}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              display="flex"
              fontFamily="vt323"
              fontSize="2xl"
              marginTop="auto"
            >
              {effects !== 'undefined' && (
                <Box display="flex" marginRight={2}>
                  Feelings
                  <Box marginLeft={2} color="ghostVerse.green.base">
                    {effects}
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
