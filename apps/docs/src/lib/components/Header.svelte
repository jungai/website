<script lang="ts">
	import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';
</script>

<header
	class="fixed border-b border-[#34495e] w-full p-4 shadow-md flex justify-center items-center h-header-height z-50 bg-white"
>
	<div class="w-3/5 flex justify-between items-center text-primary">
		<a href="/docs/welcome">
			<h1 class="text-xl font-semibold">
				<span class="font-semibold text-secondary text-2xl">J</span>ungai Doc<span
					class="font-semibold text-secondary text-2xl">s</span
				>
			</h1>
		</a>
		<ul class="flex gap-4 items-center justify-center">
			<li class="hover:text-secondary hover:font-semibold hover:italic cursor-pointer">
				<a href="https://juver.xyz" target="_blank">Blog</a>
			</li>
			<li class="hover:text-secondary hover:font-semibold cursor-pointer">
				<a href="https://github.com/jungai/website" target="_blank">
					<div class="w-8 h-8">
						<FaGithubAlt />
					</div>
				</a>
			</li>
		</ul>
	</div>
</header>
