import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../templates/Footer";

export default function HomeLayout() {
  return (
    <div className="container">
      {/* <nav>This is a nav bar</nav> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
