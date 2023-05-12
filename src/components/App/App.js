import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import Navbar from "../navbar/navbar";
// import PortfolioContainer from "../portfolioContainer/portfolioContainer";
import Footer from "../footer/footer";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";


import Home from "../home/home";

import About from "../about/about-me";
import Projects from "../projects/projects";
import Resume from "../resume/resume";
import Contact from "../contact/contact"
import Preloader from "../preloader";
import {
  HashRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ScrollToTop from "../scroll";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HashRouter>
      <Preloader load={load} />
      <div className="home" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Link to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;