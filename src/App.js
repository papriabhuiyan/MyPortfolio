import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills"
import Footer from "./Components/Footer/Footer";
import Fade from "react-reveal/Fade";
import "./App.css";

function App() {
  return (
    <div>
        <div>
          <Navbar />
          <Fade>
            <Header />
            <About />
          </Fade>
          <Skills />
          <Projects />
          <Footer />
        </div>
    </div>
  );
}

export default App;
