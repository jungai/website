<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	let items = Array(1000).fill('item');
</script>

<Header />
<main>
	<Sidebar />
	<div class="pl-[400px] pt-[60px]">
		first
		{#each items as item}
			<div>
				{item}
			</div>
		{/each}
		hello
	</div>
</main>
