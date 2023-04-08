<script lang="ts">
	import { shortcuts } from '$lib/stores/persistent';
	import ShortcutPopup from '$lib/components/Shortcut/ShortcutPopup.svelte';
	import MenuIcon from 'virtual:icons/ri/more-line';

	export let shortcut: App.Shortcut;
	export let index = $shortcuts.length + 1;

	let isShortcutPopupOpen = false;
</script>

<button
	class="absolute top-0 right-0 px-2 rounded-md z-20 cursor-pointer hover:bg-base-100"
	on:click|preventDefault={() => (isShortcutPopupOpen = true)}
>
	<MenuIcon />
</button>

<ShortcutPopup {shortcut} {index} bind:isOpen={isShortcutPopupOpen} />
