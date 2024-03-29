const { defaults } = require('jest-config');

module.exports = {
    moduleFileExtensions: ["js", "json", "jsx", "tsx", "ts"],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).(js|jsx)'],
    preset: 'ts-jest',
    transform: {
        "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    },
    verbose: true,
    moduleDirectories: [
        ".",
        "src",
        "node_modules"
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
    },
    globals: {
    }
};