<script lang="ts">
	import { shortcuts } from '$lib/stores/persistent';
	import Shortcut from '$lib/components/Shortcut/Shortcut.svelte';
	import ShortcutEmpty from '$lib/components/Shortcut/ShortcutEmpty.svelte';
</script>

<div class="flex items-center flex-wrap gap-2 m-auto p-2 rounded-lg border-2 border-base-200">
	{#each $shortcuts as shortcut, index}
		<Shortcut {shortcut} {index} />
	{/each}
	<ShortcutEmpty />
</div>
