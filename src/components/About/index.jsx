import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import photo from "../../../public/images/madina-odou.webp";
import myCV from "../../../public/CV_Madina_Odou.pdf";

function About() {
  return (
    <section id="aboutme" className="about">
      <h2>À propos</h2>
      <div className="about-content">
        <img src={photo} alt="Photo de Madina Odou" />
        <div>
          <p>
            Après une formation initiale technique et une première carrière dans
            les relations publiques et les réseaux sociaux, j'ai choisi
            d'approfondir mes compétences techniques et de m'orienter vers le
            développement web. Actuellement disponible et ravie d'échanger dès à
            présent avec vous !
          </p>
          <div className="button-group">
            <div className="button-group--text">Voir mon CV</div>
            <a
              className="button-group--icon"
              title="Download Resume"
              href={myCV}
              download="CV_Madina_Odou.pdf"
            >
              <FontAwesomeIcon icon={faCircleDown} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
