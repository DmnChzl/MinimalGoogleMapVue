module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  }
};
