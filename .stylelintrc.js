const properties = require('known-css-properties').all;

module.exports = {
  plugins: [
    '@signal-noise/stylelint-scales',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint-declaration-use-variable',
    'stylelint-no-unsupported-browser-features'
  ],
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-recommended'],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-no-hex': true,
    'declaration-property-unit-allowed-list': {
      '/^font$|^font-size$/': ['rem']
    },
    'function-allowed-list': [
      'linear-gradient',
      'calc',
      'hsl',
      'hsla',
      'rotate',
      'scale',
      'translateX',
      'translateY',
      'var',
      'repeat',
      'minmax'
    ],
    'length-zero-no-unit': true,
    'max-empty-lines': 2,
    'media-feature-name-value-allowed-list': {
      'min-width': ['36rem', '48rem', '62rem']
    },
    'order/properties-order': [...properties, '-styled-mixin0'],
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        ignorePartialSupport: true
      }
    ],
    'property-disallowed-list': [
      ['margin-right', 'margin-bottom', 'padding-right', 'padding-bottom'],
      {
        message:
          'No *-bottom or *-right space: Space elements away from preceding elements (ie: margin-top)'
      }
    ],
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment'],
        except: ['first-nested'],
        severity: 'warning'
      }
    ],
    'scales/space': [
      {
        scale: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 4, 4.5, 5.5, 7, 8],
        units: ['rem']
      },
      {
        scale: [1, 2],
        units: ['px']
      }
    ],
    'scales/z-indices': [-1, 0, 1, 2, 3],
    'selector-max-type': 0,
    'selector-max-universal': 0,
    'sh-waqar/declaration-use-variable': [
      [
        '/^color',
        '/color/',
        '/font/',
        { ignoreValues: ['transparent', 'inherit'] }
      ]
    ],
    'shorthand-property-no-redundant-values': true,
    'unit-allowed-list': [
      ['rem', 'ms', '%', 'vh', 'deg'],
      {
        ignoreProperties: {
          px: ['/^border/'],
          fr: ['grid-template-columns']
        }
      }
    ],
    'value-no-vendor-prefix': true
  }
};
