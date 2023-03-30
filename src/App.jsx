import React from "react";
import { Hero, Navbar, Companies, Courses } from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
    </div>
  );
};

export default App;
