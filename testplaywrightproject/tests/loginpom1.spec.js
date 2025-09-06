const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../pages1/loginpage')
const {HomePage} = require('./../pages1/homepage')
test('Login and Logout using POM', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page)
    await loginPage.loginToApplication()
    await page.waitForTimeout(4000)
    await homePage.logoutApplication()
    await page.waitForTimeout(2000)
})