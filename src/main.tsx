import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./routes/Root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./components/ErrorPage.tsx";
import { HomePage } from "./components/HomePage.tsx";
import { JoinPage } from "./components/JoinPage.tsx";
import { CommunityGuidelinesPage } from "./components/CommunityGuidelines.tsx";
import { SummitPage } from "./components/SummitPage.tsx";
import { OpeningKeynotePage } from "./components/OpeningKeynotePage.tsx";
import { JohnDeerePage } from "./components/JohnDeerePage.tsx";
import { DenaliLummaPage } from "./components/DenaliLummaPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "communityguidelines",
        element: <CommunityGuidelinesPage />,
      },
      {
        path: "communityguidelines/",
        element: <CommunityGuidelinesPage />,
      },
      {
        path: "join",
        element: <JoinPage />,
      },
      {
        path: "join/",
        element: <JoinPage />,
      },
      {
        path: "summit",
        element: <SummitPage />,
      },
      {
        path: "summit/",
        element: <SummitPage />,
      },
      {
        path: "summit/opening-keynote",
        element: <OpeningKeynotePage />,
      },
      {
        path: "summit/opening-keynote/",
        element: <OpeningKeynotePage />,
      },
      {
        path: "summit/john-deere",
        element: <JohnDeerePage />,
      },
      {
        path: "summit/john-deere/",
        element: <JohnDeerePage />,
      },
      {
        path: "summit/denali-lumma",
        element: <DenaliLummaPage />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
