module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
		},
		minWidth: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
		},
		colors: {
			purple: {
				500: '#855CF8',
			},
			gray: {
				500: '#F4F6FB',
			},
		},
		fontSize: {
			sm: ['14px', '20px'],
			base: ['16px', '24px'],
			lg: ['20px', '28px'],
			xl: ['24px', '32px'],
		},

		extend: {},
	},

	variants: {
		extend: {},
	},

	plugins: [
		require('@tailwindcss/forms'),
	],
}
