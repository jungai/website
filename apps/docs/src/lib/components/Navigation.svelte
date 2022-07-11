<script lang="ts">
	import { page } from '$app/stores';
	import { config } from '$config';
	import { cls } from '$lib/utils';

	export let open: boolean = true;

	let active: number = 0;
</script>

<nav class={cls(['drawer bg-base-200 w-sidebar-width fixed z-20', !open ? null : 'hidden'])}>
	<div class="drawer-side">
		<div class="text-2xl font-semibold p-4">Jungai Docs</div>
		{#each config.routes as route, index}
			<div
				tabindex={active}
				class={cls(['collapse', active === index ? 'collapse-open' : null])}
				on:click={() => (active = index)}
			>
				<div class="collapse-title font-medium">
					{route.name}
				</div>
				{#if route.child.length > 0}
					<div class="collapse-content">
						<ul class="menu p-2 overflow-y-auto w-full text-base-content gap-2">
							{#each route.child as child}
								<li>
									<a
										class={cls([$page.url.pathname === child.path ? 'active' : null])}
										href={child.path}>{child.name}</a
									>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</nav>
