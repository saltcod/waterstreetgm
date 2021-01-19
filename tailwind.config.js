module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: {
		enabled: true,
		content: ['./pages/index.js', './components/ColorPicker.js'],
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
		},
	},
	plugins: [],
};
