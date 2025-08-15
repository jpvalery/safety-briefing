'use client';

import { type Locale, locales } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Link from 'next/link';
import { useState } from 'react';

interface LanguageSwitcherProps {
	currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
	const [isOpen, setIsOpen] = useState(false);
	const t = translations[currentLocale];

	return (
		<div className="relative print:hidden">
			<button
				type="button"
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 border-2 border-zinc-300 bg-white px-3 py-2 font-medium text-sm text-zinc-800 transition-colors hover:border-zinc-900"
			>
				{t.languages[currentLocale]}
				<svg
					className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>Chevron Down</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{isOpen && (
				<div className="absolute top-full left-0 z-10 mt-1 min-w-full border-2 border-zinc-300 bg-white shadow-lg">
					{locales.map((locale) => (
						<Link
							key={locale}
							href={`/${locale}`}
							onClick={() => setIsOpen(false)}
							className={`block px-3 py-2 font-medium text-sm transition-colors hover:bg-zinc-100 ${
								currentLocale === locale ? 'bg-zinc-900 text-white' : 'text-zinc-800'
							}`}
						>
							{t.languages[locale]}
						</Link>
					))}
				</div>
			)}
		</div>
	);
}
