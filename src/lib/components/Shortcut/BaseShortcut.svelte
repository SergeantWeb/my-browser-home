<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let onClick = () => {
		dispatch('click');
	};
</script>

<button
	class="relative flex justify-center min-h-[8rem] min-w-[8rem] rounded-lg bg-base-200 hover:bg-base-300 cursor-pointer transition-all"
	on:click={onClick}
	{...$$restProps}
>
	<slot />
</button>
