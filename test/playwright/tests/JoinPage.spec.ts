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
  const currentGuidesSection = page.locator('#dora-community-guides');
  await expect(currentGuidesSection.getByRole('heading', { name: 'DORA Community Guides', exact: true })).toBeVisible();
  await expect(currentGuidesSection.getByText('Steve Fenton').first()).toBeVisible();
  await expect(currentGuidesSection.getByText('Denali Lumma').first()).toBeVisible();
  await expect(currentGuidesSection.getByText('Betsalel (Saul) Williamson').first()).toBeVisible();
  await expect(currentGuidesSection.getByText('Lisa Crispin').first()).toBeVisible();
  await expect(currentGuidesSection.getByText('Dhruv Agarwal')).not.toBeVisible();
});

test('Join page includes the Previous DORA Community Guides section', async ({ page }) => {
  const previousGuidesSection = page.locator('#previous-dora-community-guides');
  await expect(previousGuidesSection.getByRole('heading', { name: 'Previous DORA Community Guides' })).toBeVisible();
  await expect(previousGuidesSection.getByText('Dhruv Agarwal').first()).toBeVisible();
  await expect(previousGuidesSection.getByText('March 18, 2025 - February 23, 2026')).toBeVisible();
  await expect(previousGuidesSection.getByRole('link', { name: 'LinkedIn' })).toBeVisible();
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
