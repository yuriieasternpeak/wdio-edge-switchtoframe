'use strict';


describe('applitools', function () {

  beforeEach(async function () {
  });

  afterEach(async function () {
  });

  it('test', async () => {
    try {
      await browser.url('https://origin-www.softwareadvice.com/medical/?automated=true');

      const frames = await browser.$$('<iframe />');
      console.log('Frames: ', frames);

      await browser.switchToFrame(frames[0]);

    } catch (e) {
      console.log('Error:', e);
    }
  })
});
