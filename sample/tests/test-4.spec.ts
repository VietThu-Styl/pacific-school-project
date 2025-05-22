import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pacific-school-sit.styl.solutions/CMS/login');
  // Login failed
  // await page.getByRole('textbox', { name: 'Username or email' }).click();
  // await page.getByRole('textbox', { name: 'Username or email' }).fill('thuviet');
  // await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  // await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  // await page.getByRole('button', { name: 'Login' }).click();

  // Login success
  // await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'username or email' }).fill('kieunguyen123');
  // await page.getByRole('textbox', { name: 'Username or email' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();

  

});