import NavButton from "../NavButton";
import "./index.scss";

function Banner({ title, description }) {
  let squares = [];

  for (let i = 0; i < 20; i++) {
    squares.push(i);
  }

  const generateRandomNum = ({ min, max }) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div className="banner">
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="flip">
          <div>
            <div>Développeuse Front-end</div>
          </div>
          <div>
            <div>Intégratrice Web</div>
          </div>
          <div>
            <div>Développeuse React</div>
          </div>
        </div>
      </div>
      <div className="banner-nav flex-row">
        <NavButton navLink={"#aboutme"} navName={"à propos"} />
        <NavButton navLink={"#projects"} navName={"Projets"} />
        <NavButton navLink={"#skills"} navName={"Compétences"} />
        <NavButton navLink={"#formations"} navName={"Formations"} />
        <NavButton navLink={"#contact"} navName={"Contact"} />
      </div>
      <div className="banner-wrapper">
        <ul className="squares">
          {squares.map((el, i) => {
            const randomDimensions = Math.floor(
              Math.random() * (150 - 15 + 1) + 15
            );

            return (
              <li
                key={i}
                style={{
                  left: `${generateRandomNum({ min: 0, max: 90 })}%`,
                  width: randomDimensions,
                  height: randomDimensions,
                  animationDelay: `${
                    i % 2 ? generateRandomNum({ min: 0, max: 20 }) : 0
                  }s`,
                  animationDuration: `${generateRandomNum({
                    min: 10,
                    max: 50,
                  })}s`,
                }}
              />
            );
          })}
        </ul>
      </div>
      <div className="banner-overlay" />
    </div>
  );
}

export default Banner;
