const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.daraz.pk",
    env: {
      apiUrl: "https://www.daraz.pk"
    },
    viewportWidth: 1280,
    viewportHeight: 786,
    setupNodeEvents(on, config) {},
  },
});
