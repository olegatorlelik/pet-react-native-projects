module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/common/components',
          '@constants': './src/constants',
          '@context': './src/common/context',
          '@helpers': './src/common/helpers',
          '@hooks': './src/common/hooks',
          '@wrappers': './src/common/wrappers',
          '@services': './src/common/services',
          '@modals': './src/common/modals',
          '@interfaces': './src/interfaces',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@store': './src/store',
          '@test-mocks': './__mocks__',
          '@test-helpers': './__helpers__',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        allowUndefined: false,
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
  env: {
    production: {
      plugins: [['react-remove-properties', { properties: ['testID'] }]],
    },
  },
};
