import { type Locale, defaultLocale, locales } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import type React from 'react';

const jetbrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-jetbrains-mono',
});

export async function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const current = locales.includes(locale as Locale)
		? (locale as Locale)
		: defaultLocale;

	const t = translations[current];

	return {
		title: t.title,
		description: t.description, // ideally add a `description` key in translations
		openGraph: {
			title: t.title,
			description: t.description,
			images: [
				{
					url: 'https://safety-briefing.com/og.png',
				},
			],
			locale: current,
		},
		generator: 'v0.app',
	};
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!locales.includes(locale as Locale)) {
		notFound();
	}

	return (
		<html lang={locale} className={jetbrainsMono.variable}>
			<body>{children}</body>
		</html>
	);
}
