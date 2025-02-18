import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('test', async ({ page }) => {
  await expect(page.getByText('The DORA Community provides opportunities')).toBeVisible();
});

test('Homepage has the correct title.', async ({ page }) => {
  await expect(page).toHaveTitle('DORA Community of Practice');
});

test('JOIN THE DORA COMMUNITY OF PRACTICE button opens correct link in new tab', async ({ page }) => {
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'JOIN THE DORA COMMUNITY OF PRACTICE' }).click()
  ]);

  await expect(newPage).toHaveURL('https://groups.google.com/g/dora-community/about');
});

test('DORA.dev card button navigates to correct URL', async ({ page }) => {
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Explore DORA.dev' }).click(),
  ]);
  await expect(newPage).toHaveURL('https://dora.dev');
});

test('T-shirts card button navigates to correct URL', async ({ page }) => {
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Browse t-shirts now' }).click(),
  ]);
  await expect(newPage).toHaveURL('https://dora.dev/merch/');
});

test('YouTube button navigates to correct URL', async ({ page }) => {
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.getByRole('button', { name: 'Subscribe to Our Channel' }).click(),
  ]);
  await expect(newPage).toHaveURL('https://www.youtube.com/@dora-dev?sub_confirmation=1');
});

test('Homepage displays a calendar iframe', async ({ page }) => {
  await expect(page.locator('iframe[src*="calendar.google.com"]')).toBeVisible();
});

test('DORA.dev card contains expected text', async ({page}) => {
  await expect(page.getByText('DORA is the largest and longest running research program')).toBeVisible();
});

