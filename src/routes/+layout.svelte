<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<!-- Navigation -->
<Navbar />

<slot />

<!-- Footer -->
<Footer />
