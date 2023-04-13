import React from "react";
import Navbar from "../navbar/navbar";
import Home from "../home/home";
import About from "../about/about-me";
import Projects from "../projects/projects";
import Footer from "../footer/footer";
import Resume from "../resume/resume";
import Contact from "../contact/contact"
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "../scroll";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
       <header className="App-header">
        <Router>
          <Navbar />
          <ScrollToTop />
          <Home />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </Router>
      <Footer />
      </header>
    </div>
  );
}

export default App;