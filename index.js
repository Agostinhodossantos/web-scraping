const puppeteer = require('puppeteer');
const fs = require('fs');

//get instagram img todo
(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/agostinho_dos_santos_machava/');


  const imgList = await page.evaluate (()=> {
      const nodeList = document.querySelectorAll('article img');
      const imgArray = [...nodeList];

      const imgList = imgArray.map( ({src}) => ({
          src
      }))

      return imgList;
  })

  // write data local
  fs.writeFile('instagram.json' , JSON.stringify(imgList, null , 2), err => {
      if(err) throw new Error("something went wrong");

      console.log("well done");
  })

  console.log(imgList);

  await browser.close();
})();


//get wikipedia head
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
  