const {test, expect} = require('@playwright/test')

test('Popup Browsers or Tabbed Brwosers Testcase', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("http://localhost/login.do")
    await page.waitForTimeout(2000)

    const [newpage] = await Promise.all(
        [
            context.waitForEvent("page"),
            await page.locator("//a[normalize-space()='actiTIME Inc.']").click()
        ]
    )

    const title = await newpage.title()
    console.log("title of Popup Browser :"+title);
    const url = await newpage.url()
    console.log("URL of Popup Browser :"+url);
    await newpage.locator("//a[normalize-space()='Log in']").click()
    await newpage.locator("//input[@id='Enteryouremail']").fill("prabhakargudi@gmail.com")
    await page.waitForTimeout(2000)
    await newpage.close()
    await page.waitForTimeout(2000)
    await page.locator("#username").fill("admin")
    await page.waitForTimeout(2000)
})