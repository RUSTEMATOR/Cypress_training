const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 5,
  retries: 0,
  watchForFileChanges: false,
  pageLoadTimeout: 90000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: "/Users/rustemsamoilenko/Desktop/Cypress_training/cypress/screenshots",
  screenshotOnRunFailure: true,
  
  e2e: {
    testIsolation: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
