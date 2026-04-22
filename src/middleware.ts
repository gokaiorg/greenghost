import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import { i18n } from "./i18n-config";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales;
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  // Sanitize languages: matchLocale expects valid BCP 47 tags, and Negotiator might return '*'
  languages = languages.filter((lang) => lang !== "*");

  // Check for France localization and French browser language
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("x-nf-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code");
  const isFrenchBrowser = languages.some((lang) =>
    lang.toLowerCase().startsWith("fr"),
  );

  // If browser is French AND user is localized in France, enforce French
  if (country === "FR" && isFrenchBrowser) {
    return "fr";
  }

  if (languages.length === 0) {
    return i18n.defaultLocale;
  }

  try {
    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    return locale;
  } catch (error) {
    console.error("Locale matching error:", error);
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect away from the default locale's prefix to maintain a clean URL.
  // e.g. /en/about -> /about
  if (
    pathname.startsWith(`/${i18n.defaultLocale}/`) ||
    pathname === `/${i18n.defaultLocale}`
  ) {
    const newPath = pathname.replace(`/${i18n.defaultLocale}`, "") || "/";

    // Before allowing redirect to root (English), check if we should enforce French
    const locale = getLocale(request);
    if (locale === "fr") {
      return NextResponse.redirect(
        new URL(
          `/fr${newPath.startsWith("/") ? "" : "/"}${newPath}`,
          request.url,
        ),
      );
    }

    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /about
    // If locale is default (en), we want to rewrite to /en/about so Next.js handles it,
    // but keep URL as /about.
    if (locale === i18n.defaultLocale) {
      return NextResponse.rewrite(
        new URL(
          `/${i18n.defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
          request.url,
        ),
      );
    }

    // e.g. incoming request is /about, locale is fr
    // Redirect to /fr/about
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|fonts|sw.js|manifest.webmanifest|robots.txt|sitemap.xml|llms.txt|.*\\.png$).*)",
  ],
};
