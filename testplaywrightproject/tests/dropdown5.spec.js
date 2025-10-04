const {test, expect} = require('@playwright/test')

test('Select Multi Drop Down Items', async({page})=>{
    
     await page.goto("https://testautomationpractice.blogspot.com/")
     await page.waitForTimeout(2000)
     
     await page.locator("#colors").selectOption(["Blue","Green","Yellow"])
     await page.waitForTimeout(3000)
})