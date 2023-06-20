module.exports = {
  "testEnvironment": "jsdom",
   moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
   },
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   "collectCoverage": true,
   "collectCoverageFrom": [
      "src/**/*.jsx",
      "!<rootDir>/node_modules/"
    ],
  };