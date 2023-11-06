import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import photo from "../../../assets/madina-odou.webp";

function About() {
  return (
    <section id="aboutme" className="about">
      <h2>About me</h2>
      <div className="about-content">
        <div className="about-content-div flex-row">
          <img src={photo} alt="Photo de Madina Odou" />
          <p>
            Software Engineer who loves to transform ideas into reality using
            code. With over three years of developing web applications using the
            latest front-end and UI/UX technologies and full-fledged APIs.
            Motivated designer and developer with experience creating custom
            websites with ReactJs, Node, Express, Mongo, and PostgreSQL.
          </p>
        </div>
        <div className="button-group">
          <div className="button-group--text">Download CV</div>
          <a
            className="button-group--icon"
            title="Download Resume"
            href=""
            download
          >
            <FontAwesomeIcon icon={faCircleDown} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
