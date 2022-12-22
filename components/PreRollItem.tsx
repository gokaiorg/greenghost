import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface PreRollItemProps {
  name: string;
  price: string;
  pageLink: string;
}

export const PreRollItem: FC<PreRollItemProps> = ({
  name,
  price,
  pageLink,
}) => {
  return (
    <Box
      borderColor="ghostVerse.green.base"
      borderWidth={1}
      bgColor="ghostVerse.dark.lighter"
      backdropFilter="blur(3px)"
      py={2}
      px={6}
      whiteSpace="nowrap"
      textAlign="center"
      fontWeight="bold"
      fontSize="xl"
      color="ghostVerse.green.base" 
      display="flex"
      width="fit-content"
    >
      <Link href={pageLink} passHref>
        {name} - {price}THB
      </Link>
    </Box>
  );
};