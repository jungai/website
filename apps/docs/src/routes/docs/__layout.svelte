<script lang="ts">
	import { page } from '$app/stores';
	import Navigation from '$lib/components/Navigation.svelte';
	import FaGithubAlt from 'svelte-icons/fa/FaGithubAlt.svelte';
	import Transition from '$lib/components/Transition.svelte';

	let isOpenNav = false;
</script>

<main class="relative flex">
	<Navigation open={isOpenNav} />
	<button
		class="md:hidden btn btn-circle fixed right-4 top-[70%]"
		on:click={() => (isOpenNav = !isOpenNav)}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/></svg
		>
	</button>
	<div class=" px-6 md:px-0 md:ml-[calc(var(--sidebar-width)_+_50px)] w-full">
		<div class="flex w-full justify-end py-2 md:px-8">
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
