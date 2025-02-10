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

