<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { fadeInScrollAnimation, navbarScrollAnimation } from '$lib/services/handler';

	onMount(() => {
		const targets = document.querySelectorAll('.show-on-scroll') as NodeListOf<HTMLElement>;
		const navbar = document.querySelector('.my-navbar') as HTMLElement;
		const mobileMenu = document.getElementById('mobile-menu') as HTMLElement;

		if (navbar) {
			navbarScrollAnimation(navbar, mobileMenu);
		}

		fadeInScrollAnimation(targets, 'animate-fadeIn');
	});
</script>

<!-- Navigation -->
<Navbar />

<!-- Content -->
<slot />

<!-- Footer -->
<Footer />
