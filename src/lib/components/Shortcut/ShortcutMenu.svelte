<script lang="ts">
	import { shortcuts } from '$lib/stores/persistent';
	import ShortcutPopup from '$lib/components/Shortcut/ShortcutPopup.svelte';
	import MenuIcon from 'virtual:icons/ri/more-line';

	export let shortcut: App.Shortcut;
	export let index = $shortcuts.length + 1;

	let isShortcutPopupOpen = false;
</script>

<button
	class="absolute -top-4 -right-2 p-3 rounded-full z-20 cursor-pointer hover:bg-base-300"
	on:click|preventDefault={() => (isShortcutPopupOpen = true)}
>
	<MenuIcon />
</button>

<ShortcutPopup {shortcut} {index} bind:isOpen={isShortcutPopupOpen} />
