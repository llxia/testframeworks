const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext({
    recordVideo: { dir: "videos/" },
  });
  const page = await context.newPage();
  await page.goto("https://careers.wbd.com/global/en/home");
  await page.getByRole("link", { name: "Search Jobs" }).click();
  await page.getByRole("link", { name: "Search Jobs" }).click();
  await page.getByRole("button", { name: "State/Province" }).click();
  await page.locator("li:nth-child(25) > .phs-checkbox > .checkbox").click();
  await page
    .getByRole("link", { name: "Senior Software Developer in" })
    .click();
  const page1Promise = page.waitForEvent("popup");
  await page
    .locator("section")
    .filter({ hasText: "Back to search results" })
    .getByRole("button")
    .click();
  const page1 = await page1Promise;
  const page2Promise = page1.waitForEvent("popup");
  await page1
    .locator('iframe[title="applyWithLinkedIn"]')
    .contentFrame()
    .locator(
      'iframe[name="{\\"xdOrigin\\":\\"https://applywithlinkedin.myworkdaygadgets.com\\",\\"xdChannel\\":\\"ba2bd29d-350a-436d-a73f-faf4125b87e6\\",\\"framework\\":\\"@linkedin/xdoor-sdk\\",\\"version\\":\\"0.2.23\\",\\"debug\\":false}"]'
    )
    .contentFrame()
    .getByRole("button", { name: "Apply With LinkedIn" })
    .click();
  const page2 = await page2Promise;
  await page2.close();
  await page1.close();

  // ---------------------
  await context.close();
  await browser.close();
})();
