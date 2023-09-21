import { join } from 'path'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { oregano } from './oregano-theme'
import { tailglow } from './tailglow-theme'

/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],

	theme: {
		extend: {}
	},

	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/container-queries'),
		skeleton({
			themes: {
				custom: [oregano, tailglow]
			}}),
		
	]
};

module.exports = config;
