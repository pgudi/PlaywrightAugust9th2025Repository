const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../pages3/loginpage')
const {HomePage} = require('./../pages3/homepage')

test('Login and Logout using Page Object Model', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Create object or intance for LoginPage and HomePage
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page)
    //Login Action
    await loginPage.setUserName('Admin')
    await loginPage.setpassword('admin123')
    await loginPage.clickLoginbutton()

    await page.waitForTimeout(4000)
    //Logout Action
    await homePage.clickUserProfile()
    await homePage.clickLogoutLink()
    await page.waitForTimeout(4000)
})