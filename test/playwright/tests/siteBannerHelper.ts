import { expect, Page } from "@playwright/test";

export async function checkSiteBanner(page: Page) {
  const siteBannerText = "Download the DORA AI Capabilities Model report!";

  const bannerLink = page.locator("a", { hasText: siteBannerText });

  await expect(bannerLink).toBeVisible();
}
