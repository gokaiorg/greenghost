import { useEffect, useState, FunctionComponent } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { useConfig } from '@useelven/core';
import { isMobile } from '../../utils/isMobile';
import QRCode from 'qrcode';

interface WalletConnectQRCodeProps {
  uri: string;
}

export const WalletConnectQRCode: FunctionComponent<
  WalletConnectQRCodeProps
> = ({ uri }) => {
  const [qrCodeSvg, setQrCodeSvg] = useState('');
  const { walletConnectDeepLink } = useConfig();

  useEffect(() => {
    const generateQRCode = async () => {
      if (!uri) {
        return;
      }

      const svg = await QRCode.toString(uri, {
        type: 'svg',
      });

      setQrCodeSvg(svg);
    };
    generateQRCode();
  }, [uri]);

  const mobile = isMobile();

  return (
    <Box>
      <Box
        dangerouslySetInnerHTML={{
          __html: qrCodeSvg,
        }}
      />
      {mobile ? (
        <Flex justifyContent="center">
          <Box
            color={'ghostVerse.green.base'}
            borderColor={'ghostVerse.green.base'}
            fontSize={{ base: 'xl' }}
            borderWidth={1}
            bgColor="transparent"
            backdropFilter={'blur(3px)'}
            p={4}
            mx={'auto'}
            mt={10}
            fontFamily={'vt323'}
            _hover={{
              borderColor: 'ghostVerse.green.base',
              color: 'black',
              backgroundColor: 'ghostVerse.green.base',
            }}
            transition="background-color .3s"
            as="a"
            href={`${walletConnectDeepLink}?wallet-connect=${encodeURIComponent(
              uri
            )}`}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            xPortal Login
          </Box>
        </Flex>
      ) : null}
    </Box>
  );
};
