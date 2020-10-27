import React from "react";
import './App.css';
import Header from "./Header";
import TindrCards from "./TindrCards";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
        <Header />
        <TindrCards />
        {/* Swipe buttons */}
    </div>
  );
}

export default App;
