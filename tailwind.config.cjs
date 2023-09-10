import { join } from 'path';

// Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
	// darkmode control via class
	darkMode: 'class',

	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// Appen path to Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		// Append Skeleton plugin
		skeleton({
			themes: { preset: ["sahara"] }
		}),
	]
};

module.exports = config;
