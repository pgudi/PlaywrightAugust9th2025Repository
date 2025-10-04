const {test, expect} = require('@playwright/test')


test('Upload Single File Testcase', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.waitForTimeout(2000)

    await page.locator("#file-upload").setInputFiles("C:/PlaywrightQARepository1/CurrentworkSpace/PlaywrightAugust9th2025Repository/testplaywrightproject/uploadFiles/location1.jpg")

    await page.waitForTimeout(1000)
    await page.locator("#file-submit").click()
    await page.waitForTimeout(1000)
    await expect(page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")
    const fileName = await page.locator("#uploaded-files").textContent()
    console.log("File Name :"+fileName);
    
    expect(fileName.includes("location1.jpg")).toBeTruthy()
})