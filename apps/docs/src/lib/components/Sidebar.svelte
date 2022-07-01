<script lang="ts">
	let items = Array(1000).fill('item');
</script>

<aside
	class="fixed top-[60px] border-r border-[#34495e] max-w-[300px] w-full h-screen overflow-y-auto bg-white"
>
	{#each items as item}
		<div>
			{item}
		</div>
	{/each}
</aside>
