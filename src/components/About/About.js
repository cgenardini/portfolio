import "./About.css";
import photo from "../../images/me-dress.jpg";

function About() {
  return (
    <div className="about">
      <div className="about__summary">
        <h1 className="about__header">Hello.</h1>
        <p className="about__paragraph">
          My name is Cassandra and I am a Full Stack Software Engineer living in
          Los Angeles, CA. As a Full Stack Software Engineer, I leverage my
          robust skill set in front-end technologies & a strong command of
          back-end systems, including HTML, CSS, JavaScript, React, Node,
          Express, MongoDB and NoSQL databases. Evolving from a seasoned
          background in operations management, I excel in creating scalable,
          responsive web applications. My journey from restaurant management to
          software engineering has equipped me with valuable skills in teamwork,
          problem-solving, and effective commination.
        </p>
        <p className="about__paragraph">
          Apart from coding, I love being outdoors and spending time with my
          pup, Auggie. I am very passionate about traveling and experiencing new
          things. I am a lifelong learner and love to learn new things.
        </p>
      </div>
      <img src={photo} className="about__image" />
    </div>
  );
}

export default About;
