import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';

interface FooterProps {
	locale: Locale;
}

export function Footer({ locale }: FooterProps) {
	const t = translations[locale];

	return (
		<footer className="border-zinc-900 border-t-2 bg-zinc-50 py-6">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center text-zinc-800">
					<p className="mb-2">
						{t.footer.license}{' '}
						<a
							href="https://github.com/jpvalery/safety-briefing"
							target="_blank"
							rel="noopener noreferrer"
							className="font-semibold text-zinc-950 hover:underline"
						>
							GitHub
						</a>
					</p>
					<p className="text-xs text-zinc-500">
						For educational purposes only. Provided as-is. Not a substitute for
						official flight instructions.
					</p>
				</div>
			</div>
		</footer>
	);
}
