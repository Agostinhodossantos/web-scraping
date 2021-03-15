const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/agostinho_dos_santos_machava/');


  await page.evaluate (()=> {

  })

  await browser.close();
})();
