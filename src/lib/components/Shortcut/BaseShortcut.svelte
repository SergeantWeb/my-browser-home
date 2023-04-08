<script lang="ts">
	export let href: string | null = null;
</script>

<div
	class="relative flex justify-center min-h-[8rem] min-w-[8rem] rounded-lg bg-base-200 cursor-pointer"
	{...$$restProps}
>
	<slot />
</div>
