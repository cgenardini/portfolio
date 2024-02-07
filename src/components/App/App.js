import React from "react";
import { useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import ProjectPopup from "../ProjectPopup/ProjectPopup";
import "./App.css";
import logo from "../../images/logo.png";
import Background from "../Background/Background";
import Preloader from "../Preloader/Preloader";

import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import { PathClassNameContext } from "../../context/PathClassNameContext";

function App() {
  const [pathClass, setPathClass] = React.useState("");
  const [currentPopup, setCurrentPopup] = React.useState("");
  const [currentItem, setCurrentItem] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

  const handleOpenProjectPopup = (item) => {
    setCurrentPopup("project");
    setCurrentItem(item);
  };

  const handleClosePopup = () => {
    setCurrentPopup("");
  };

  const handleClickOutsideClose = (evt) => {
    if (evt.target.classList.contains("project-popup")) {
      handleClosePopup();
    }
  };

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

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleClosePopup();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`app app__${pathClass}`} onClick={handleClickOutsideClose}>
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
            <Projects openProjectPopup={handleOpenProjectPopup} />
            <Background />
          </Route>
          <Route path="/">
            <Main />
            <Background />
          </Route>
        </Switch>

        <Footer />

        {isLoading && <Preloader />}

        {currentPopup === "project" && (
          <ProjectPopup
            item={currentItem}
            handleClosePopup={handleClosePopup}
          />
        )}
      </PathClassNameContext.Provider>
    </div>
  );
}

export default App;
