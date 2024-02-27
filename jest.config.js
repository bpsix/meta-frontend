/** @type {import('ts-jest').JestConfigWithTsJest} */
export const preset = "ts-jest";
export const testEnvironment = "node";

const jestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*"],
  coverageDirectory: ".coverage/",
  coveragePathIgnorePatterns: ["/node_modules/", "/src/vite-env.d.ts"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 0,
    },
  },
};

export default jestConfig;
