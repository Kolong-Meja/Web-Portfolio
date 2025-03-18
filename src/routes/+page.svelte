<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Experience from '$lib/components/Experience.svelte';
</script>

<!-- Header -->
<Header />

<!-- About -->
<About />

<!-- Skills -->
<Skills />

<!-- Experience -->
<Experience />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.50);
	}
</style>
