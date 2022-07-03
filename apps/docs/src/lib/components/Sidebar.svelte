<script lang="ts">
	import MdPlayArrow from 'svelte-icons/md/MdPlayArrow.svelte';
	import { cls } from '$lib/utils';
	import type { TConfig } from '$types';

	export let activeRoute: string | null;
	export let items: TConfig['routes'] = [];

	$: target = (base: string, path: string) => `${base}${path}`;
</script>

<aside
	class="fixed top-[var(--header-height)] z-40
	w-sidebar-width h-screen overflow-y-auto bg-primary text-white
	pt-6 pl-6
	"
>
	<nav>
		<ul class="flex flex-col">
			{#each items as item}
				<li class="text-md md:text-lg">
					{item.name}
				</li>
				{#if item.child.length > 0}
					<ul class="flex flex-col pl-6">
						{#each item.child as child}
							<li
								class={cls([
									'cursor-pointer relative hover:underline hover:text-secondary',
									activeRoute === target(item.basePath, child.path) ? 'underline' : null
								])}
							>
								<a class="inline-block w-full" href={target(item.basePath, child.path)}>
									{child.name}</a
								>
								{#if activeRoute === target(item.basePath, child.path)}
									<span class="absolute w-5 h-5 rotate-180 -right-2 top-1"><MdPlayArrow /></span>
								{/if}
							</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</ul>
	</nav>
</aside>
