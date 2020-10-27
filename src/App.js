import React from "react";
import './App.css';
import Header from "./Header";
import TindrCards from "./TindrCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
        <Header />
        <TindrCards />
        <SwipeButtons />
    </div>
  );
}

export default App;
