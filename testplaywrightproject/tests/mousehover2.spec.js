const {test, expect} = require('@playwright/test')

test('Mouse Hover on Flipkar Application', async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(3000)

    await page.locator("//span[contains(text(),'Electronics')]").hover()
    await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Computer Peripherals']").hover()
    await page.waitForTimeout(3000)

    await page.locator("//a[normalize-space()='Projectors']").hover();
    await page.locator("//a[normalize-space()='Projectors']").click()
   
    await expect(page.locator("//h1[normalize-space()='Projectors']")).toHaveText("Projectors")

})