import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderResponsive } from "../components/HeaderResponsive";

const TRACKING_ID = "G-RH0RJETN8N";
ReactGA.initialize(TRACKING_ID);

export const Root = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <HeaderResponsive />
      <Outlet />
      <Footer />
    </>
  );
};
