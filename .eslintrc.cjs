module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:import/typescript',
    '@vue/typescript/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'import', '@typescript-eslint'],

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      },
    },
  },

  rules: {
    'import/extensions': ['error', 'never', { svg: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
};
