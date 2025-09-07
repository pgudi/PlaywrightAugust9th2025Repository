const {test, expect} = require('@playwright/test')

test('Press Login Button in Login Page', async({page})=>{
    await page.goto("http://localhost/login.do")

    //enter value in userName text field
    await page.locator("//input[@id='username']").fill("admin")

    //Enter password in Password Text Field
    await page.locator("input[placeholder='Password']").fill("manager")

    //click  LoginIn Button
    await page.keyboard.press("Enter")

    await page.waitForTimeout(3000)
})