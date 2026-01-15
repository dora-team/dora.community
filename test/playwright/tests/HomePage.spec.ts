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

type CardTestConfig = {
  url: string;
  buttonName?: string;
  cardTitle?: string;
  hasImageLink?: boolean;
  hasTitleLink?: boolean;
  redirectUrl?: string; // Optional: use this if the URL redirects to a different final URL
};

const cards: CardTestConfig[] = [
  {
    buttonName: "Join the dora community of practice",
    url: "https://groups.google.com/g/dora-community/about",
  },
  {
    cardTitle: "DORA.dev",
    buttonName: "Explore DORA.dev",
    url: "https://dora.dev",
    hasImageLink: true,
    hasTitleLink: true,
  },
  {
    cardTitle: "DORA State of AI-assisted Software Development",
    buttonName: "Download the report",
    url: "https://cloud.google.com/dora",
    redirectUrl:
      "https://cloud.google.com/resources/content/2025-dora-ai-assisted-software-development-report",
    hasImageLink: true,
    hasTitleLink: true,
  },
  {
    cardTitle: "DORA AI Capabilities Model report",
    buttonName: "Download the report",
    url: "https://cloud.google.com/resources/content/2025-dora-ai-capabilities-model-report",
    hasImageLink: true,
    hasTitleLink: true,
  },
  {
    cardTitle: "YouTube Channel",
    buttonName: "Subscribe to Our Channel",
    url: "https://www.youtube.com/@dora-dev?sub_confirmation=1",
    hasImageLink: true,
    hasTitleLink: true,
  },
];

for (const {
  cardTitle,
  buttonName,
  url: expectedURL,
  redirectUrl,
  hasImageLink,
  hasTitleLink,
} of cards) {
  if (buttonName) {
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

      await expect(newPage).toHaveURL(redirectUrl || expectedURL);
    });
  }

  if (hasImageLink && cardTitle) {
    test(`Image/Icon in ${cardTitle} opens correct link in new tab`, async ({
      page,
    }) => {
      const cardLocator = page
        .locator(".MuiGrid-item:not(.MuiGrid-container)")
        .filter({ has: page.getByRole("heading", { name: cardTitle }) });

      // The image link is the anchor tag that contains an image or icon
      // We take the first one because the card content (children) might also contain links with images/icons
      const imageLink = cardLocator.locator("a").filter({ has: page.locator("img, svg") }).first();

      const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        imageLink.click(),
      ]);

      await expect(newPage).toHaveURL(redirectUrl || expectedURL);
    });
  }

  if (hasTitleLink && cardTitle) {
    test(`Title in ${cardTitle} opens correct link in new tab`, async ({
      page,
    }) => {
      // Locate the heading that is inside an anchor tag
      const titleLink = page
        .getByRole("heading", { name: cardTitle })
        .locator("..");

      const [newPage] = await Promise.all([
        page.waitForEvent("popup"),
        titleLink.click(),
      ]);

      await expect(newPage).toHaveURL(redirectUrl || expectedURL);
    });
  }
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
