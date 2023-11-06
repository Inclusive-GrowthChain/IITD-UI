const puppeteer = require('puppeteer');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  try {
    rl.question('Enter the URL to navigate to: ', async (url) => {
      rl.close(); // Close the readline interface after taking input

      if (!url) {
        console.log('URL is required.');
        return;
      }

      const browser = await puppeteer.launch({headless:false});
      const page = await browser.newPage();

      // Navigate to the provided URL
      await page.goto(url);


      const signupButton = await page.waitForSelector('#root > div.auth-bg > div.header > div.header_wrapper_3 > div.hamburger_container > div:nth-child(2) > a');
      await signupButton.click();
      await signupButton.dispose();




      // Your Puppeteer actions (clicking buttons, filling forms, etc.) can go here

      // Close the browser
      await browser.close();
    });
  } catch (error) {
    console.error('Error occurred:', error);
  }
})();
