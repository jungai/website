<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Menu from '$lib/components/Menu.svelte';
	import { config } from '$config';

	$: activeRoute = $page.url.pathname;
</script>

<Header />
<main>
	<Navigation>
		<Menu active={activeRoute} items={config.routes} />
	</Navigation>
	<Sidebar>
		<Menu active={activeRoute} items={config.routes} />
	</Sidebar>
	<article
		class="p-6 md:ml-[calc(var(--sidebar-width)_+_50px)] pt-[calc(var(--header-height)_+_10px)] prose"
	>
		<slot />
	</article>
</main>
