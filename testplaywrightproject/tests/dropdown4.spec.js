const {test, expect} = require('@playwright/test')
test('Fetch Each Item Name using Loop', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)

    const dropdownElement = await page.$("#country")
    const dropdownitems = await dropdownElement.$$("option")
    console.log("Number of Countries :"+dropdownitems.length);
    console.log("Drop Down Items :"+dropdownitems);
    
    for(let i=0;i<dropdownitems.length;i++){
        const itemName = await dropdownitems[i].textContent()
        console.log("Item Name :"+itemName);
        
        if(itemName.includes('India')){
            expect(itemName.includes('India')).toBeTruthy()
            break;
        }
    }
    
    
})