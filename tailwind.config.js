module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
		colors: {
			yellow: {
				25 : '#FFE699'
			}
		}
	},
  },
  variants: {
    extend: {
		visibility: ['hover', 'focus'],
      	// opacity: ['hover', 'focus'],
    }
  },
  plugins: [],
}
