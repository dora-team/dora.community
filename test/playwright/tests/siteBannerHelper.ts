import { expect, Page } from '@playwright/test';

export async function checkSiteBanner(page: Page) {
  const siteBannerURL = 'https://dora.dev/survey/';
  const siteBannerText = 'Take the 2025 DORA Survey!';

  const bannerLink = page.locator('a', { hasText: siteBannerText }); // Consider a more robust selector

  await expect(bannerLink).toBeVisible();
  await expect(bannerLink).toHaveAttribute('href', siteBannerURL);
}
