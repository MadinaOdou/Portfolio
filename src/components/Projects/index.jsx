import { useState, useEffect } from "react";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
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
import ArgentBank from "../../assets/argent-bank.webp";
import Card from "../Card";
import "./index.scss";

const MAX_VISIBILITY = 3;
const TOTAL_SLIDES = 5;

const Projects = () => {
  const [active, setActive] = useState(2);
  const [autoScrolling, setAutoScrolling] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScrolling) {
        setActive((prev) => (prev + 1) % TOTAL_SLIDES);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoScrolling]);

  const handleMouseEnter = () => {
    setAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setAutoScrolling(true);
  };

  const handleNext = () => {
    setActive((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  return (
    <section className="projects">
      <div
        className="carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Projects</h2>
        <button className="nav left" onClick={handlePrev}>
          <TiChevronLeftOutline />
        </button>
        {[...Array(TOTAL_SLIDES)].map((_, index) => (
          <div
            key={index}
            className="card-container"
            style={{
              "--active": active === index ? 1 : 0,
              "--offset": (active - index) / 3,
              "--direction": Math.sign(active - index),
              "--abs-offset": Math.abs(active - index) / 3,
              pointerEvents: active === index ? "auto" : "none",
              opacity: Math.abs(active - index) >= MAX_VISIBILITY ? "0" : "1",
              display:
                Math.abs(active - index) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Card
              title="Argent Bank"
              siteWeb="https://madinaodou.github.io/ProjetOCR_Nina_Carducci/"
              codeGithub="https://github.com/MadinaOdou/OCR_projet_ArgentBank/tree/main/Frontend"
              imgSrc={ArgentBank}
              imgAlt="Argent Bank"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon1={faSass}
              icon2={faReact}
              icon3={faNode}
            />
          </div>
        ))}
        <button className="nav right" onClick={handleNext}>
          <TiChevronRightOutline />
        </button>
      </div>
    </section>
  );
};

export default Projects;
