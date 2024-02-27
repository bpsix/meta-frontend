/** @type {import('ts-jest').JestConfigWithTsJest} */
export const preset = "ts-jest";
export const testEnvironment = "node";

const jestConfig = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*"],
  coverageDirectory: ".coverage/",
  coveragePathIgnorePatterns: ["/node_modules/", "/src/vite-env.d.ts"],
};

export default jestConfig;
