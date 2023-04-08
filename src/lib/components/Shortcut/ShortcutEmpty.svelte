<script lang="ts">
	import { shortcuts } from '$lib/stores/persistent';
	import BaseShortcut from './BaseShortcut.svelte';
	import ShortcutPopup from '$lib/components/Shortcut/ShortcutPopup.svelte';
	import AddIcon from 'virtual:icons/ri/add-line';

	export let shortcut: App.Shortcut;
	export let index = $shortcuts.length + 1;

	let isShortcutPopupOpen = false;
</script>

<BaseShortcut on:click={() => (isShortcutPopupOpen = true)}>
	<AddIcon class="text-3xl m-auto" />
</BaseShortcut>

<ShortcutPopup {index} bind:isOpen={isShortcutPopupOpen} />
