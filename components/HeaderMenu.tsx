import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';
import { Logo } from './Logo';
import Link from 'next/link';

export const HeaderMenu: FC<PropsWithChildren<PropsWithChildren>> = ({
  children,
}) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      py={{ base: '4', md: '9' }}
    >
      <Logo />
      <Box
        marginLeft="auto"
        marginRight={{ base: 'auto', md: 0 }}
        display="flex"
      >
        <Link href="/about-green-garden">
          <Box marginRight={4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#4cfd27"
              width="40px"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
        </Link>
        <Link href="/cannabis-shop-phuket">
          <Box marginRight={4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#4cfd27"
              width="40px"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
        </Link>
        <Link href="/contact-us-buy-weed-online">
          <Box marginRight={4}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#4cfd27"
              width="40px"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
        </Link>
        <Link href="https://goo.gl/maps/uYtaLNoaQu9wTZsZ8">
          <svg
            width="40px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#4cfd27"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </Box>

      {children}
    </Box>
  );
};
