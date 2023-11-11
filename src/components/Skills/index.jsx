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
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";
import "./index.scss";

function Skills() {
  return (
    <section id="skills" className="skills flex-row">
      <div>
        <h2>Hard Skills</h2>
        <div className="skills-icons flex-row">
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faHtml5} />
            <p>HTML5</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faCss3Alt} />
            <p>CSS3</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faJs} />
            <p>JavaScript</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faReact} />
            <p>React</p>
          </div>
          <div>
            <Icon
              className="skills-icons__item--redux"
              icon="akar-icons:redux-fill"
            />
            <p>Redux</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faNode} />
            <p>Node</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faSass} />
            <p>SASS</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faGitAlt} />
            <p>Github</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faYarn} />
            <p>Yarn</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faNpm} />
            <p>Npm</p>
          </div>
          <div>
            <FontAwesomeIcon className="skills-icons__item" icon={faFigma} />
            <p>Figma</p>
          </div>
        </div>
      </div>
      <div>
        <h2>Soft Skills</h2>
        <div className="skills-items flex-row">
          <p>RIGUEUR</p>
          <p>RÉSOLUTION DE PROBLÉMES</p>
          <p>AUTONOMIE</p>
          <p>TRAVAIL EN ÉQUIPE</p>
          <p>RESPONSABILITÉ</p>
          <p>GESTION DE PROJETS AGILES</p>
          <p>ATTITUDE POSITIVE</p>
          <p>CURIOSITÉ</p>
          <p>FLEXIBILITÉ ET ADAPTABILITÉ</p>
          <p>VOLONTÉ DE CONTINUER À SE FORMER</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
