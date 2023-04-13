import Navbar from "../navbar/navbar";
import Home from "../home/home";
import About from "../about/about-me";
import Projects from "../projects/projects";
import Footer from "../footer/footer";
import Resume from "../resume/resume";
import Contact from "../contact/contact"
import { BrowserRouter as Router, Scroll, Route } from "react-router-dom";
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
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          <Footer />
        </Router>
      </header>
    </div>
  );
}

export default App;