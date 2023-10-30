import { useState } from "react";
import {
  TiChevronLeftOutline,
  TiChevronRightOutline,
} from "https://cdn.skypack.dev/react-icons/ti";
import "./index.scss";

const MAX_VISIBILITY = 3;

const Card = ({ title, content }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Projects = () => {
  const [active, setActive] = useState(2);

  return (
    <section className="projects">
      <div className="carousel">
        <h2>Projects</h2>
        {active > 0 && (
          <button className="nav left" onClick={() => setActive(active - 1)}>
            <TiChevronLeftOutline />
          </button>
        )}
        <div
          className="card-container"
          style={{
            "--active": 0 === active ? 1 : 0,
            "--offset": (active - 0) / 3,
            "--direction": Math.sign(active - 0),
            "--abs-offset": Math.abs(active - 0) / 3,
            "pointer-events": active === 0 ? "auto" : "none",
            opacity: Math.abs(active - 0) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - 0) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          <Card
            title={"Card 1"}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
        <div
          className="card-container"
          style={{
            "--active": 1 === active ? 1 : 0,
            "--offset": (active - 1) / 3,
            "--direction": Math.sign(active - 1),
            "--abs-offset": Math.abs(active - 1) / 3,
            "pointer-events": active === 1 ? "auto" : "none",
            opacity: Math.abs(active - 1) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - 1) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          <Card
            title={"Card 2"}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
        <div
          className="card-container"
          style={{
            "--active": 2 === active ? 1 : 0,
            "--offset": (active - 2) / 3,
            "--direction": Math.sign(active - 2),
            "--abs-offset": Math.abs(active - 2) / 3,
            "pointer-events": active === 2 ? "auto" : "none",
            opacity: Math.abs(active - 2) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - 2) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          <Card
            title={"Card 3"}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          />
        </div>
        {active < 9 && (
          <div
            className="card-container"
            style={{
              "--active": 3 === active ? 1 : 0,
              "--offset": (active - 3) / 3,
              "--direction": Math.sign(active - 3),
              "--abs-offset": Math.abs(active - 3) / 3,
              "pointer-events": active === 3 ? "auto" : "none",
              opacity: Math.abs(active - 3) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - 3) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Card
              title={"Card 4"}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        )}
        {active < 9 && (
          <div
            className="card-container"
            style={{
              "--active": 4 === active ? 1 : 0,
              "--offset": (active - 4) / 3,
              "--direction": Math.sign(active - 4),
              "--abs-offset": Math.abs(active - 4) / 3,
              "pointer-events": active === 4 ? "auto" : "none",
              opacity: Math.abs(active - 4) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - 4) > MAX_VISIBILITY ? "none" : "block",
            }}
          >
            <Card
              title={"Card 5"}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        )}
        {active < 9 && (
          <button className="nav right" onClick={() => setActive(active + 1)}>
            <TiChevronRightOutline />
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
