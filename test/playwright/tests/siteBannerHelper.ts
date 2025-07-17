import { expect, Page } from '@playwright/test';

export async function checkSiteBanner(page: Page) {
  const siteBannerURL = 'https://dora.dev/merch/';
  const siteBannerText = 'Buy a DORA T-shirt!';

  const bannerLink = page.locator('a', { hasText: siteBannerText }); // Consider a more robust selector

  await expect(bannerLink).toBeVisible();
  await expect(bannerLink).toHaveAttribute('href', siteBannerURL);
}
