import { BeforeFlyingSection } from '@/components/before-flying-section';
import { Footer } from '@/components/footer';
import { LanguageSwitcher } from '@/components/language-switcher';
import { PassengerBriefingSection } from '@/components/passenger-briefing-section';
import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import React from 'react';

export default function HomePage({
	params,
}: { params: Promise<{ locale: Locale }> }) {
	const { locale } = React.use(params);
	const t = translations[locale];

	if (!t) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				Loading...
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white">
			<header className="border-zinc-900 border-b-2 bg-zinc-50 py-6">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						<h1 className="font-bold text-3xl text-zinc-950 uppercase tracking-wide md:text-4xl">
							{t.title}
						</h1>
						<LanguageSwitcher currentLocale={locale} />
					</div>
				</div>
			</header>

			<main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<BeforeFlyingSection locale={locale} />
				<PassengerBriefingSection locale={locale} />
			</main>

			<Footer locale={locale} />
		</div>
	);
}
