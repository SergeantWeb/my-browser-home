<script lang="ts">
	import utils from '$lib/components/utils';
	import { settings } from '$lib/stores/persistent';
	import { shortcuts } from '$lib/stores/persistent';
	import BaseShortcut from './BaseShortcut.svelte';
	import ShortcutMenu from '$lib/components/Shortcut/ShortcutMenu.svelte';

	export let shortcut: App.Shortcut;
	export let index = $shortcuts.length + 1;
</script>

{#if shortcut && shortcut.link && shortcut.title}
	<BaseShortcut>
		<ShortcutMenu {shortcut} {index} />
		<a
			href={shortcut.link}
			target={$settings && $settings['new-tab-shortcuts'] ? '_blank' : ''}
			class="flex-1 flex flex-col items-center text-center gap-2 pt-4 w-full"
		>
			{#key $settings['favicon-provider']}
				<img
					src={shortcut.icon ?? utils.getFaviconUrl(shortcut.link)}
					alt={shortcut.title}
					height="64"
					width="64"
					class="m-auto"
				/>
			{/key}
			<div class="text-lg py-1 min-h-[36px] min-w-full">{shortcut.title}</div>
		</a>
	</BaseShortcut>
{/if}
