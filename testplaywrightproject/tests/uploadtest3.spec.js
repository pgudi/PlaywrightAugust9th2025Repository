const {test, expect} = require('@playwright/test')

test('Upload Multiple Files', async({page})=>{
    await page.goto("https://html-file-upload.netlify.app/multiple/")
    await page.waitForTimeout(2000)

    await page.locator("#file-uploader").setInputFiles(["./uploadFiles/location1.jpg","./uploadFiles/location2.jpg","./uploadFiles/location3.jpg"])
    await page.waitForTimeout(2000)
    
})