'use strict';

describe('applitools', function () {

  it('test', async () => {
    try {
      await browser.url('https://origin-www.softwareadvice.com/medical/?automated=true');

      const frames = await browser.$$('<iframe />');
      // console.log('Frames: ', frames);

      await browser.switchToFrame(frames[0].elementId);

    } catch (e) {
      console.log('Error:', e);
    }
  })
});
