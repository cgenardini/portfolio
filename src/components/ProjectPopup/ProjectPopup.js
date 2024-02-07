import "./ProjectPopup.css";
import recipe from "../../images/projects/therecipe.jpg";

function ProjectPopup({ item, handleClosePopup }) {
  return (
    <div className="project-popup">
      <div className="project-popup__container">
        <div className="project-popup__header-container">
          <a
            href={item.link}
            className="project-popup__link project-popup__link-header"
            target="_blank"
          >
            <h3 className="project-popup__header">{item.name}</h3>
          </a>
          <>
            <a
              href={item.frontend}
              target="_blank"
              className="project-popup__link"
            >
              <h3 className="project-popup__frontend">Front-End</h3>
            </a>
            {item.backend && (
              <a
                href={item.backend}
                className="project-popup__link"
                target="_blank"
              >
                <h3 className="project-popup__backend">Backend</h3>
              </a>
            )}
          </>
        </div>
        <a
          href={item.link}
          target="_blank"
          className="project-popup__image-link"
        >
          <div className="project-popup__image-container">
            <img className="project-popup__image" src={item.image} />
            <div className="project-popup__image-overlay" />
          </div>
        </a>

        <p className="project-popup__summary">{item.summary}</p>
        <h4 className="project-popup__tools-header">Tech</h4>

        <div className="project-popup__tools">{item.tools}</div>
        <ul className="project-popup__gallery">{}</ul>
        <button
          className="project-popup__close-button"
          type="button"
          onClick={handleClosePopup}
        />
      </div>
    </div>
  );
}

export default ProjectPopup;
