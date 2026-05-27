import { test, expect } from "@playwright/test";
import { REDIRECTS } from "../../../src/data/redirects";

for (const { path, to } of REDIRECTS) {
  test(`Redirect from ${path} to ${to} works`, async ({ page }) => {
    await page.goto(path);

    const targetUrl = new URL(to);
    await page.waitForURL((url) => url.origin === targetUrl.origin, { timeout: 10000 });

    expect(page.url()).toContain(targetUrl.pathname);
  });

  test(`Redirect from ${path} to ${to} preserves query parameters`, async ({ page }) => {
    const queryParams = "?utm_source=test&foo=bar";
    const targetUrl = new URL(to);

    // Capture the request to the target URL
    const requestPromise = page.waitForRequest((req) => {
      const url = new URL(req.url());
      return url.host === targetUrl.host && url.pathname.startsWith(targetUrl.pathname);
    });

    await page.goto(`${path}${queryParams}`);
    const request = await requestPromise;

    expect(request.url()).toContain(queryParams);
  });
}
