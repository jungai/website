/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				'header-height': 'var(--header-height)'
			},
			width: {
				'sidebar-width': 'var(--sidebar-width)'
			},
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: ['dracula']
	}
};
