import { persisted } from 'svelte-local-storage-store';
import config from '$lib/config';

export const shortcuts = persisted('my-browser-home.shortcuts', []);
export const settings = persisted('my-browser-home.settings', {
	'new-tab-shortcuts': true,
	'favicon-provider': config.defaultIconProvider,
	'lang': 'en'
});
