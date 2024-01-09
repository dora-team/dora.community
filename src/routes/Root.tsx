import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TRACKING_ID = "UA-243482383-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export const Root = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
