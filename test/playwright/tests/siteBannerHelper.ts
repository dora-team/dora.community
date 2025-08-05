import { expect, Page } from '@playwright/test';

export async function checkSiteBanner(page: Page) {
  const siteBannerText = 'Buy a DORA T-shirt!';

  const bannerLink = page.locator('a', { hasText: siteBannerText });

  await expect(bannerLink).not.toBeVisible();
}
