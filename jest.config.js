module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/server/config/environment/', '<rootDir>/__tests__/__setup__', '<rootDir>/__tests__/__mocks__'],
  moduleNameMapper: {
    '^.*[.](css|CSS|scss)$': '<rootDir>/__tests__/__mocks__/styleMock.js',
    '^.*[.](gif|ttf|eot|svg)$': '<rootDir>/__tests__/__mocks__/fileMock.js'
  },
  setupFiles: ['<rootDir>/__tests__/__setup__/setupTests.js'],
};
