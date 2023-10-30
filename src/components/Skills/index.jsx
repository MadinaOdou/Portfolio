import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSass,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
  faFigma,
  faYarn,
  faNpm,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-icons">
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faCss3Alt} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faSass} />
        <FontAwesomeIcon icon={faGitAlt} />
        <FontAwesomeIcon icon={faYarn} />
        <FontAwesomeIcon icon={faNpm} />
        <FontAwesomeIcon icon={faFigma} />
      </div>
    </section>
  );
}

export default Skills;
