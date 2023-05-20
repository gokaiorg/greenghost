import Head from 'next/head';
import { FC, memo } from 'react';
import { defaultMetaTags, dappHostname } from '../config/dappUi';
import { useRouter } from 'next/router';
import Script from 'next/script';

export interface MetaHeadProps {
  metaTitle?: string;
  metaName?: string;
  metaDescription?: string;
  metaImage?: string;
  metaUrl?: string;
}

export const MetaHead: FC<MetaHeadProps> = memo(({ metaName, metaUrl }) => {
  const router = useRouter();
  const canonicalUrl = `https://green.gd${router.asPath}`;
  return (
    <Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WQL8CG2');`,
        }}
      ></Script>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="author" content="Gokai Labs | gokai.org" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <meta name="theme-color" content="#000000" />
      <link
        rel="shortcut icon"
        href={`${metaUrl || dappHostname}/favicon.ico`}
      />
      <link
        rel="icon"
        sizes="192x192"
        href={`${metaUrl || dappHostname}/logo192.png`}
      />
      <meta
        name="msapplication-square310x310logo"
        content={`${metaUrl || dappHostname}/logo512.png`}
      ></meta>
      <link
        rel="apple-touch-icon"
        href={`${metaUrl || dappHostname}/logo192.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${metaUrl || dappHostname}/logo96.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={`${metaUrl || dappHostname}/logo144.png`}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={`${metaUrl || dappHostname}/logo192.png`}
      />
      <link
        rel="mask-icon"
        href={`${metaUrl || dappHostname}/logo-G.svg`}
        color="#fff"
      />
      <link rel="manifest" href={`${metaUrl || dappHostname}/manifest.json`} />
      <meta
        name="application-name"
        content={metaName || defaultMetaTags.shortname}
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content={metaName || defaultMetaTags.shortname}
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta property="og:type" content="website" />
      <meta
        property="og:site_name"
        content={metaName || defaultMetaTags.shortname}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@GokaiLabs" />
      <meta name="twitter:site" content="@greenghostdegen" />
      <meta
        name="google-site-verification"
        content="dOuCZqslG5Lkw8i3jVwoGcedgH6-nIGGQ71qYu"
      />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
});

MetaHead.displayName = 'MetaHead';
