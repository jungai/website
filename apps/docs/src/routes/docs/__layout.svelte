<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	$: activeRoute = $page.url.pathname;

	let items = [
		{
			name: 'Tools',
			basePath: '/docs/tools',
			child: [{ name: 'Pnpm', path: '/pnpm' }]
		}
	];
</script>

<Header />
<main>
	<Sidebar {activeRoute} {items} />
	<article
		class="ml-[calc(var(--sidebar-width)_+_50px)] pt-[calc(var(--header-height)_+_10px)] prose"
	>
		<slot />
	</article>
</main>
