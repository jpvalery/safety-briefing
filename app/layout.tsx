import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';

export const metadata: Metadata = {
	title: 'General Aviation Passenger Briefing',
	description: 'Safety briefing for general aviation passengers',
	generator: 'v0.app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
