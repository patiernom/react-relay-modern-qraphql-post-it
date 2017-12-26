module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/server/config/environment/', '<rootDir>/__tests__/setup'],
  moduleNameMapper: {
    '^.*[.](css|CSS|scss)$': '<rootDir>/__tests__/setup/styleMock.js',
    '^.*[.](gif|ttf|eot|svg)$': '<rootDir>/__tests__/setup/fileMock.js'
  },
  setupFiles: ['<rootDir>/__tests__/setup/setupTests.js'],
};
