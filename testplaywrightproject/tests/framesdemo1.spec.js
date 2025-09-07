const {test, expect} = require('@playwright/test')

test('frames demo', async ({page}) => {
  await page.goto('https://docs.oracle.com/javase/8/docs/api/')

  //First Frame
  const frame1 =await page.frameLocator("//frame[@title='All Packages']")
  await frame1.locator("//a[normalize-space()='java.awt']").click()

  await page.waitForTimeout(2000)
  //Second Frame
  const frame2 = await page.frameLocator("//frame[@title='All classes and interfaces (except non-static nested types)']")
  await frame2.locator("//span[normalize-space()='ActiveEvent']").click()

  await page.waitForTimeout(2000)
  // Third Frame
  const frame3 = await page.frameLocator("//frame[@title='Package, class and interface descriptions']")
  const textContent = await frame3.locator("//div[@class='description']//div[1]").textContent()
  console.log(textContent);
  
  await page.waitForTimeout(2000)
})      