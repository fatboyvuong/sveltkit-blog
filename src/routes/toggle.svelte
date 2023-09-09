<script lang="ts">
	import { theme, toggleTheme } from '$lib/theme';
	import { onMount } from 'svelte';
	// import { Sun, Moon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	// Render on Client
	let Sun: any, Moon: any;
	onMount(async () => {
		Sun = (await import('lucide-svelte')).Sun;
		Moon = (await import('lucide-svelte')).Moon;
		return { Sun, Moon };
	});
</script>

<button on:click={toggleTheme} aria-label="Toggle theme">
	<!-- use $ sign for store object -->
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<!-- <Sun /> -->
			<svelte:component this={Sun} />
			<span>Light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<!-- <Moon /> -->
			<svelte:component this={Moon} />
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}
	button > * {
		display: flex;
		gap: var(--size-2);
	}
</style>
