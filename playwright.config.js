const environments = require('./environment');

const baseURL = environments.urls.production;

module.exports = {
  use: {
    baseURL,
    headless: false,
  },

  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report' }]
  ],

  projects: [
    {
      name: 'chrome',
      use: {
        browserName: environments.browsers.chrome,
        headless: false,
      },
    },
    {
      name: 'firefox',
      use: {
        browserName: environments.browsers.firefox,
        headless: false,
      },
    },
    {
      name: 'safari',
      use: {
        browserName: environments.browsers.safari,
        headless: false,
      },
    },
  ],
};