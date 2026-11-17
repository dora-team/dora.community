export interface Redirect {
  path: string;
  to: string;
}

export const REDIRECTS: Redirect[] = [
  {
    path: "/youtube",
    to: "https://www.youtube.com/@dora-dev",
  },
  {
    path: "/leancoffee",
    to: "https://dora.dev/leancoffee",
  },
];
