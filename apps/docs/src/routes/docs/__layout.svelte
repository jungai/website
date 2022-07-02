<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<Header />
<main>
	<Sidebar
		items={[
			{ name: 'taze', path: '/docs/tools/taze', child: [] },
			{
				name: 'taze',
				path: '/docs/tools/taze',
				child: [{ name: 'test', path: '/docs/tools/test' }]
			}
		]}
	/>
	<article
		class="pl-[calc(var(--sidebar-width)_+_50px)] pt-[calc(var(--header-height)_+_10px)] prose"
	>
		<slot />
	</article>
</main>
