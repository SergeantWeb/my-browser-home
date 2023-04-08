/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true
		},
		screens: {
			tablet: '285px',
			laptop: '560px',
			desktop: '830px'
		}
	},
	plugins: [require('daisyui')]
};
