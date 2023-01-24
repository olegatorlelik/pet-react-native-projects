module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    '@lomray/eslint-config-react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    files: ['*.ts', '*.tsx'],
    project: ['./tsconfig.json'],
    tsconfigRootDir: './',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'unicorn/import-index': 0,
    'jsx-a11y/no-autofocus': 0,
    'no-await-in-loop': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-curly-newline': 0,
    'react/jsx-handler-names': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-native/sort-styles': [
      'error',
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
  },
  globals: {
    JSX: 'readonly',
  },
  env: {
    browser: true,
    jest: true,
    'react-native/react-native': true,
  },
  settings: {
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet'],
  },
};
