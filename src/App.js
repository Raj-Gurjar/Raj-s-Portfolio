import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/Skills";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
