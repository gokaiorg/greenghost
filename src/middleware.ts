import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Redirect /en to / (Canonical URL for default locale)
    if (pathname.startsWith('/en/') || pathname === '/en') {
        const newPath = pathname.replace(/^\/en/, '');
        return NextResponse.redirect(new URL(newPath || '/', request.url));
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    if (pathnameIsMissingLocale) {
        // Rewrite to default locale (en) for root paths
        return NextResponse.rewrite(
            new URL(
                `/${i18n.defaultLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|images|fonts|sw.js|manifest.webmanifest|robots.txt|sitemap.xml|llms.txt|.*\\.png$).*)",
    ],
};
