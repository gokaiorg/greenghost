import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface BudItemProps {
  name: string;
  price: string;
  pageLink: string;
}

export const BudItem: FC<BudItemProps> = ({ name, price, pageLink }) => {
  return (
    <Link href={pageLink}>
      <Box
        borderColor="ghostVerse.green.base"
        borderWidth={1}
        bgColor="ghostVerse.dark.lighter"
        backdropFilter="blur(3px)"
        py={2}
        px={6}
        textAlign="center"
        fontWeight="bold"
        fontSize="lg"
        color="ghostVerse.green.base"
        display="flex"
        width="100%"
        whiteSpace={{ base: 'normal', md: 'nowrap' }}
      >
        {name} <Box marginLeft="auto">{price}THB</Box>
      </Box>
    </Link>
  );
};
