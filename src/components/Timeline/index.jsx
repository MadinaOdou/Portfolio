import "./index.scss";

function Timeline() {
  return (
    <section className="timeline flex-row">
      <div>
        <h2>Formations</h2>
        <ul className="timeline-vertical">
          <li>
            <span className="timeline--date">2023</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">
              <div className="timeline-title">
                <strong>OpenClassrooms, France</strong>
              </div>
              Développeur intégrateur web <br />
              Diplôme de niveau 5 / bac+2
            </div>
          </li>

          <li>
            <span className="timeline--date">2008 - 2012</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">
              <div className="timeline-title">
                <strong>
                  Université des Technologies de l'Information, Tachkent
                </strong>
              </div>
              Services électroniques et informatiques <br />
              Diplôme de niveau Master 1 / bac+4
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
