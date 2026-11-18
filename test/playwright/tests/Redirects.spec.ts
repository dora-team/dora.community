import { test, expect } from "@playwright/test";
import { REDIRECTS } from "../../../src/data/redirects";

for (const { path, to } of REDIRECTS) {
  test(`Redirect from ${path} to ${to} works`, async ({ page }) => {
    const targetUrl = new URL(to);

    // Check the request to the target rather than the final URL, since the
    // target may itself redirect elsewhere (e.g. dora.dev/leancoffee).
    const requestPromise = page.waitForRequest((req) => {
      const url = new URL(req.url());
      return url.origin === targetUrl.origin && url.pathname.startsWith(targetUrl.pathname);
    });

    await page.goto(path);
    await requestPromise;
  });

  test(`Redirect from ${path} to ${to} preserves query parameters`, async ({ page }) => {
    const queryParams = "?utm_source=test&foo=bar";
    const targetUrl = new URL(to);

    // Capture the request to the target URL
    const requestPromise = page.waitForRequest((req) => {
      const url = new URL(req.url());
      return url.origin === targetUrl.origin && url.pathname === targetUrl.pathname;
    });

    await page.goto(`${path}${queryParams}`);
    const request = await requestPromise;

    expect(request.url()).toContain(queryParams);
  });
}
