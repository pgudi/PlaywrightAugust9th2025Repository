const { test, expect } = require('@playwright/test')

test('Press Login Button in Login Page', async ({ page }) => {
    await page.goto("http://localhost/login.do")

    await page.keyboard.type('Hello World!');
    await page.keyboard.press('ArrowLeft');

    await page.keyboard.down('Shift');
    for (let i = 0; i < ' World'.length; i++)
        await page.keyboard.press('ArrowLeft');
    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace');
    // Result text will end up saying 'Hello!'
    await page.waitForTimeout(2000)
})