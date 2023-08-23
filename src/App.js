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
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);
  return (
    <div>
      {loading ? (
        <div class="loading-section">
	        <h1 className="loading-h1">
            <span className="w-span">W</span>
            <span className="w-span">e</span>
            <span className="w-span">l</span>
            <span className="w-span">c</span>
            <span className="w-span">o</span>
            <span className="w-span">m</span>
            <span className="w-span">e</span>
          </h1>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
