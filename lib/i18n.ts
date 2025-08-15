export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function getLocaleFromPathname(pathname: string): Locale {
	const segments = pathname.split('/');
	const locale = segments[1] as Locale;
	return locales.includes(locale) ? locale : defaultLocale;
}
