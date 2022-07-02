<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	$: activeRoute = $page.url.pathname;

	let items = [
		{
			name: 'Tools',
			basePath: '/docs/tools',
			child: [
				{ name: 'Taze', path: '/taze' },
				{ name: 'Ni', path: '/ni' }
			]
		}
	];
</script>

<Header />
<main>
	<Sidebar {activeRoute} {items} />
	<article
		class="pl-[calc(var(--sidebar-width)_+_50px)] pt-[calc(var(--header-height)_+_10px)] prose"
	>
		<slot />
	</article>
</main>
