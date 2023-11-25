import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../global.css";
const Layout = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
