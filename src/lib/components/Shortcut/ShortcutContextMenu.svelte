<script lang="ts">
	import { clickOutside } from '$lib/directives/ClickOutside';
	import { shortcuts } from '$lib/stores/persistent';
	import { shortcutContextMenu, shortcutEditPopup } from '$lib/stores/states';

	const closeContextMenu = () => {
		$shortcutContextMenu = null;
	};

	const editShortcut = () => {
		$shortcutEditPopup = {
			shortcut: $shortcutContextMenu?.shortcut as App.Shortcut,
			shortcutIndex: $shortcutContextMenu?.shortcutIndex as number
		};
	};

	const removeShortcut = () => {
		$shortcuts.splice($shortcutContextMenu?.shortcutIndex as number, 1);
		$shortcuts = $shortcuts;
		closeContextMenu();
	};
</script>

{#if $shortcutContextMenu !== null}
	<div
		class="dropdown dropdown-open fixed z-50"
		style="top:{$shortcutContextMenu.position.y}px; left:{$shortcutContextMenu.position.x}px"
		use:clickOutside
		on:click_outside={closeContextMenu}
	>
		<ul
			tabIndex="0"
			class="dropdown-content menu menu-compact shadow-lg bg-base-100 rounded-lg min-w-[120px]"
		>
			<li><button on:click={editShortcut} tabindex="0">Edit</button></li>
			<li><button class="text-error" on:click={removeShortcut} tabindex="0">Remove</button></li>
		</ul>
	</div>
{/if}
