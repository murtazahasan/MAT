import React from "react";
import { useEffect } from "react";
import {
  Header,
  Docs,
  Learn,
  Community,
  Pricing,
  Footer,
  Quickstart,
} from "./components";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Routes() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Routes;
