import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

const locales = {
	en: "en",
	fr: "fr",
	es: "es",
	de: "de",
	it: "it",
	pt: "pt",
};

export default defineConfig({
	site: "https://safety-briefing.com",
	trailingSlash: "never",
	build: { format: "file" },
	i18n: {
		defaultLocale: "en",
		locales: Object.keys(locales),
		routing: { prefixDefaultLocale: true },
	},
	integrations: [
		icon(),
		sitemap({
			i18n: { defaultLocale: "en", locales },
			filter: (page) => page !== "https://safety-briefing.com/",
		}),
	],
	vite: { plugins: [tailwindcss()] },
});
