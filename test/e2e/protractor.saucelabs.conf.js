exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
  specs: ['spec.js']
};