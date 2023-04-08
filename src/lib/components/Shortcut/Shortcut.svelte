<script lang="ts">
	import { shortcuts } from '$lib/stores/persistent';
	import BaseShortcut from './BaseShortcut.svelte';
	import ShortcutMenu from '$lib/components/Shortcut/ShortcutMenu.svelte';

	export let shortcut: App.Shortcut;
	export let index = $shortcuts.length + 1;
</script>

{#if shortcut !== null}
	<BaseShortcut>
		<ShortcutMenu {shortcut} {index} />
		<a href={shortcut.link} class="flex flex-col items-center text-center gap-2 mt-auto w-full">
			<img
				src={shortcut.icon ??
					`https://www.google.com/s2/favicons?sz=64&domain_url=${shortcut.link}`}
				alt={shortcut.title}
				height="32"
				width="32"
			/>
			<div class="text-lg py-1 min-h-[36px] min-w-full mt-auto">{shortcut.title}</div>
		</a>
	</BaseShortcut>
{/if}
