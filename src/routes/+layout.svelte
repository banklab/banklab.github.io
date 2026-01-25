<script lang="ts">
	// import { i18n } from '$lib/i18n'; // Temporarily commented out
	// import { ParaglideJS } from '@inlang/paraglide-sveltekit'; // Temporarily commented out
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../app.css';
	
	let { children } = $props(); // Using runes syntax
</script>

<!-- <ParaglideJS {i18n}> -->
	<div class="flex flex-col min-h-screen bg-background text-content">
		<Header />
		
		<main class="flex-grow">
			{@render children()} <!-- Using runes syntax -->
		</main>
		
		<Footer />
	</div>
<!-- </ParaglideJS> -->
