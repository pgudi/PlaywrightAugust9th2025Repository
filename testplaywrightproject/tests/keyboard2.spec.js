const {test, expect} = require('@playwright/test')

test('Press Login Button in Login Page', async({page})=>{
    await page.goto("http://localhost/login.do")

    //enter value in userName text field
    await page.keyboard.type("admin")

    //enter value in password text field
    await page.keyboard.press("Tab")
    await page.keyboard.type("manager")

    //click operation on Login button
    await page.keyboard.press("Enter")

    await page.waitForTimeout(4000)
})