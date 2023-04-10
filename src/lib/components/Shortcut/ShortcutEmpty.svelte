<script lang="ts">
	import { shortcuts } from '$lib/stores/persistent';
	import { shortcutEditPopup } from '$lib/stores/states';
	import BaseShortcut from './BaseShortcut.svelte';
	import AddIcon from 'virtual:icons/ri/add-line';

	const openShortcutEditPopup = () => {
		$shortcutEditPopup = {
			shortcut: {
				title: '',
				link: ''
			},
			shortcutIndex: $shortcuts.length + 1
		};
	};
</script>

<BaseShortcut on:click={openShortcutEditPopup}>
	<AddIcon class="text-3xl m-auto" />
</BaseShortcut>
