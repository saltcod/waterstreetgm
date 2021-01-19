module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: {
		enabled: true,
		content: ['./pages/**/*.js', './components/**/*.js'],
	},
	theme: {
		extend: {
			colors: {
				yellow: {
					25: '#FFE699',
				},
			},
		},
	},
	variants: {
		extend: {
			visibility: ['hover', 'focus'],
			opacity: ['hover', 'focus'],
			divideColor: ['group-hover'],
		},
	},
	plugins: [],
};
