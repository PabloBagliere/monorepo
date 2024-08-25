// This is a patch so that eslint will load the plugins as dependencies. Otherwise we can to install EVERYTHING in th root project
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:promise/recommended",
    "plugin:sonarjs/recommended",
    "plugin:n/recommended",
  ],
  plugins: ["prettier", "import", "promise", "sonarjs"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "no-console": "warn",
    "prettier/prettier": [
      "error",
      {
        "printWidth": 120,
        "trailingComma": "all",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "bracketSpacing": true,
        "arrowParens": "always",
        "endOfLine":"auto"
      }
    ],
    "import/order": ["warn", {"newlines-between": "always"}],
  },
};