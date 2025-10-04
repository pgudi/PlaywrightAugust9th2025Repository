const {test, expect} = require('@playwright/test')
const testdata = require('../datafiles/login2.json')

test(' Login and Logout Functionality', async ({page})=>{
    for(let data of testdata){
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       // await page.waitForTimeout(3000)

        await page.locator("//input[@placeholder='Username']").fill(data.username)
        await page.locator("input[placeholder='Password']").fill(data.password)
        await page.locator("//button[normalize-space()='Login']").click()
        await expect(page).toHaveTitle('OrangeHRM')
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    //    await page.waitForTimeout(3000)
        await page.getByAltText("profile picture").first().click()
        await page.locator("//a[normalize-space()='Logout']").click()
    //    await page.waitForTimeout(3000)
    }
    
   
})