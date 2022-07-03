<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { config } from '$config';

	$: activeRoute = $page.url.pathname;
</script>

<Header />
<main>
	<Sidebar {activeRoute} items={config.routes} />
	<article
		class="ml-[calc(var(--sidebar-width)_+_50px)] pt-[calc(var(--header-height)_+_10px)] prose"
	>
		<slot />
	</article>
</main>
