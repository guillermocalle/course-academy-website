import React from "react";
import {
  Hero,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Categories,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Categories />
    </div>
  );
};

export default App;
