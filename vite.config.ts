// Vite build configuration — intentionally minimal.
// All SvelteKit-specific settings (adapter, base path, prerender) live in svelte.config.js.
// This file just wires up the two required plugins: Tailwind CSS and SvelteKit.

import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()]
});
