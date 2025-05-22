import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://pacific-school-sit.styl.solutions/CMS/login');
  await page.getByRole('textbox', { name: 'Username or email' }).fill('kieunguyen123'); 
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Management' }).click();
});