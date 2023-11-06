import { useState, useEffect } from "react";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
import Card from "../Card";
import cardData from "../../data/projects.json";
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
        className="projects-carousel"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2>Projects</h2>
        <button className="arrow arrow-left" onClick={handlePrev}>
          <TiChevronLeftOutline />
        </button>
        {cardData.map((data, index) => (
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
              title={data.title}
              siteWeb={data.siteWeb}
              gitHub={data.gitHub}
              imgSrc={data.imgSrc}
              imgAlt={data.imgAlt}
              description={data.description}
              usedTech={data.usedTech}
            />
          </div>
        ))}
        <button className="arrow arrow-right" onClick={handleNext}>
          <TiChevronRightOutline />
        </button>
      </div>
    </section>
  );
};

export default Projects;
