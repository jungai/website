<script lang="ts">
	import MdPlayArrow from 'svelte-icons/md/MdPlayArrow.svelte';
	import type { TConfig } from '$types';
	import { cls } from '$lib/utils';

	export let items: TConfig['routes'] = [];
	export let active: string;

	$: target = (base: string, path: string) => `${base}${path}`;
</script>

<ul class="flex flex-col">
	{#each items as item}
		<li class="text-sm md:text-md">{item.name}</li>
		{#each item.child as child}
			<li
				class={cls([
					'cursor-pointer relative hover:underline hover:text-secondary pl-6',
					active === target(item.basePath, child.path) ? 'underline' : null
				])}
			>
				<a class="inline-block w-full" href={target(item.basePath, child.path)}> {child.name}</a>
				{#if active === target(item.basePath, child.path)}
					<span class="absolute w-5 h-5 rotate-180 -right-2 top-1"><MdPlayArrow /></span>
				{/if}
			</li>
		{/each}
	{/each}
</ul>
