<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { locale } from '$lib/translations';
	import SettingsButton from '$lib/components/Settings/SettingsTrigger.svelte';
	import SettingsPanel from '$lib/components/Settings/SettingsPanel.svelte';

	onMount(() => {
		if (typeof navigator !== 'undefined') {
			const browserLang = navigator.language.split('-')[0] ?? null;
			locale.set(browserLang ?? 'en');
		}
	});
</script>

<div class="container flex h-screen w-screen">
	<SettingsButton />
	<slot />
</div>

<SettingsPanel />
