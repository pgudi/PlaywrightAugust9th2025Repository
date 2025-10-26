const {BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep, Status, setDefaultTimeout} = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {LoginPage} = require('./../../pages/loginpage')
const {HomePage} = require('./../../pages/homepage')
const {UserPage} = require("./../../pages/userpage")
setDefaultTimeout(30000)

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
   //  await this.page.close()
})

AfterStep(async function({result}){
   if(result.status===Status.PASSED)
   {
      const screenshot = await this.page.screenshot({ fullPage: true })
      this.attach(screenshot, 'image/png')
   }
})