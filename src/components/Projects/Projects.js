import "./Projects.css";
import { projectsArray } from "../../utils/constants";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <ul className="projects__gallery">
        {projectsArray.map((project) => {
          return <ProjectCard card={project} key={project.id} />;
        })}
      </ul>
    </div>
  );
}

export default Projects;
