<script lang="ts">
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<div class="flex flex-col min-h-screen bg-background text-content">
	<Header />

	<main class="flex-grow">
		{@render children()}
	</main>

	<Footer />
</div>
