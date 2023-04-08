<script lang="ts">
	import { _ } from '$lib/translations';
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$lib/directives/ClickOutside';
	import { shortcuts } from '$lib/stores/persistent';

	export let isOpen = false;
	export let shortcut: App.Shortcut;
	export let index = $shortcuts.length + 1;

	let title = shortcut?.title;
	let link = shortcut?.link;

	const closePopup = () => {
		isOpen = false;
	};

	const saveShortcut = () => {
		// Add https:// to the link
		if (link?.indexOf('http') !== 0) {
			link = `https://${link}`;
		}

		// Prepare shortcut
		const newShortcut = { title, link };

		// Add or edit shortcut
		if (typeof shortcut === 'undefined') {
			$shortcuts.push(newShortcut as never);
			$shortcuts = $shortcuts;
			link = title = undefined
		} else {
			$shortcuts[index] = newShortcut;
		}

		// Close popup
		closePopup();
	};

	const removeShortcut = () => {
		$shortcuts.splice(index, 1);
		$shortcuts = $shortcuts;
		closePopup();
	};
</script>

{#if isOpen}
	<div class="modal modal-open">
		<div
			class="modal-box relative p-4"
			use:clickOutside
			on:click_outside={closePopup}
			transition:fade={{ duration: 200 }}
		>
			<div class="flex items-center justify-between p-2 pt-0 pr-0">
				<h3 class="text-lg font-bold">
					{#if shortcut === null}
						{$_('shortcut.title-add')}
					{:else}
						{$_('shortcut.title-edit')}
					{/if}
				</h3>
				<button class="btn btn-sm btn-circle" on:click={closePopup}>✕</button>
			</div>

			<div class="flex flex-col gap-2 mt-2">
				<input
					type="text"
					bind:value={title}
					placeholder={$_('shortcut.input-title')}
					class="input input-bordered w-full"
					on:keydown={(e) => {
						if(e.key === 'Enter') saveShortcut()
					}}
				/>
				<input
					type="text"
					bind:value={link}
					placeholder={$_('shortcut.input-link')}
					class="input input-bordered w-full"
					on:keydown={(e) => {
						if(e.key === 'Enter') saveShortcut()
					}}
				/>
				<!-- @TODO <input type="text" placeholder={$_('shortcut.input-icon')} class="input input-bordered w-full" /> -->
			</div>

			<div class="modal-action mt-2">
				{#if typeof shortcut !== 'undefined'}
					<button class="btn btn-ghost text-error" on:click={removeShortcut}
						>{$_('shortcut.remove')}</button
					>
				{/if}
				<button class="btn btn-primary" on:click={saveShortcut}>{$_('shortcut.save')}</button>
			</div>
		</div>
	</div>
{/if}
