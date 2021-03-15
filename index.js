const puppeteer = require('puppeteer');


// get instagram img todo
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/agostinho_dos_santos_machava/');


  await page.evaluate (()=> {

  })

  await browser.close();
})();


// get wikipedia head
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.wikipedia.com/Coronavirus/');

    const result = await page.evaluate(() => {
        let headingFroWeb = document.querySelectorAll(".mw-headline");
        const headingList = [...headingFroWeb];
        return headingList.map(h => h.innerText);
    })

    console.log(result);
  

    await browser.close();
  })();
  