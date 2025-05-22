import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Go to the login page
  await page.goto('https://pacific-school-sit.styl.solutions/CMS/login');

  // Input username and password
  // await page.getByRole('textbox', { name: 'Username or email' }).click();
  await page.getByRole('textbox', { name: 'Username or email' }).fill('kieunguyen123');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');

  // Login into the system
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify the title of the page
  await expect(page).toHaveTitle('Pacific');

  // Verify the URL of the page
  await expect(page).toHaveURL('https://pacific-school-sit.styl.solutions/CMS/dashboard');

  /*
  // Verify the presence of the "Main" list item
  await expect(page.locator('text=Main')).toBeVisible();
  // Click on the "Main" list item
  await page.click('text=Main');

  // Verify the presence of the "Dashboard" link
  await expect(page.locator('text=Dashboard').first()).toBeVisible();
  // Or await expect(page.locator('span.text-holder', { hasText: 'Dashboard' })).toBeVisible();

  // Click on the "Dashboard" option
  // await page.click('text=Dashboard');
  */

  // Verify the presence of the "Merchant" list item
  await expect(page.locator('span.text-holder', { hasText: 'Merchant' })).toBeVisible();
  // Click on the "Merchant" list item
  await page.click('text=Merchant');

  await page.hover('text=Merchant');
  // Click on the "Management" option
  await page.click('text=Management');

  // Verify the presence of the "Add" button
  const addButton = page.getByRole('button', { name: 'Add', exact: true });
  await expect(addButton).toBeVisible();
  // Click on the "Add" button
  await page.getByRole('button', { name: 'Add', exact: true }).click();

});