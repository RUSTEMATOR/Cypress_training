const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 40,
  retries: 0,
  watchForFileChanges: false,
  pageLoadTimeout: 90000,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder:
    "/Users/rustemsamoilenko/Desktop/Cypress_training/cypress/screenshots",
  screenshotOnRunFailure: true,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here"
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl: "https://guest:welcome2qauto@qauto2.forstudy.space",
    login: 'sobakakonia@gmail.com', 
    password: '193786Az()', 
    experimentalFetchPolyfill: true,
    supportFile: "cypress/support/e2e.js",
    reporter: 'mochawesome',
    reporterOptions: {
      mochaFile: 'results/my-test-output.xml',
      toConsole: true
    }
  },
});
