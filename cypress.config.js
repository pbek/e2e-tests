const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    qownnotes_web_app_url: 'https://app.qownnotes.org',
    qownnotes_api_base_url: 'https://api.qownnotes.org',
    qownnotes_webpage_base_url: 'https://www.qownnotes.org',
    qownnotes_mastodon_base_url: 'https://social.qownnotes.org',
    cloud_base_url: 'https://cloud.bekerle.com',
    irc_base_url: 'https://irc.bekerle.com',
    bekerle_base_url: 'https://www.bekerle.com',
    kimai_base_url: 'https://time.bekerle.com',
    rawhealth_base_url: 'https://www.rawhealthandhappiness.com',
    rohundfroh_base_url: 'https://www.rohundfroh.eu',
  },
  retries: {
    runMode: 3,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
