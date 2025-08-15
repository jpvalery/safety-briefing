'use client';

import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import {
	BowlFoodIcon,
	PantsIcon,
	SmileyNervousIcon,
} from '@phosphor-icons/react';

interface BeforeFlyingSectionProps {
	locale: Locale;
}

export function BeforeFlyingSection({ locale }: BeforeFlyingSectionProps) {
	const t = translations[locale];

	const items = [
		{ ...t.feelingWell, icon: SmileyNervousIcon },
		{ ...t.emptyStomach, icon: BowlFoodIcon },
		{ ...t.clothing, icon: PantsIcon },
	];

	return (
		<section className="pb-24">
			<h2 className="mb-8 border-zinc-900 border-b-2 pb-2 font-bold text-2xl text-zinc-950 uppercase tracking-wide md:text-3xl">
				{t.beforeFlying}
			</h2>

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
				{items.map((item, index) => {
					const Icon = item.icon;
					return (
						<div key={index} className="border-2 border-zinc-900 bg-zinc-50 p-6">
							<div className="flex h-16 items-center gap-3 pb-4">
								<Icon size={42} />
								<h3 className="text-balance font-bold text-lg text-zinc-950 uppercase tracking-wide">
									{item.title}
								</h3>
							</div>
							<p className="text-zinc-800 leading-relaxed">{item.content}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}
