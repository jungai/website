<script lang="ts">
	import MdPlayArrow from 'svelte-icons/md/MdPlayArrow.svelte';
	type TItem = {
		name: string;
		path: string;
		child: Omit<TItem, 'child'>[];
	};

	export let items: TItem[] = [];

	let isActive: number | undefined;
</script>

<aside
	class="fixed top-[var(--header-height)]
	w-sidebar-width h-screen overflow-y-auto bg-primary text-white
	pt-6 pl-6
	"
>
	<nav>
		<ul class="flex flex-col">
			{#each items as item, index}
				<li class="text-md md:text-lg cursor-pointer relative" on:click={() => (isActive = index)}>
					<a href="">{item.name}</a>
					{#if isActive === index}
						<span class="absolute w-5 h-5 rotate-180 -right-2 top-1"><MdPlayArrow /></span>
					{/if}
				</li>
				{#if item.child.length > 0 && isActive === index}
					<ul class="flex flex-col pl-6">
						{#each item.child as child}
							<li class="cursor-pointer">
								{child.name}
							</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</ul>
	</nav>
</aside>
