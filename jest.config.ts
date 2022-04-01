module.exports = {
     testEnvironment: 'node',
     testPathIgnorePatterns: ['/node_modules/'],
     moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
     collectCoverage: false,
     verbose: true,
     rootDir: '.',
     clearMocks: true,
     testMatch: ['**/tests/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
     transform: {
          '^.+\\.(ts|tsx)$': 'ts-jest',
     },
};
