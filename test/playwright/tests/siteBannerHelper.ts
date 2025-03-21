import { expect, Page } from '@playwright/test';

export async function checkSiteBanner(page: Page) {
  const siteBannerURL = 'https://cloud.google.com/resources/content/dora-impact-of-gen-ai-software-development';
  const siteBannerText = 'Download the Impact of Generative AI in Software Development';

  const bannerLink = page.locator('a', { hasText: siteBannerText }); // Consider a more robust selector

  await expect(bannerLink).toBeVisible();
  await expect(bannerLink).toHaveAttribute('href', siteBannerURL);
}
