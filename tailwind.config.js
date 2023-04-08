/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true
		},
		screens: {
			tablet: '324px',
			laptop: '532px',
			desktop: '740px'
		}
	},
	plugins: [require('daisyui')]
};
