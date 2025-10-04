const {Given, When, Then} = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {expect} = require('@playwright/test')

Given('I launch chromium Browser', async function () {
     const browser=await chromium.launch({
        headless:false
     })
     const context=await browser.newContext()
     this.page=await context.newPage()

});

When('I navigate the Application URL', async function () {
     await this.page.goto("http://localhost/login.do") 
     await this.page.waitForTimeout(3000)
});

Then('I find the Login Page', async function () {
      await expect(this.page).toHaveTitle('actiTIME - Login')    
});

Then('I close chromium Browser', async function() {
    await this.page.close()
})