import React from "react";
import HomeNav from "./HomeNav";
import HeroBanner from "./HeroBanner";
import Login from "./Login";
import Footer from "./Footer";

export default function loginPage() {
  return (
    <div className="login">
      <HomeNav displayBtns></HomeNav>

      <HeroBanner></HeroBanner>

      <Login></Login>

      <Footer></Footer>
    </div>
  );
}
