<script lang="ts">
	export let type = 'text';
	export let name: string | null | undefined = null;
	export let title: string | null | undefined = null;
	export let value: string | null | undefined = null;
	export let checked: boolean | null | undefined = null;
	export let options: string[] | null | undefined = null;
</script>

<label class="flex items-center gap-4 p-2 w-full">
	{#if title}
		<span class="select-none cursor-pointer">{title}</span>
	{/if}

	{#if type === 'text'}
		<input type="text" {name} bind:value />
	{:else if type === 'checkbox'}
		<input type="checkbox" class="toggle" {name} bind:checked />
	{:else if type === 'select'}
		<select {name} class="select select-sm" bind:value>
			{#if Array.isArray(options)}
				{#each options as option}
					<option name={option}>{option}</option>
				{/each}
			{/if}
		</select>
	{/if}
</label>
