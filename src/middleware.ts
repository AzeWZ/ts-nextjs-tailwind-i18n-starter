import { createI18nMiddleware } from 'next-international/middleware';
import type { NextRequest } from 'next/server';

// @ts-ignore
const I18nMiddleware = createI18nMiddleware({
    locales: ['en', 'fr']  as const,
    defaultLocale: 'en',
});

export function middleware(request: NextRequest) {
    return I18nMiddleware(request);
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
};