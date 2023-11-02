import { useState, useEffect } from "react";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
import "./index.scss";

const MAX_VISIBILITY = 3;
const TOTAL_SLIDES = 5;

const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

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
              title={`Card ${index + 1}`}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
