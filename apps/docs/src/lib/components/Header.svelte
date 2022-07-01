<script lang="ts">
	import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';
</script>

<header
	class="fixed border-b border-[#34495e] w-full p-4 shadow-md flex justify-center items-center h-[60px] z-50 bg-white"
>
	<div class="w-3/5 flex justify-between items-center">
		<h1 class="text-xl font-semibold">
			<span class="font-semibold text-[#1abc9c]">J</span>ungai Doc<span
				class="font-semibold text-[#1abc9c]">s</span
			>
		</h1>
		<ul class="flex gap-4 items-center justify-center">
			<li class="hover:text-[#9b59b6] hover:font-semibold hover:italic cursor-pointer">Blog</li>
			<li class="hover:text-[#9b59b6] hover:font-semibold cursor-pointer">
				<div class="w-8 h-8">
					<FaGithubAlt />
				</div>
			</li>
		</ul>
	</div>
</header>
