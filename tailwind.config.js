import flowbitePlugin from 'flowbite/plugin';
import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			bodoni: ['Libre Bodoni', 'serif'],
			lato: ['Lato', 'sans-serif'],
			grotesk: ['Space Grotesk', 'sans-serif']
		},
		extend: {
			colors: {
				light: '#FEFDED',
				dark: '#070F2B'
			},
			keyframes: {
				navSlideInDown: {
					'0%': {
						transform: 'translateY(-20%)',
						opacity: 0
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1
					}
				},
				navSlideOutUp: {
					'0%': {
						transform: 'translateY(0%)',
						opacity: 1
					},
					'100%': {
						transform: 'translateY(-20%)',
						opacity: 0
					}
				},
				slideInDown: {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: 1
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1
					}
				},
				slideOutUp: {
					'0%': {
						transform: 'translateY(0%)',
						opacity: 1
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: 1
					}
				},
				slideInLeft: {
					'0%': {
						transform: 'translateX(-30rem)',
						opacity: 1
					},
					'45%': {
						transform: 'translateX(2rem)',
						opacity: 1
					},
					'100%': {
						transform: 'translateX(0rem)',
						opacity: 1
					}
				},
				slideInRight: {
					'0%': {
						transform: 'translateX(30rem)',
						opacity: 1
					},
					'45%': {
						transform: 'translateX(-2rem)',
						opacity: 1
					},
					'100%': {
						transform: 'translateX(0rem)',
						opacity: 1
					}
				},
				flipRight: {
					'0%': { transform: 'rotateY(-100deg)' },
					'60%': { transform: 'rotateY(25deg)' },
					'100%': { transform: 'rotateY(0deg)' }
				},
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			}
		},
		animation: {
			navSlideInDown: 'navSlideInDown 0.2s ease-out forwards',
			navSlideOutUp: 'navSlideOutUp 0.2s ease-out forwards',
			slideInDown: 'slideInDown 0.3s ease-out forwards',
			slideOutUp: 'slideOutUp 0.3s ease-out forwards',
			slideInLeft: 'slideInLeft 1.0s ease-out forwards',
			slideInRight: 'slideInRight 1.0s ease-out forwards',
			flipRight: 'flipRight 1.2s ease-in-out forwards',
			fadeIn: 'fadeIn 0.7s ease-in forwards'
		}
	},
	darkMode: 'class',
	plugins: [
		flowbitePlugin,
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'animate-delay': (value) => ({
						animationDelay: value
					})
				},
				{ values: theme('transitionDelay') }
			);
		})
	]
};
