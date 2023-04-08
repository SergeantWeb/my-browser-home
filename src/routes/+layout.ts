import type { LayoutLoad } from './$types';
import { loadTranslations, locale } from '$lib/translations';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const initLocale = locale.get() || 'en';

	await loadTranslations(initLocale, pathname);
	return {};
};
