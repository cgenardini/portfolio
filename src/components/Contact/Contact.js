import "./Contact.css";
import email from "../../images/social/gmail-blue.svg";
import linkedin from "../../images/social/linkedin-blue.svg";
import github from "../../images/social/github-blue.svg";

function Contact() {
  return (
    <div className="contact">
      <h1 className="contact__header">Say Hello.</h1>
      <a href="mailto:csgenardini@gmail.com" className="contact__contact">
        <img className="contact__icon" src={email} alt="email icon" />
        <div className="contact__text">csgenardini@gmail.com</div>
      </a>

      <a
        href="https://www.linkedin.com/in/cassandra-genardini/"
        className="contact__contact"
        target="_blank"
      >
        <img className="contact__icon" src={linkedin} alt="linkedin icon" />
        <div className="contact__text">
          linkedin.com/in/cassandra-genardini/
        </div>
      </a>
      <a
        href="https://github.com/cgenardini"
        className="contact__contact"
        target="_blank"
      >
        <img className="contact__icon" src={github} alt="github icon" />
        <div className="contact__text">github.com/cgenardini</div>
      </a>
    </div>
  );
}

export default Contact;
