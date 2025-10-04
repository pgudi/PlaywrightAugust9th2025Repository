const {test, expect} = require('@playwright/test')

test('Fetch Each Item Name using Loop', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    const itemNames = await page.locator("#country").allTextContents()
    console.log("Item Names :"+itemNames);

    for(let i=0;i<itemNames.length;i++){
        const itemValue = itemNames[i]
        console.log("Drop down Item Name :"+itemValue);
        if(itemValue.includes('Brazil')){
            expect(itemValue.includes('Brazil')).toBeTruthy()
            break
        }
    }
    
})