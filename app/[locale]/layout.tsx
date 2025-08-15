import { type Locale, locales } from '@/lib/i18n';
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
