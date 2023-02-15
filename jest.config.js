const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const minCoveragePercentage = 80;

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/pages/**',
    '!<rootDir>/pages/_app.tsx',
    '!<rootDir>/pages/_document.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: minCoveragePercentage,
      functions: minCoveragePercentage,
      lines: minCoveragePercentage,
      statements: minCoveragePercentage,
    },
  },
  moduleNameMapper: {
    'break-styled-lines': require.resolve('break-styled-lines'),
  },
};

module.exports = createJestConfig(customJestConfig);
