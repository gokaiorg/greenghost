import {
  Modal,
  ModalOverlay,
  ModalContent,
  Text,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Spinner,
  Flex,
  ModalHeader,
  Stack,
  Box,
} from '@chakra-ui/react';
import { FC } from 'react';
// import { ActionButton } from '../ActionButton';
import { LoginComponent } from './LoginComponent';
import { useEffectOnlyOnUpdate } from '../../hooks/useEffectOnlyOnUpdate';
import { getSigningDeviceName } from '../../utils/getSigningDeviceName';
import { useLogin, useLoginInfo } from '@useelven/core';
import { IconLogin } from '../media/IconLogin';

interface LoginModalButtonProps {
  onClose?: () => void;
  onOpen?: () => void;
}

const CustomModalOverlay = () => {
  return <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(5px)" />;
};

export const LoginModalButton: FC<LoginModalButtonProps> = ({
  onClose,
  onOpen,
}) => {
  const { isLoggedIn, isLoggingIn, setLoggingInState } = useLogin();
  const { loginMethod } = useLoginInfo();
  // const { logout } = useLogout();
  const {
    isOpen: opened,
    onOpen: open,
    onClose: close,
  } = useDisclosure({ onClose, onOpen });

  useEffectOnlyOnUpdate(() => {
    if (isLoggedIn) {
      close();
    }
  }, [isLoggedIn]);

  const onCloseComplete = () => {
    setLoggingInState('error', '');
  };

  const ledgerOrPortalName = getSigningDeviceName(loginMethod);

  return (
    <>
      {isLoggedIn ? (
        ''
      ) : (
        <Box
          onClick={open}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          h={'100%'}
          mx={2}
          cursor={'pointer'}
          justifyContent={'center'}
          _hover={{
            color: 'ghostVerse.green.base',
          }}
        >
          <Box display={'block'} mx={'auto'} w={'42px'}>
            <IconLogin />
          </Box>
          Login
        </Box>
      )}
      <Modal
        isOpen={opened}
        size="sm"
        onClose={close}
        isCentered
        scrollBehavior="inside"
        onCloseComplete={onCloseComplete}
      >
        <CustomModalOverlay />
        <ModalContent bgColor="black" pt={7} pb={10} px={0} position="relative">
          <ModalCloseButton _focus={{ outline: 'none' }} />
          <ModalHeader>
            <Text
              fontFamily={'CubicFive12'}
              textAlign="center"
              fontWeight="black"
              fontSize="2xl"
            >
              Connect your wallet
            </Text>
          </ModalHeader>
          <ModalBody px={10}>
            {isLoggingIn && (
              <Flex
                alignItems="center"
                backdropFilter="blur(3px)"
                bgColor="blackAlpha.700"
                justifyContent="center"
                position="absolute"
                inset={0}
                zIndex="overlay"
              >
                <Stack alignItems="center">
                  {ledgerOrPortalName ? (
                    <>
                      <Text fontSize="lg">Confirmation required</Text>
                      <Text fontSize="sm">Approve on {ledgerOrPortalName}</Text>
                    </>
                  ) : null}
                  <Spinner
                    thickness="3px"
                    speed="0.4s"
                    color="elvenTools.color2.base"
                    size="xl"
                  />
                </Stack>
              </Flex>
            )}
            <LoginComponent />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
