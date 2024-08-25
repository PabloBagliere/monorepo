// This is a patch so that eslint will load the plugins as dependencies. Otherwise we can to install EVERYTHING in th root project
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:n/recommended',
  ],
  plugins: ['prettier', 'import', 'promise', 'sonarjs'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'no-console': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        arrowParens: 'always',
        endOfLine: 'auto',
      },
    ],
    'import/order': ['warn', { 'newlines-between': 'always' }],
  },
};
