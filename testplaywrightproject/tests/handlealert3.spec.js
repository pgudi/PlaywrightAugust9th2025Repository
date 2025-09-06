const {test, expect} =require('@playwright/test')

test('Handle Alert', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    await page.on('dialog', async(dialog) =>{
        let message=await dialog.message()
        console.log("Alert Content :"+message);
        await expect(message).toContain('I am a JS prompt')
        await page.waitForTimeout(4000)
        await dialog.accept('S G Software Testing Institute')
        
    })
    
    await page.locator("//button[normalize-space()='Click for JS Prompt']").click()
    let result=await page.locator("(//p[@id='result'])[1]").textContent()
    console.log("Prompt Result :"+result);
    
})