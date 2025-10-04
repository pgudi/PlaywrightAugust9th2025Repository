const {test, expect} = require('@playwright/test')

test('Mouse hover on Login button in Flipkart', async({page})=>{
    await page.goto("https://www.flipkart.com/")

    await page.waitForTimeout(3000)

    await page.locator("//span[normalize-space()='Login']").hover()

    await page.waitForTimeout(3000)
})