const path = require('path')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      generators: true,
      experimentalObjectRestSpread: true
    },
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  plugins: ['flowtype', 'flowtype-errors'],
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.css', '.scss']
      },
      webpack: {
        config: path.resolve(__dirname, 'webpack', 'server.dev.js')
      }
    }
  },
  globals: {
    window: true,
    document: true,
    __dirname: true,
    __DEV__: true,
    CONFIG: true,
    process: true,
    jest: true,
    describe: true,
    test: true,
    it: true,
    expect: true,
    beforeEach: true,
    fetch: true,
    alert: true
  },
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        styl: 'never',
        css: 'never',
        scss: 'never',
      }
    ],
    'arrow-body-style': [0, 'as-needed'],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
    'brace-style': [2, '1tbs'],
    'camelcase': 1,
    'consistent-return': 1,
    'dot-notation': 1,
    'flowtype/no-weak-types': 1,
    'flowtype/semi': [2, 'never'],
    'flowtype-errors/show-errors': 2,
    'global-require': 1,
    'import/no-named-default': 1,
    'import/no-unresolved': [2, { commonjs: true, caseSensitive: true }],
    'import/prefer-default-export': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/click-events-have-key-events': 1,
    'jsx-a11y/no-static-element-interactions': 1,
    'jsx-a11y/label-has-for': 1,
    'jsx-quotes': [2, 'prefer-single'],
    'no-case-declarations': 1,
    'no-confusing-arrow': 0,
    'no-console': 1,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 1,
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'prefer-template': 1,
    'prefer-destructuring': 1,
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.js'] }],
    'react/jsx-indent': 1,
    'react/no-array-index-key': 1,
    'react/no-render-return-value': 0,
    'react/prop-types': 0,
    'semi': [2, 'never'],
    'spaced-comment': [2, 'always', { markers: ['?'] }],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true
      }
    ],
    'comma-dangle': [
      2,
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'max-len': [
      'error',
      {
        code: 90,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'typed-annotations',
          // 'propTypes',
          'props',
          'state',
          'defaultProps',
          'contextTypes',
          'childContextTypes',
          'getChildContext',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],
    'linebreak-style': 0
  }
}
