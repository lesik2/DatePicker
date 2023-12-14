/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',
    '@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '@store/(.*)$': '<rootDir>/src/store/$1',
    '@constants/(.*)$': '<rootDir>/src/constants/$1',
    '@app/(.*)$': '<rootDir>/src/app/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@model/(.*)$': '<rootDir>/src/model/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@containers/(.*)$': '<rootDir>/src/containers/$1',
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
          '<rootDir>/src/tests/mocks/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/src/tests/mocks/styleMock.ts',
    '(assets|models|services)': '<rootDir>/src/tests/mocks/fileMock.ts',
  },
  setupFilesAfterEnv: ['./src/tests/setupTests.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};
