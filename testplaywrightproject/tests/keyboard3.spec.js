const {test, expect} = require('@playwright/test')

test('Key Combination Test', async({page})=>{
    await page.goto("http://localhost/login.do")

    await page.waitForTimeout(2000)

    await page.keyboard.type("Bhaghat Singh")
    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+A")
    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+C")
    await page.waitForTimeout(2000)

    await page.keyboard.press("Delete")
    await page.waitForTimeout(2000)

    await page.keyboard.press("Control+V")
    await page.waitForTimeout(2000)
})