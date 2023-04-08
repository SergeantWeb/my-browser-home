<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let onClick = () => {
		dispatch('click');
	};
</script>

<button
	class="relative flex justify-center min-h-[8rem] min-w-[8rem] rounded-lg bg-base-200 cursor-pointer"
	on:click={onClick}
	{...$$restProps}
>
	<slot />
</button>
