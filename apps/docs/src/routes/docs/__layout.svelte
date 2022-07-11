<script lang="ts">
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';
	import Transition from '$lib/components/Transition.svelte';
</script>

<main class="relative flex">
	<Sidebar />
	<div class="md:ml-[calc(var(--sidebar-width)_+_50px)] w-full">
		<div class="flex w-full justify-end py-2 px-8">
			<ul class="flex gap-4 items-center justify-center ">
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
		<article class="prose">
			<Transition url={$page.url}>
				<slot />
			</Transition>
		</article>
	</div>
</main>
