import React from "react";
import { Hero, Navbar, Companies } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
};

export default App;
