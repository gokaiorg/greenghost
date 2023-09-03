import { FC, MouseEventHandler } from 'react';
import { PairingTypesStruct } from '@useelven/core';
import { Stack, Box, Text, Heading, IconButton } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

interface WalletConnectPairingsProps {
  pairings: PairingTypesStruct[];
  login: (topic: string) => Promise<void>;
  remove: (topic: string) => Promise<void>;
}

export const WalletConnectPairings: FC<WalletConnectPairingsProps> = ({
  pairings,
  login,
  remove,
}) => {
  const handleLogin = (topic: string) => () => {
    login(topic);
  };

  const handleRemove =
    (topic: string): MouseEventHandler<HTMLButtonElement> | undefined =>
    (e) => {
      e.stopPropagation();
      remove(topic);
    };

  return (
    <Stack>
      {pairings?.length > 0 && (
        <Heading size="md" mt={4}>
          Existing pairings:
        </Heading>
      )}
      {pairings.map((pairing) => (
        <Box
          color={'ghostVerse.green.base'}
          borderColor={'ghostVerse.green.base'}
          fontSize={{ base: 'xl' }}
          borderWidth={1}
          bgColor="transparent"
          backdropFilter={'blur(3px)'}
          p={4}
          w={'100%'}
          mx={'auto'}
          fontFamily={'CubicFive10'}
          _hover={{
            borderColor: 'ghostVerse.green.base',
            color: 'black',
            backgroundColor: 'ghostVerse.green.base',
          }}
          key={pairing.topic}
          cursor="pointer"
          onClick={handleLogin(pairing.topic)}
          userSelect="none"
          position="relative"
        >
          <IconButton
            position="absolute"
            top={2}
            right={2}
            aria-label="remove-pairing"
            color="black"
            h={6}
            minW={6}
            icon={<CloseIcon borderRadius={0} boxSize={2} />}
            onClick={handleRemove(pairing.topic)}
          />
          <Text fontSize="lg">{pairing.peerMetadata?.name}</Text>
          {pairing.peerMetadata?.url ? (
            <Text fontSize="xs">({pairing.peerMetadata.url})</Text>
          ) : null}
        </Box>
      ))}
    </Stack>
  );
};
