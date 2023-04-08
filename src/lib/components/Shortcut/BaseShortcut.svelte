<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let href: string | null = null;
	export let onClick = () => {
		dispatch('click');
	};
</script>

<a
	{href}
	class="relative flex items-center justify-center min-h-[6rem] min-w-[6rem] rounded-lg bg-base-200 cursor-pointer"
	on:click={onClick}
	{...$$restProps}
>
	<slot />
</a>
