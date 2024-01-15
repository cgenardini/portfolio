import "./Skills.css";
import html from ".././../images/skills/html.svg";
import css from ".././../images/skills/css.svg";
import js from ".././../images/skills/js.svg";

function Skills() {
  return (
    <div className="skills">
      <img className="skills__image" src={html} />
      <img className="skills__image" src={css} />
      <img className="skills__image" src={js} />
    </div>
  );
}

export default Skills;
