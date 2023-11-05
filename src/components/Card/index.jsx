import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

function Card({
  title,
  siteWeb,
  gitHub,
  description,
  imgSrc,
  imgAlt,
  usedTech,
}) {
  return (
    <div className="card">
      <div className="card-title flex-row">
        <h3>{title}</h3>
        <div className="card-title--links">
          <a
            href={siteWeb}
            title="Visit site web"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEye} />
          </a>
          <a
            href={gitHub}
            title="View code source on Github"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLaptopCode} />
          </a>
        </div>
      </div>
      <div className="card-image">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <p>{description}</p>
      <div className="card-technologies flex-row">
        <p>
          <strong>Technologies:</strong>
        </p>
        {usedTech}
      </div>
    </div>
  );
}

export default Card;
