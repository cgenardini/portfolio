import "./ProjectCard.css";

function ProjectCard({ card, openProjectPopup }) {
  const openPopup = (e) => {
    e.preventDefault();
    openProjectPopup(card);
  };

  return (
    <a href={card.link} target="_blank">
      <li className="project-card" onClick={openPopup}>
        <img
          src={card.image}
          alt={card.name}
          className="project-card__image"
        ></img>
        <div className="project-card__image-overlay"></div>
        <h3 className="project-card__title">{card.name}</h3>
      </li>
    </a>
  );
}

export default ProjectCard;
