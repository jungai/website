<script lang="ts">
	import MdMenu from 'svelte-icons/md/MdMenu.svelte';
	import { browser } from '$app/env';
	import { fly } from 'svelte/transition';

	let isExpand: boolean = false;

	$: {
		if (browser) {
			if (isExpand) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = 'visible';
			}
		}
	}
</script>

{#if isExpand}
	<div class="fixed z-30 w-full h-screen bg-black/50">
		<div class="absolute w-full h-screen" on:click={() => (isExpand = false)} />
		<div class="relative z-40 h-screen w-2/5 bg-white" transition:fly={{ x: 10, opacity: 1 }}>
			<slot />
		</div>
	</div>
{:else}
	<div
		class="fixed lg:hidden top-[15%] right-5 w-10 h-10 border rounded-full
flex justify-center items-center border-primary bg-white
shadow-lg"
		on:click={() => (isExpand = true)}
	>
		<div class="w-6 h-6">
			<MdMenu />
		</div>
	</div>
{/if}
