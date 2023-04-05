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
    <Box width={{ base: '100%', md: '50%', lg: '33%' }} paddingBottom={1} paddingRight={1}>
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
          flexDirection={{ base: 'column' }}
          height="100%"
          whiteSpace={{ base: 'normal' }}
          _hover={{
            bgColor: 'rgba(109, 208, 246, 0.1)',
            backdropFilter: 'blur(3px)',
          }}
          transition="background-color .3s"
        >
          <Box
            width={{ base: 'full' }}
            height={{ base: 'auto' }}
          >
            <Image
              src={image}
              alt={imageName}
              width={500}
              height={500}
              title={imageName}
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            flex="1"
            marginLeft={{ base: 0 }}
            marginTop={{ base: 4 }}
          >
            <Box
              as="h3"
              fontSize="2xl"
              fontFamily="CubicFive12"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              {name}{' '}
              <Box
                marginLeft="auto"
                color="ghostVerse.green.base"
                whiteSpace="nowrap"
              >
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
              fontSize="3xl"
              flexWrap="wrap"
            >
              {sativa !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  Sativa
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {sativa}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {indica !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  Indica
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {indica}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {THC !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  THC
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {THC}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
              {CBD !== 'undefined' && (
                <Box display="flex" marginRight={2} flexDirection="row">
                  CBD
                  <Box
                    marginLeft={2}
                    color="ghostVerse.green.base"
                    display="flex"
                    flexDirection="row"
                    alignItems="baseline"
                  >
                    {CBD}
                    <ImgPercent />
                  </Box>
                </Box>
              )}
            </Box>
            <Box
              display="flex"
              fontFamily="vt323"
              fontSize="3xl"
              mx="auto"
              mt="auto"
            >
              {effects !== 'undefined' && (
                <Box display="flex" textAlign="center" flexDirection="column" fontSize="3xl">
                  Feelings
                  <Box color="ghostVerse.green.base">
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
