const {test, expect} = require('@playwright/test')

test('Fetch all items from drop down', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    const listItemNames = await page.locator("#country").textContent()
    console.log("Drop Down Items :"+listItemNames);
    
    await expect(listItemNames.includes('India')).toBeTruthy()
})