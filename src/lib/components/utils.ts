import { get } from 'svelte/store';
import { settings } from '$lib/stores/persistent';
import config from '$lib/config';

export default {
	getFaviconUrl: (fullDomain: string) => {
		const $settings = get(settings);
		const provider = $settings['favicon-provider'] ?? config.defaultIconProvider;
		const domain = fullDomain.replace(/(^\w+:|^)\/\//, '');

		switch (provider) {
			default:
			case 'IconsHorse':
				return `https://icon.horse/icon/${domain}`;
			case 'Google':
				return `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`;
			case 'Duckduckgo':
				return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
			case 'Unavatar':
				return `https://unavatar.io/${domain}?size=256`;
			case 'Microlink':
				return `https://api.microlink.io/?url=${fullDomain}&embed=logo.url`;
			case 'Allesedv':
				return `https://f1.allesedv.com/144/${domain}`;
			case 'Clearbit':
				return `https://logo.clearbit.com/${domain}`;
			case 'Besticon':
				return `https://besticon-demo.herokuapp.com/icon?url=${domain}&size=180`;
			case 'Faviconkit':
				return `https://api.faviconkit.com/${domain}/144`;
			case 'Getfavicon':
				return `https://getfavicon.net/${domain}`;
		}
	}
};
