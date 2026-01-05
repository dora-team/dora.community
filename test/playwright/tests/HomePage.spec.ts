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

const buttonTests = [
  {
    name: "Join the dora community of practice",
    url: "https://groups.google.com/g/dora-community/about",
  },
  {
    name: "Explore DORA.dev",
    url: "https://dora.dev",
    cardTitle: "DORA.dev",
  },
  {
    name: "Download the report",
    url: "https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report",
    cardTitle: "DORA State of AI-assisted Software Development",
  },
  {
    name: "Download the report",
    url: "https://cloud.google.com/resources/content/2025-dora-ai-capabilities-model-report",
    cardTitle: "DORA AI Capabilities Model report",
  },
  {
    name: "Subscribe to Our Channel",
    url: "https://www.youtube.com/@dora-dev?sub_confirmation=1",
  },
];

for (const { name: buttonName, url: expectedURL, cardTitle } of buttonTests) {
  test(`${buttonName} button${cardTitle ? ` in ${cardTitle}` : ""} opens correct link in new tab`, async ({
    page,
  }) => {
    // If a cardTitle is provided, scope the button search to that card
    const buttonLocator = cardTitle
      ? page
        .locator(".MuiGrid-item:not(.MuiGrid-container)")
        .filter({ has: page.getByRole("heading", { name: cardTitle }) })
        .getByRole("button", { name: buttonName })
      : page.getByRole("button", { name: buttonName });

    const [newPage] = await Promise.all([
      page.waitForEvent("popup"),
      buttonLocator.click(),
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
