const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../pages4/loginpage')
const {HomePage} = require('./../pages4/homepage')

test('Page Object Mode', async({page})=>{
    await page.goto('http://localhost/login.do')
    await page.waitForTimeout(3000)

    const loginPage = new LoginPage(page)
    const homePage = new HomePage(page)

    await loginPage.setUserName("admin")
    await loginPage.setPassword("manager")
    await loginPage.clickLoginButton()
    await page.waitForTimeout(3000)

    await homePage.clickOnFlyoutwindow()
    await page.waitForTimeout(3000)
    await homePage.clickOnLogoutLink()
    await page.waitForTimeout(3000)

})