module.exports = {
    preset: "jest-preset-angular",
    setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
    collectCoverage: true,
    testMatch: ["**/*.spec.ts"],
    collectCoverageFrom: [
        "src/app/*.component.ts",
        "src/app/*.service.ts",
        "src/app/*.component.html",
        "src/app/**/*.component.ts",
        "src/app/**/*.html"],
    silent: true,
    moduleDirectories: ["node_modules", "<rootDir>"]
};
