const {test, expect} =require('@playwright/test')

test('Handle Alert', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', async(dialog) =>{
        let message=await dialog.message()
        console.log("Alert Content :"+message);
        await expect(message).toContain('I am a JS Confirm')
        await page.waitForTimeout(3000)
        await dialog.accept()
        
    })
    
    await page.locator("//button[normalize-space()='Click for JS Confirm']").click()

})