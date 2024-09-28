import React, { useEffect, useState } from "react";
import mayur from "../assets/images/Mayur.png";

function About() {
  // State to control the progress bar width
  const [progress, setProgress] = useState({
    reactjs: 0,
    javascript: 0,
    html: 0,
    css: 0,
    bootstrap: 0,
    git: 0,
  });

  // UseEffect to simulate animation
  useEffect(() => {
    // Animate the progress bars after the component mounts
    setTimeout(() => {
      setProgress({
        reactjs: 90,
        javascript: 85,
        html: 95,
        css: 80,
        bootstrap: 85,
        git: 75,
      });
    }, 1500); // A delay of 500ms to start the animation
  }, []);

  return (
    <>
      <h2 className="text-center mt-5 custom-css half-underline custom-underline">
        About
      </h2>
      <p className="text-center mt-5">
        I am a dedicated React.js developer specializing in creating dynamic,
        responsive web applications with JavaScript, HTML, CSS, Bootstrap, and
        React.js.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={mayur} width="100%" alt="mayur" />
          </div>
          <div className="col-8">
            <h3>React JS & Web Developer</h3>
            <p>
              Hi, I'm Mayur Ukande, a passionate React.js developer with a
              strong foundation in JavaScript, HTML, and CSS.
            </p>
            <div className="container">
              <div className="row">
                <div className="col-6" style={{ height: "200px" }}>
                  <ul className="mt-3">
                    <li className="custom-li">
                      <i className="bi bi-chevron-right" />
                      &nbsp;
                      <strong>Birthday:</strong>&nbsp;
                      <span>24 Jan 1986</span>
                    </li>
                    <li className="custom-li">
                      <i className="bi bi-chevron-right" />
                      &nbsp;
                      <strong>Phone:</strong>&nbsp;
                      <span>+91 9021979595</span>
                    </li>
                    <li className="custom-li">
                      <i className="bi bi-chevron-right" />
                      &nbsp;
                      <strong>City:</strong>&nbsp;
                      <span>Nagpur, Maharashtra</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="mt-3">
                    <li className="custom-li">
                      <i className="bi bi-chevron-right" />
                      &nbsp;
                      <strong>Age:</strong>&nbsp;
                      <span>39</span>
                    </li>
                    <li className="custom-li">
                      <i className="bi bi-chevron-right" />
                      &nbsp;
                      <strong>Degree:</strong>&nbsp;
                      <span>Master</span>
                    </li>
                    <li className="custom-li">
                      <i className="bi bi-chevron-right" />
                      &nbsp;
                      <strong>Email:</strong>&nbsp;
                      <span>mru3318@gmail.com</span>
                    </li>
                    <li className="custom-li">
                      <i className="bi bi-chevron-right" />
                      &nbsp;
                      <strong>Freelance:</strong>&nbsp;
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>
              I am a passionate and detail-oriented React.js developer with
              strong expertise in JavaScript, HTML, and CSS. With a solid
              foundation in front-end development, I specialize in building
              dynamic and responsive web applications. I also have hands-on
              experience working with Bootstrap for creating mobile-first,
              user-friendly interfaces, and I am proficient in Git for version
              control and collaboration. I continuously strive to improve my
              skills and stay updated with the latest trends in web development,
              always seeking out new challenges to expand my knowledge and
              contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-center mt-5 half-underline custom-underline">
        Skills
      </h2>
      <p className="text-center mt-5">
        Skilled in React.js, JavaScript, HTML, CSS, Bootstrap, and Git version
        control.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h5>React.js</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-color progress-bar-animated progress-bar-striped"
                role="progressbar"
                style={{
                  width: `${progress.reactjs}%`,
                  transition: "width 2s",
                }}
                aria-valuenow="90"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                90%
              </div>
            </div>

            <h5>JavaScript</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-color progress-bar-animated progress-bar-striped"
                role="progressbar"
                style={{
                  width: `${progress.javascript}%`,
                  transition: "width 2s",
                }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>

            <h5>HTML</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-color progress-bar-animated progress-bar-striped"
                role="progressbar"
                style={{ width: `${progress.html}%`, transition: "width 2s" }}
                aria-valuenow="95"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                95%
              </div>
            </div>
          </div>

          <div className="col-6">
            <h5>CSS</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-color progress-bar-animated progress-bar-striped"
                role="progressbar"
                style={{ width: `${progress.css}%`, transition: "width 2s" }}
                aria-valuenow="80"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                80%
              </div>
            </div>

            <h5>Bootstrap</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-color progress-bar-animated progress-bar-striped"
                role="progressbar"
                style={{
                  width: `${progress.bootstrap}%`,
                  transition: "width 2s",
                }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                85%
              </div>
            </div>

            <h5>Git</h5>
            <div className="progress mb-3">
              <div
                className="progress-bar bg-color progress-bar-animated progress-bar-striped"
                role="progressbar"
                style={{ width: `${progress.git}%`, transition: "width 2s" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
