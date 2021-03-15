const puppeteer = require('puppeteer');


//get instagram img todo
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/agostinho_dos_santos_machava/');


  await page.evaluate (()=> {
      const nodeList = document.querySelectorAll("article img");
      const imgArray = [...nodeList];

      const list = imgArray.map( ({src}) => {
          src
      })

      console.log(list);
  })

  await browser.close();
})();


// get wikipedia head
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://pt.wikipedia.org/wiki/Coronav%C3%ADrus');

    const result = await page.evaluate(() => {
        let headingFroWeb = document.querySelectorAll(".mw-headline");
        const headingList = [...headingFroWeb];
        return headingList.map(h => h.innerText);
    })

    console.log(result);
  

    await browser.close();
  })();
  