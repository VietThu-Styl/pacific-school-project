import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eshoppenow.com/');
  await page.getByRole('textbox', { name: 'Search products' }).click();
  await page.getByRole('textbox', { name: 'Search products' }).fill('new');
  await page.getByRole('button', { name: 'new' }).click();
});