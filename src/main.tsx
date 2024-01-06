import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./routes/Root.tsx";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "./theme.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { JoinPage } from "./components/JoinPage.tsx";
import { CommunityGuidelinesPage } from "./components/CommunityGuidelines.tsx";
import { SummitPage } from "./components/SummitPage.tsx";
import { OpeningKeynotePage } from "./components/OpeningKeynotePage.tsx";
import { JohnDeerePage } from "./components/JohnDeerePage.tsx";
import { DenaliLummaPage } from "./components/DenaliLummaPage.tsx";
import { Blog } from "./components/Blog.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "communityguidelines/",
        element: <CommunityGuidelinesPage />,
      },
      {
        path: "join/",
        element: <JoinPage />,
      },
      {
        path: "blog/",
        element: <Blog />,
      },
      {
        path: "blog/:id/",
        element: <Blog />,
      },
      {
        path: "summit/",
        element: <SummitPage />,
      },
      {
        path: "summit/opening-keynote/",
        element: <OpeningKeynotePage />,
      },
      {
        path: "summit/john-deere/",
        element: <JohnDeerePage />,
      },
      {
        path: "summit/denali-lumma/",
        element: <DenaliLummaPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
