const {test, expect} = require('@playwright/test')

test('Handle Popups or Tabbed Browser', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(3000)

    const [newpage] = await Promise.all(
        [
            context.waitForEvent("page"),
            await page.locator("//a[@class='user-anonymous tnb-certificates-btn w3-bar-item w3-button w3-right w3-white ga-top ga-top-certificates']").click()
        ]
    )

    await newpage.locator("//input[@placeholder='What are you looking for?']").fill("React")
    await newpage.waitForTimeout(1000)
    await newpage.keyboard.press("Enter")
    await newpage.waitForTimeout(1000)
    await newpage.close()
    await page.waitForTimeout(1000)
})