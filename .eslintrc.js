module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@stylistic/recommended-extends',
    'plugin:@stylistic/disable-legacy',
  ],
  parser: '@babel/eslint-parser',
  plugins: ['@stylistic'],
  rules: {
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never',
      },
    ],
  },
}
