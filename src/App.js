import React from "react";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons.js";
import TinderCards from "./components/TinderCards";

const npm = () => {
  return (
    <div className="app">
      {/*Header Tinder */}
      <Header />
      {/*Tinder Cards */}
      <TinderCards />
      {/*swipe Btns */}
      <SwipeButtons />
    </div>
  );
};

export default npm;
