import { de } from "./de";
import { en, type Translation } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { it } from "./it";
import { pt } from "./pt";

export const translations = { en, fr, es, de, it, pt } as const;

export type Locale = keyof typeof translations;

export const locales = Object.keys(translations) as Locale[];
export const defaultLocale: Locale = "en";

/** Language names in their own language, used by the switcher and hreflang. */
export const languageNames: Record<Locale, string> = {
	en: "English",
	fr: "Français",
	es: "Español",
	de: "Deutsch",
	it: "Italiano",
	pt: "Português",
};

/** BCP 47 region tags, used for og:locale (must include region). */
export const ogLocales: Record<Locale, string> = {
	en: "en_US",
	fr: "fr_FR",
	es: "es_ES",
	de: "de_DE",
	it: "it_IT",
	pt: "pt_PT",
};

export function isLocale(value: string | undefined): value is Locale {
	return !!value && value in translations;
}

export function useTranslations(locale: Locale): Translation {
	return translations[locale];
}
