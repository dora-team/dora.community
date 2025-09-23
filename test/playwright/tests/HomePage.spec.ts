import { test, expect } from "@playwright/test";
import { checkSiteBanner } from "./siteBannerHelper";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("Homepage displays the correct site banner", async ({ page }) => {
  await checkSiteBanner(page);
});

test("Homepage displays the main heading", async ({ page }) => {
  await expect(
    page.getByText("The DORA Community provides opportunities"),
  ).toBeVisible();
});

test("Homepage has the correct title.", async ({ page }) => {
  await expect(page).toHaveTitle("DORA Community of Practice");
});

const buttonTests = {
  "Join the dora community of practice":
    "https://groups.google.com/g/dora-community/about",
  "Explore DORA.dev": "https://dora.dev",
  "Download the report":
    "https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report",
  "Subscribe to Our Channel":
    "https://www.youtube.com/@dora-dev?sub_confirmation=1",
};

for (const [buttonName, expectedURL] of Object.entries(buttonTests)) {
  test(`${buttonName} button opens correct link in new tab`, async ({
    page,
  }) => {
    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("button", { name: buttonName }).click(),
    ]);

    await expect(newPage).toHaveURL(expectedURL);
  });
}

test("Homepage displays a calendar iframe", async ({ page }) => {
  await expect(
    page.locator('iframe[src*="calendar.google.com"]'),
  ).toBeVisible();
});

test.describe("scrolling with a URL hash", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#calendar");
  });

  test("should put the calendar in the viewport", async ({ page }) => {
    const calendarCard = page.locator("#calendar");
    await expect(calendarCard).toBeInViewport();
  });

  test("should move the dora-dev card out of the viewport", async ({
    page,
  }) => {
    const doraDevCard = page.locator("#dora-dev");
    await expect(doraDevCard).not.toBeInViewport();
  });
});
