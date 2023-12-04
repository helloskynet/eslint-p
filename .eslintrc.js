module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@stylistic/recommended-extends',
    'plugin:@stylistic/disable-legacy'
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['@stylistic'],
  rules: {
    '@stylistic/max-len': ['error', { code: 100 }],
    '@stylistic/arrow-parens': ['error', 'as-needed'],
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/operator-linebreak': ['error', 'after'],
    '@stylistic/semi': ['error', 'always'],
    '@stylistic/brace-style': ['error', '1tbs'],
    '@stylistic/jsx-quotes': ['error', 'prefer-double'],
    '@stylistic/space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'never'
      }
    ]
  }
};
