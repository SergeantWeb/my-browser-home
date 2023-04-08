<script lang="ts">
	import { isSettingsMenuOpen } from '$lib/stores/states';
	import CloseIcon from 'virtual:icons/ri/close-line';
	import MenuIcon from 'virtual:icons/ri/more-line';
</script>

<button
	id="settings-trigger"
	class="fixed top-1 right-1 p-2 px-4 text-2xl rounded-lg cursor-pointer z-50 hover:bg-base-300"
	on:click={() => ($isSettingsMenuOpen = !$isSettingsMenuOpen)}
>
	{#if $isSettingsMenuOpen}
		<CloseIcon />
	{:else}
		<MenuIcon />
	{/if}
</button>
