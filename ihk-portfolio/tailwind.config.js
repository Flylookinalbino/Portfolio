module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active'],
    height: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    transitionProperty: ['responsive', 'hover'],
    transitionTimingFunction: ['responsive', 'hover'],
    transitionDuration: ['responsive', 'hover'],
    transitionDelay: ['responsive', 'hover'],
  },
  plugins: [],
};
