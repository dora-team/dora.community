This folder contains tests for use with [Playwright](https://playwright.dev).

### Initial set-up
* `npm install`
* `npx playwright install`

### To run locally:
* Start a local dev server
* from this folder, run `npx playwright test`
    * _By default, tests run against server `http://localhost:5173`. To run against a different server. set the `PLAYWRIGHT_BASE_URL` environment variable.
        * Example: `PLAYWRIGHT_BASE_URL=https://dora.community/ npx playwright test`
