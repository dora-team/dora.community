# Getting Started (Developers)

This guide covers everything needed to run, test, and change the
[dora.community](https://dora.community) website locally.

The site is a single-page application built with **React 18**, **TypeScript**,
**Vite 8**, and **MUI 5**. It is hosted on **Netlify**, and end-to-end tests are
written with **Playwright**.

## Prerequisites

| Tool | Version | Notes |
| ---- | ------- | ----- |
| [Node.js](https://nodejs.org/) | `^20.19.0` or `>=22.12.0` | Required by Vite 8. Older versions fail at startup. The current LTS is recommended. |
| npm | Bundled with Node.js | The repo uses `package-lock.json`, so use npm rather than yarn or pnpm. |
| Git | Any recent version | The repo is also set up for [Jujutsu (`jj`)](https://github.com/jj-vcs/jj) alongside Git. Using `jj` is optional. |

On macOS, one way to install Node.js is:

```bash
brew install node@22
# or use a version manager such as nvm, fnm, or volta
```

Check your versions:

```bash
node -v   # should print v20.19+ or v22.12+
npm -v
```

## Install

```bash
git clone https://github.com/dora-team/dora.community.git
cd dora.community
npm ci          # clean install from package-lock.json
```

`npm ci` is the best choice for a fresh clone. Use `npm install` only when you
mean to add or update dependencies, because it can rewrite `package-lock.json`.

## Run the site locally

```bash
npm run dev
```

Open <http://localhost:5173>. Vite hot-reloads when you edit files under `src/`.
If port 5173 is already in use, Vite picks the next free port and prints it in
the terminal.

## Production build and preview

```bash
npm run build     # type-checks with `tsc`, then bundles to dist/
npm run preview   # serves dist/ at http://localhost:4173 by default
```

Run `npm run build` before you open a pull request. Netlify runs the same
command, so type errors that the dev server lets through will fail the deploy.

## End-to-end tests (Playwright)

The tests live in `test/playwright/`, which is a separate npm package with its
own dependencies.

One-time setup:

```bash
cd test/playwright
npm ci
npx playwright install chromium   # only Chromium is enabled in the config
cd ../..
```

Run the tests from the repository root:

```bash
npm run build       # the test server serves the built dist/ folder
npm run test:e2e
```

How the test server works (from `test/playwright/playwright.config.ts`):

- Tests target `http://localhost:5173`.
- If a server is already running on port 5173, such as `npm run dev`, the
  tests use it.
- If nothing is running there, Playwright starts
  `npm run preview -- --port 5173`. That serves `dist/`, so you need to run
  `npm run build` first.
- To test a different environment, set `PLAYWRIGHT_BASE_URL`:

  ```bash
  cd test/playwright
  PLAYWRIGHT_BASE_URL=https://dora.community/ npx playwright test
  ```

- To see the HTML report after a run: `cd test/playwright && npx playwright show-report`

`npm run ci:test:e2e` is the command Netlify uses. It installs the test
dependencies and browsers, then runs the suite.

## Linting

`package.json` has an `npm run lint` script for ESLint 8. However, the
repository **does not currently include an ESLint config file**, so the script
is expected to fail with a "no configuration found" error until one is added.
For now, `npm run build` (which runs `tsc` in strict mode) is the main static
check.

## Project layout

```text
.
├── index.html               # Vite HTML entry point
├── vite.config.ts           # React plugin + raw import of .md files
├── netlify.toml             # Netlify build command (build + e2e tests)
├── public/                  # Copied as-is into dist/
│   └── _redirects           # Netlify server-side redirects + SPA fallback
├── src/
│   ├── main.tsx             # App bootstrap: theme, router
│   ├── theme.ts             # MUI theme
│   ├── routes/
│   │   ├── Root.tsx         # Layout shell (header, footer, outlet)
│   │   └── Routes.tsx       # Route table and navigation menu items
│   ├── components/          # Pages and UI components
│   ├── data/redirects.ts    # Client-side external redirects (e.g. /youtube)
│   ├── hooks/               # Custom React hooks
│   └── assets/              # Images, PDFs; index.ts re-exports headshots
└── test/playwright/         # Playwright e2e tests (separate npm package)
```

## Common tasks

### Add a page

1. Create a component in `src/components/`, such as `MyPage.tsx`.
2. Register it in `src/routes/Routes.tsx` by adding an entry to `routes`.
   Set `menuItem: true` and a `label` if it should appear in the navigation bar.
3. Consider adding a Playwright spec in `test/playwright/tests/`.

### Add an external short link (for example `/youtube`)

Add an entry to `REDIRECTS` in `src/data/redirects.ts`. The router creates the
route, and `Redirects.spec.ts` automatically generates tests for each entry,
including a check that query parameters are preserved.

`public/_redirects` holds the Netlify server-side redirects. Only Netlify
applies them; `npm run dev` and `npm run preview` ignore them. That is why
short links are also defined on the client side.

### Add images or other assets

Put files in `src/assets/` and import them, so that Vite fingerprints them.
Headshots are re-exported from `src/assets/index.ts`. Files that need a stable,
unhashed URL, such as social-share images, go in `public/`.

### Markdown content

`vite-raw-plugin` imports `.md` files as raw strings, and
`markdown-to-jsx` renders them (see `src/components/Markdown.tsx`).

## Deployment

Netlify builds and deploys the site from this repository. The build command in
`netlify.toml` is:

```bash
REACT_APP_CONTEXT=$CONTEXT npm run build && npm run ci:test:e2e
```

If either the build or the e2e tests fail, the deploy fails. Running both
locally before you push avoids broken deploys.

## Troubleshooting

| Symptom | Fix |
| ------- | --- |
| `Vite requires Node.js version 20.19+ or 22.12+` or a syntax error when Vite starts | Upgrade Node.js (see [Prerequisites](#prerequisites)). |
| `command not found: node` | Install Node.js, or load your version manager in the current shell. |
| Playwright: `Executable doesn't exist ... chromium` | `cd test/playwright && npx playwright install chromium` |
| Playwright tests hit an old build | `preview` serves `dist/`. Re-run `npm run build`, or keep `npm run dev` running on port 5173. |
| Playwright cannot reach `localhost:5173` | Another process may be using the port. Stop it, or set `PLAYWRIGHT_BASE_URL`. |
| `/youtube` (or another short link) does nothing locally | Confirm the entry exists in `src/data/redirects.ts`. `public/_redirects` is not applied locally. |
