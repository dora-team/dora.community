import { Navigate } from "react-router-dom";
import { CommunityGuidelinesPage } from "../components/CommunityGuidelines";
import { DenaliLummaPage } from "../components/DenaliLummaPage";
import { HomePage } from "../components/HomePage";
import { JohnDeerePage } from "../components/JohnDeerePage";
import { JoinPage } from "../components/JoinPage";
import { OpeningKeynotePage } from "../components/OpeningKeynotePage";
import { SummitPage } from "../components/SummitPage";

// Ordered list of routes. Add the menuItem: true to any route that needs to be displayed in the navigation bar
export const routes = [
  {
    element: <HomePage />,
    index: true,
    label: "Home",
    menuItem: true,
    path: "/",
  },
  {
    element: <CommunityGuidelinesPage />,
    label: "Community Guidelines",
    menuItem: true,
    path: "/communityguidelines",
  },
  {
    element: <JoinPage />,
    label: "Join Community",
    menuItem: true,
    path: "/join",
  },
  {
    element: <SummitPage />,
    label: "Community Summit",
    menuItem: true,
    path: "/summit",
  },
  {
    element: <Navigate to="/" replace />,
    label: "Blog",
    menuItem: false,
    path: "/blog",
  },
  {
    element: <Navigate to="/" replace />,
    path: "blog/:id/",
  },
  {
    element: <OpeningKeynotePage />,
    path: "summit/opening-keynote/",
  },
  {
    element: <JohnDeerePage />,
    path: "summit/john-deere/",
  },
  {
    element: <DenaliLummaPage />,
    path: "summit/denali-lumma/",
  },
  {
    element: <Navigate to="/#calendar" replace />,
    path: "/calendar",
  },
];

export const menuItems: { label: string; path: string }[] = routes
  .filter((route) => route.menuItem)
  .map((menuItem) => ({
    path: menuItem.path,
    label: menuItem.label ?? `Label missing for ${menuItem.path}`,
  }));

export const children = routes.map((route) => ({
  index: route.index,
  path: route.path,
  element: route.element,
}));
