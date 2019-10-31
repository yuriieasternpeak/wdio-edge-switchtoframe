'use strict';


const {remote} = require('webdriverio');

const bsOptions = {
  user: process.env.USER,
  key: process.env.KEY,

  seleniumHost: 'hub-cloud.browserstack.com',
  seleniumPort: 443,

  capabilities: {
    'os': 'windows',
    'os_version': '10',
    browser: 'Edge',
    browser_version: '18.0',
  }
};

describe('applitools', function () {

  it('test', async () => {
    try {
      const browser = await remote(bsOptions);
      await browser.url('https://origin-www.softwareadvice.com/medical/?automated=true');

      const frames = await browser.$$('<iframe />');
      console.log('Frames: ', frames);

      await browser.switchToFrame(frames[0].elementId);

      await browser.deleteSession();

    } catch (e) {
      console.log('Error:', e);
    }
  })
});
