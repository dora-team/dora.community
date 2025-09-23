import { expect, Page } from "@playwright/test";

export async function checkSiteBanner(page: Page) {
  const siteBannerText = "Download the 2025 DORA Report!";

  const bannerLink = page.locator("a", { hasText: siteBannerText });

  await expect(bannerLink).toBeVisible();
}
