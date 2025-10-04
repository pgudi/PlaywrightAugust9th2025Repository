const {test, expect} = require('@playwright/test')
/*
   How to select item from the drop down?
   Items from the drop down can be selected
   1. visiable Text of that item [label]
   2. value of that item
   3. index of that items
*/
test('Handle Drop Down Items from the Country', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({label:'United Kingdom'})
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({value:"france"})
    await page.waitForTimeout(2000)
    await page.locator("#country").selectOption({index:3})
    await page.waitForTimeout(2000)
})