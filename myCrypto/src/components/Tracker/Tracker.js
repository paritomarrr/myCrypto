import "./App.css";
import Nav from "./nav";
import React from "react";
// import Intro from "./intro";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Coinsearch from "./coinsearch";

function Tracker() {
  return (
    <div className="coin-app">
      <Router>
        <Nav />
        {/* <Route component={Intro} path="/" exact /> */}
        <Route component={Coinsearch} path="/tracker" exact />
      </Router>
    </div>
  );
}

export default Tracker;
