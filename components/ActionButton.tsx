// The component for triggering functions. For in-app navigation use Next Link component

import { Box, BoxProps } from '@chakra-ui/react';
import { FC, PropsWithChildren, useCallback } from 'react';

interface ActionButtonProps extends BoxProps {
  onClick: () => void;
  isFullWidth?: boolean;
  disabled?: boolean;
}

export const ActionButton: FC<PropsWithChildren<ActionButtonProps>> = ({
  children,
  onClick,
  isFullWidth = false,
  disabled = false,
  ...props
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) {
      onClick();
    }
  }, [disabled, onClick]);

  return (
    <Box
      as="button"
      color={'ghostVerse.green.base'}
      borderColor={'ghostVerse.green.base'}
      fontSize={{ base: 'xl' }}
      borderWidth={1}
      bgColor="transparent"
      backdropFilter={'blur(3px)'}
      p={4}
      mx={'auto'}
      fontFamily={'vt323'}
      _hover={{
        borderColor: 'ghostVerse.green.base',
        color: 'black',
        backgroundColor: 'ghostVerse.green.base',
      }}
      transition="background-color .3s"
      width={isFullWidth ? '100%' : 'auto'}
      onClick={handleClick}
      opacity={!disabled ? 1 : 0.5}
      {...props}
    >
      {children}
    </Box>
  );
};
