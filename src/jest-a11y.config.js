const { defaults } = require("jest-config");

module.exports = {
  ...defaults,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-a11y-setup.js"],
  testMatch: ["**/__tests__/**/*.a11y.[jt]s?(x)"],
};
