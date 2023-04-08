import type { Config } from 'sveltekit-i18n';
import i18n from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		// EN
		{ locale: 'en', key: '', loader: async () => (await import('./en/common.json')).default },

		// FR
		{ locale: 'fr', key: '', loader: async () => (await import('./fr/common.json')).default }
	]
};

export const { t: _, locale, locales, loading, loadTranslations } = new i18n(config);
