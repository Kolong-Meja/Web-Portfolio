<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { fadeInScrollAnimation } from '$lib/services/animation';

	onMount(() => {
		const targets = document.querySelectorAll('.show-on-scroll');

		fadeInScrollAnimation(targets, 'animate-fadeIn');
	});
</script>

<!-- Navigation -->
<Navbar />

<slot />

<!-- Footer -->
<Footer />
