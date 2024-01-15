import React from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./App.css";
import logo from "../../images/logo.png";
import Background from "../Background/Background";

import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import { PathClassNameContext } from "../../context/PathClassNameContext";

function App() {
  const [pathClass, setPathClass] = React.useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/about") {
      setPathClass("about");
    }
    if (currentPath === "/contact") {
      setPathClass("contact");
    }
    if (currentPath === "/projects") {
      setPathClass("projects");
    }
    if (currentPath === "/") {
      setPathClass("");
    }
  }, [location.pathname]);

  return (
    <div className={`app app__${pathClass}`}>
      <PathClassNameContext.Provider value={{ pathClass }}>
        <Header logoSrc={logo} />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Main />
            <Background />
          </Route>
        </Switch>

        <Footer />
      </PathClassNameContext.Provider>
    </div>
  );
}

export default App;
