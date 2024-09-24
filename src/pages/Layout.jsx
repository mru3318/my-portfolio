import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navigation />
      <div className="mt-5 pt-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
