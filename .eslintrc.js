module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // parser: 'vue-babel-eslint',
  extends: ['airbnb-base', 'eslint:recommended', 'plugin:vue/essential', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 160,
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        jsxSingleQuote: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        endOfLine: 'auto'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    // allow async-await
    'generator-star-spacing': 0
  }
};
