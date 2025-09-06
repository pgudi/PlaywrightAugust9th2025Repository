const {test, expect} = require('@playwright/test')
const {LoginPage} = require('./../pages2/loginpage')
const {HomePage} = require('./../pages2/homepage')
test('Login Logout using Page Object Model', async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Create object or instance for Loginpage and HomePage
    let loginPage = new LoginPage(page)
    let homePage = new HomePage(page);

    // write Tests now
    await loginPage.setUserName("Admin")
    await loginPage.setPassword("admin123")
    await loginPage.clickLoginButton()

    await page.waitForTimeout(4000)

    await homePage.clickOnUserProfile()
    await homePage.clickOnLogoutLink()

    await page.waitForTimeout(4000)
})