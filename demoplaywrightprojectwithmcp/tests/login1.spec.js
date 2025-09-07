// login1.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./LoginPage');

test('Login and logout flow', async ({ browser }) => {
  const context = await browser.newContext({ headless: false });
  const page = await context.newPage();
  const loginPage = new LoginPage(page);

  // Step 1: Navigate to URL
  await loginPage.goto();

  // Step 2 & 3: Provide username and password, Step 4: Click login
  await loginPage.login('Admin', 'admin123');

  // Step 5: Click user profile icon and logout
  await loginPage.logout();

  // Optionally, verify you are back on login page
  await expect(page).toHaveURL(/auth\/login/);

  await context.close();
});
