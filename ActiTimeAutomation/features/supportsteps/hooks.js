const {BeforeAll, AfterAll, Before, After} = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {LoginPage} = require('./../../pages/loginpage')
const {HomePage} = require('./../../pages/homepage')
const {UserPage} = require("./../../pages/userpage")

let browser,context,page
Before( async function(){
         browser=await chromium.launch({
        headless:false
     })
        context=await browser.newContext()
     this.page=await context.newPage()
     this.loginPage = new LoginPage(this.page);
     this.homePage = new HomePage(this.page)
     this.userpage = new UserPage(this.page)
})

After(async function(){
    await this.page.close()
})