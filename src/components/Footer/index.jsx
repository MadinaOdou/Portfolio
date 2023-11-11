import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

function Footer() {
  return (
    <footer className="footer">
      <a
        title="Visiter le profil GitHub"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/MadinaOdou"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        title="Visiter le profil LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/madinaodou/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <p className="footer-text">©2023 Madina ODOU. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
