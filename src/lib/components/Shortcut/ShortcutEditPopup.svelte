<script lang="ts">
	import { _ } from '$lib/translations';
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$lib/directives/ClickOutside';
	import { shortcuts } from '$lib/stores/persistent';
	import { shortcutEditPopup } from '$lib/stores/states';

	const closePopup = () => {
		$shortcutEditPopup = null;
	};

	const saveShortcut = () => {
		// Add https:// to the link
		if (
			$shortcutEditPopup?.shortcut &&
			$shortcutEditPopup?.shortcut?.link &&
			$shortcutEditPopup?.shortcut?.link.length > 0 &&
			$shortcutEditPopup?.shortcut?.link.indexOf('http') !== 0
		) {
			$shortcutEditPopup.shortcut.link = `https://${$shortcutEditPopup?.shortcut?.link}`;
		}

		// Prepare shortcut
		const newShortcut = $shortcutEditPopup?.shortcut;

		// Update shortcut
		$shortcuts[$shortcutEditPopup?.shortcutIndex as number] = newShortcut as never;

		// Close popup
		closePopup();
	};
</script>

{#if $shortcutEditPopup !== null}
	<div class="modal modal-open">
		<div
			class="modal-box relative p-4"
			use:clickOutside
			on:click_outside={closePopup}
			transition:fade={{ duration: 200 }}
		>
			<div class="flex items-center justify-between p-2 pt-0 pr-0">
				<h3 class="text-lg font-bold">
					{#if $shortcutEditPopup.shortcut === null}
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
					bind:value={$shortcutEditPopup.shortcut.title}
					placeholder={$_('shortcut.input-title')}
					class="input input-bordered w-full"
					on:keydown={(e) => {
						if (e.key === 'Enter') saveShortcut();
					}}
				/>
				<input
					type="text"
					bind:value={$shortcutEditPopup.shortcut.link}
					placeholder={$_('shortcut.input-link')}
					class="input input-bordered w-full"
					on:keydown={(e) => {
						if (e.key === 'Enter') saveShortcut();
					}}
				/>
				<!-- @TODO $_('shortcut.input-icon') /> -->
			</div>

			<div class="modal-action mt-2">
				<button class="btn btn-primary" on:click={saveShortcut}>{$_('shortcut.save')}</button>
			</div>
		</div>
	</div>
{/if}
