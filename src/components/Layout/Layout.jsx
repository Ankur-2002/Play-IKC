import React from "react";
import Navbar from "components/Navbar/Navbar";
// import footer from "components/Footer/F__Data";
import Footer from "components/Footer/Footer";

function Layout(children) {
  return (
    <div className="layout" style={{ position: "relative" }}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
