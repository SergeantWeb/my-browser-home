<script lang="ts">
	import { _, locales, loadTranslations } from "$lib/translations";
	import { fly } from 'svelte/transition';
	import config from '$lib/config';
	import { settings } from '$lib/stores/persistent';
	import { clickOutside } from '$lib/directives/ClickOutside';
	import { isSettingsMenuOpen } from '$lib/stores/states';
	import SettingsField from '$lib/components/Settings/SettingsField.svelte';

</script>

{#if $isSettingsMenuOpen}
	<div
		class="fixed top-0 right-0 min-h-screen p-4 bg-base-200 z-40"
		transition:fly={{ x: 200 }}
		use:clickOutside={'#settings-trigger'}
		on:click_outside={() => ($isSettingsMenuOpen = false)}
	>
		<div class="text-xl font-medium ml-2 mb-4">{$_('settings.title')}</div>

		<div class="flex flex-col gap-2">
			<SettingsField
				type="checkbox"
				name="new-tab-shortcuts"
				title={$_('settings.new-tab-shortcuts')}
				bind:checked={$settings['new-tab-shortcuts']}
			/>

			<SettingsField
				type="select"
				name="favicon-provider"
				title={$_('settings.favicon-provider')}
				options={config.iconProviders}
				bind:value={$settings['favicon-provider']}
			/>

			<SettingsField
				type="select"
				name="lang"
				title={$_('settings.lang')}
				options={$locales}
				bind:value={$settings['lang']}
				on:change={() => {
					loadTranslations($settings.lang)
				}}
			/>

		</div>
	</div>
{/if}
