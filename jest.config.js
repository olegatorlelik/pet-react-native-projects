/**
 * Jest config
 */
module.exports = {
  name: 'project-tests',
  verbose: true,
  preset: 'react-native',
  transformIgnorePatterns: [
    '/node_modules/(?!react-native)/.+',
  ],
  setupFilesAfterEnv: [
    './jestSetup.js',
    './node_modules/react-native/jest/setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
}
