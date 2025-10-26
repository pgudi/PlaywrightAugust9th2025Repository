const {Given, When, Then} = require('@cucumber/cucumber')
const { chromium } = require('playwright');
const {expect} = require('@playwright/test')

const {LoginPage} = require('./../../pages/loginpage')
const {HomePage} = require('./../../pages/homepage')
const {UserPage} = require("./../../pages/userpage")

// Given('I launch chromium Browser', async function () {
//      const browser=await chromium.launch({
//         headless:false
//      })
//      const context=await browser.newContext()
//      this.page=await context.newPage()
//      this.loginPage = new LoginPage(this.page);
//      this.homePage = new HomePage(this.page)
//      this.userpage = new UserPage(this.page)
// });

When('I navigate the Application URL', async function () {
     await this.page.goto("http://localhost/login.do") 
     await this.page.waitForTimeout(3000)
});

Then('I find the Login Page', async function () {
      await expect(this.page).toHaveTitle('actiTIME - Login')    
});

// Then('I close chromium Browser', async function() {
//     await this.page.close()
// })

When('I enter username in Username text field', async function(){
     await this.loginPage.setUserName("admin")
})

When('I enter password in Password text field', async function(){
     await this.loginPage.setPassword("manager")
})

When('I click on Login Button the Login Page', async function(){
     await this.loginPage.clickLoginButton()
     await this.page.waitForTimeout(3000)
})

Then('I find the Home Page', async function(){
     expect(await this.page).toHaveTitle('actiTIME -  Enter Time-Track')
})

Then('I minimize the flyout window', async function(){
     await this.homePage.clickOnFlyOutWindow()
     await this.page.waitForTimeout(2000)
})

Given('I find the Logout Link in the Home Page', async function(){
   const content= await this.homePage.getLogoutLinkText() 
   console.log("Link Name :"+content);
    
   expect(content.includes('Logout')).toBeTruthy()
})

When('I click on Logout link in the Home page', async function(){
          
      await this.homePage.clickOnLogoutLink()
      await this.page.waitForTimeout(2000)
})

Given('I click on User Menu', {timeout: 2*1000},async function () {
     await this.userpage.clickOnUserMenu()
});

When('I click on Add User Button',{timeout: 2*1000}, async function () {
     await this.userpage.clickOnAddUserButton()
});

When('I enter firstname in Firstname text field', async function () {
     await this.userpage.setFirstNameInUserPage("demo")
});

When('I enter lastname in lastname text field', async function () {
           await this.userpage.setLastNameInUserPage("User1")
 });

 When('I enter email in emailId text field', async function () {
     await this.userpage.setEmailInUserPage("demo@gss.com")
});

When('I enter username in username text field of user page', async function () {
     await this.userpage.setUserNameInUserPage("demoUser1")
});

When('I enter password in password text field of user page', async function () {
     await this.userpage.setPasswordInUserPage("welcome@123")
});

 When('I enter retype password in password text field of user page', async function () {
     await this.userpage.setReTypePasswordInUserPage("welcome@123")
});

When('I click create user Button', {timeout:3*1000} , async function () {
     await this.userpage.clickOnCreateUserButton()
});

Then('I find the newly created user in user list page',{timeout:3*1000} , async function () {
     const userContent = await this.userpage.getNewlyCreatedUser()
     console.log("User Link Name :"+userContent);
    
     expect(userContent.includes("User1, demo")).toBeTruthy()
});

Given('I click on newly created user',{timeout:3*1000} , async function () {
     await this.userpage.clickOnNewlyCreatedUser() 
});

When('I deleted the user by clicking on OK button in alert',{timeout:3*1000}, async function () {
     //Handle Alert in Palywright
    this.page.on("dialog", async(dialog)=>{
        const message = await dialog.message()
        console.log(message)
        await dialog.accept()
    })  
     await this.userpage.clickOnDeleteUserButton()
});

 When('I enter username {string} in Username text field', async function (username) {
     await this.loginPage.setUserName(username)  
});

When('I enter password {string} in Password text field', async function (password) {
     await this.loginPage.setPassword(password)
});
