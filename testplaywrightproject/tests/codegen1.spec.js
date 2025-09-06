import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost/login.do');
  await page.getByRole('textbox', { name: 'Username' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('manager');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByText('Getting Started Shortcuts Best Way to Get Started Decide what features you need').click();
  await page.getByRole('link', { name: 'Logout' }).click();
});