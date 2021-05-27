const playwright = require("playwright-aws-lambda");

export default async (req, res) => {
  let browser = null;

  try {
    const browser = await playwright.launchChromium();
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto("https://google.com");

    res.status(200).json(await page.title());
  } catch (error) {
    console.log(error)
    res.status(200).json(error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
