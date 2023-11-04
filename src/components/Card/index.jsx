import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Card({
  title,
  siteWeb,
  codeGithub,
  content,
  imgSrc,
  imgAlt,
  icon1,
  icon2,
  icon3,
}) {
  return (
    <div className="card">
      <div className="card-title flex-row">
        <h3>{title}</h3>
        <div>
          <a
            href={siteWeb}
            title="Visit site web"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEye} />
          </a>
          <a
            href={codeGithub}
            title="View code source on Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLaptopCode} />
          </a>
        </div>
      </div>
      <div className="browser-mockup">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <p>{content}</p>
      <div className="tech-icons">
        <FontAwesomeIcon icon={icon1} />
        <FontAwesomeIcon icon={icon2} />
        <FontAwesomeIcon icon={icon3} />
      </div>
    </div>
  );
}

export default Card;
