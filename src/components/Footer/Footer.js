import React from "react";
import "./Footer.css";

import { PathClassNameContext } from "../../context/PathClassNameContext";

function Footer() {
  const { pathClass } = React.useContext(PathClassNameContext);

  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/cassandra-genardini/", "_blank");
  };

  const handleClickEmail = () => {
    window.location.href = "mailto:csgenardini@gmail.com";
  };

  const handleClickGitHub = () => {
    window.open("https://github.com/cgenardini");
  };

  return (
    <footer className="footer">
      <h4 className={`footer__copywrite footer__copywrite_${pathClass}`}>
        © 2023 C Genardini
      </h4>
      <ul className="footer__icons">
        <li className="footer__list-item">
          <button
            className={`footer__icon footer__linkedin footer__linkedin_${pathClass}`}
            onClick={handleClickLinkedIn}
          />
        </li>
        <li className="footer__list-item">
          <button
            className={`footer__icon footer__github footer__github_${pathClass}`}
            onClick={handleClickGitHub}
          />
        </li>
        <li className="footer__list-item">
          <button
            className={`footer__icon footer__email footer__email_${pathClass}`}
            onClick={handleClickEmail}
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
