import type { Locale } from '@/lib/i18n';
import { translations } from '@/lib/translations';
import Image from 'next/image';

interface PassengerBriefingSectionProps {
	locale: Locale;
}

export function PassengerBriefingSection({
	locale,
}: PassengerBriefingSectionProps) {
	const t = translations[locale];

	const briefingItems = [
		{
			...t.seatBelts,
			image: 'seatbelt safety demonstration with passenger fastening harness',
			imageFiles: ['seatbelts-1.png', 'seatbelts-2.png'],
		},
		{
			...t.environmental,
			image: 'aircraft cabin air vents and environmental controls diagram',
			imageFiles: ['environmental-1.png', 'environmental-2.png'],
		},
		{
			...t.fireExtinguisher,
			image: 'fire extinguisher location and operation in aircraft cabin',
			imageFiles: ['fire-1.png', 'fire-2.png'],
		},
		{
			...t.egress,
			image: 'aircraft emergency exit doors and evacuation procedures',
			imageFiles: ['egress-1.png', 'egress-2.png'],
		},
		{
			...t.traffic,
			image: 'pilot and passenger scanning for traffic outside aircraft windows',
			imageFiles: ['traffic-1.png', 'traffic-2.png'],
		},
		{
			...t.questions,
			image: 'pilot briefing passenger with question marks and communication',
			imageFiles: ['questions.png'],
		},
	];

	return (
		<section className="pb-24">
			<h2 className="mb-8 border-zinc-900 border-b-2 pb-2 font-bold text-2xl text-zinc-950 uppercase tracking-wide md:text-3xl">
				{t.passengerBriefing}
			</h2>

			<div className="space-y-8">
				{briefingItems.map((item, index) => (
					<div
						key={index}
						className="grid grid-cols-1 gap-8 border-2 border-zinc-900 bg-zinc-50 p-6 lg:grid-cols-2"
					>
						{/* Illustration Column */}
						<div className='grid grid-flow-col flex-wrap items-center justify-center gap-4'>
							{item.imageFiles.map((file, index) => (
								<Image
									key={index}
									src={`/${file}`}
									width={250}
									height={400}
									alt={`${item.title} - ${index + 1}`}
									className="h-auto max-w-full rounded-md"
								/>
							))}
						</div>

						{/* Content Column */}
						<div className="flex flex-col justify-center">
							<h3 className="mb-4 font-bold text-lg text-zinc-950 uppercase tracking-wide md:text-2xl">
								{item.title}
							</h3>
							<p className="text-zinc-800 leading-relaxed md:text-lg">
								{item.content}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
