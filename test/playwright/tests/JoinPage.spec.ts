import { test, expect } from '@playwright/test';
import { checkSiteBanner } from './siteBannerHelper';

test.beforeEach(async ({ page }) => {
  await page.goto('/join');
});

test('Join page has the correct title', async ({ page }) => {
  await expect(page).toHaveTitle('DORA Community of Practice');
});

test('Join page includes a button to join the mailing list', async ({ page }) => {
  const allButtons = page.getByRole('button');
  const firstButton = allButtons.first();
  await expect(firstButton).toBeVisible();
  await expect(firstButton).toHaveText('Join the DORA Community of Practice');
});

test('Join page includes the Google Group Mailing List card', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Google Group Mailing List' })).toBeVisible();
  const allButtons = page.getByRole('button');
  const secondButton = allButtons.nth(1);
  await expect(secondButton).toBeVisible();
  await expect(secondButton).toHaveText('Join the DORA Community of Practice');
});

test('Join page includes the Lean Coffee Discussions card', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Lean Coffee Discussions' })).toBeVisible();
  await expect(page.getByText('dora-community-events@googlegroups.com')).toBeVisible();
});

test('Join page includes the DORA Community Guides cards', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'DORA Community Guides' })).toBeVisible();
  await expect(page.getByText('Steve Fenton').first()).toBeVisible();
  await expect(page.getByText('Denali Lumma').first()).toBeVisible();
  await expect(page.getByText('Betsalel (Saul) Williamson').first()).toBeVisible();
  await expect(page.getByText('Lisa Crispin').first()).toBeVisible();
  await expect(page.getByText('Dhruv Agarwal').first()).toBeVisible();
});

test('Join page includes the DORA Advocacy Team cards', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'DORA Advocacy Team' })).toBeVisible();
  await expect(page.getByText('Nathen Harvey').first()).toBeVisible();
  await expect(page.getByText('Dave Stanke').first()).toBeVisible();
  await expect(page.getByText('Amanda Lewis').first()).toBeVisible();
});

test('Homepage displays the correct site banner', async ({ page }) => {
  await checkSiteBanner(page);
});
