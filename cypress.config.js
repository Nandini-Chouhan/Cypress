// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  execTimeout: 60000,
  taskTimeout: 300000,
  pageLoadTimeout: 60000,
  chromeWebSecurity: false,
  scrollBehavior: 'center',
  trashAssetsBeforeRuns: false,
  video: false,
  videoUploadOnPasses: true,
  viewportWidth: 2100,
  viewportHeight: 1080,
  watchForFileChanges: false,
  chromeWebSecurity: false,
 
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: ['cypress/tests/**/*.cy.{js,jsx,ts,tsx}'],
    baseUrl: 'https://www.lenskart.com/',
  },
})   