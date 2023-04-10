import type { LayoutLoad } from './$types';
import { loadTranslations, locale } from '$lib/translations';
import { get } from 'svelte/store';
import { settings } from '$lib/stores/persistent';

export const load: LayoutLoad = async ({ url }) => {
	const { pathname } = url;
	const $settings = get(settings);
	const initLocale = $settings.lang || locale.get() || 'en';

	await loadTranslations(initLocale, pathname);
	return {};
};
