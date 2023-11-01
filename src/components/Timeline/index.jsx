import "./index.scss";

function Timeline() {
  return (
    <section className="timeline flex-row">
      <div>
        <h2>Experience</h2>
        <ul className="timeline-vertical">
          <li>
            <span className="timeline--date">19 Jan 1990</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">I was born in Semarang.</div>
          </li>

          <li>
            <span className="timeline--date">8 Okt 2012</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">
              Graduated from university. <br /> Start work.
            </div>
          </li>

          <li>
            <span className="timeline--date">28 Feb 2015</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">
              Founded a startup company. <br />
              Struggle since.
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h2>Study</h2>
        <ul className="timeline-vertical">
          <li>
            <span className="timeline--date">19 Jan 1990</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">I was born in Semarang.</div>
          </li>

          <li>
            <span className="timeline--date">8 Okt 2012</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">
              Graduated from university. <br /> Start work.
            </div>
          </li>

          <li>
            <span className="timeline--date">28 Feb 2015</span>
            <div className="timeline--circle">
              {" "}
              <i></i>
            </div>
            <div className="timeline--description">
              Founded a startup company. <br />
              Struggle since.
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
