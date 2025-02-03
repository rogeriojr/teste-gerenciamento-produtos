module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest", // Usando SWC em vez de Babel
  },
  testMatch: ["**/?(*.)+(test).[jt]s?(x)"],
};
