module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
    collectCoverage: true,
    moduleDirectories: ['node_modules', '<rootDir>'],
    silent: true
};
