import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <h1 className="intro__header">Welcome.</h1>
      <p className="intro__body">
        My name is Cassandra Genardini. I am a full-stack developer. I love to
        make beautiful user friendly applications with secure backends.
      </p>
      <Link to="/projects">
        <button type="button" className="intro__project-button">
          Projects
        </button>
      </Link>
    </div>
  );
}

export default Intro;
