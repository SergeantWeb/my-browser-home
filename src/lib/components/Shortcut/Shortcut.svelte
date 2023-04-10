<script lang="ts">
	import utils from '$lib/components/utils';
	import { settings, shortcuts } from '$lib/stores/persistent';
	import { shortcutContextMenu } from '$lib/stores/states';
	import BaseShortcut from './BaseShortcut.svelte';

	export let shortcut: App.Shortcut;
	export let index = $shortcuts.length + 1;

	const openContextMenu = (e: MouseEvent) => {
		$shortcutContextMenu = {
			position: { x: e.x, y: e.y },
			shortcut,
			shortcutIndex: index
		};
	};
</script>

{#if shortcut && shortcut.link && shortcut.title}
	<BaseShortcut>
		<a
			href={shortcut.link}
			target={$settings && $settings.openShortcutInNewTab ? '_blank' : ''}
			class="flex-1 flex flex-col items-center text-center gap-2 pt-4 w-full"
			on:contextmenu|preventDefault={openContextMenu}
		>
			{#key $settings.faviconProvider}
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
