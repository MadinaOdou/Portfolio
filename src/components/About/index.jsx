import "./index.scss";
import photo from "../../assets/madina-odou.webp";

function About() {
  return (
    <section className="about">
      <h2>About me</h2>
      <div className="about-content">
        <img
          src={photo}
          alt="Photo de Madina Odou"
          className="about-content-photo"
        />
        <p className="about-content-text">
          Software Engineer who loves to transform ideas into reality using
          code. With over three years of developing web applications using the
          latest front-end and UI/UX technologies and full-fledged APIs.
          Motivated designer and developer with experience creating custom
          websites with ReactJs, Node, Express, Mongo, and PostgreSQL.
        </p>
      </div>
    </section>
  );
}

export default About;
