import React from "react";
import mayur from "../assets/images/Mayur.png";

function About() {
  return (
    <>
      <h1 className="text-center mt-5 custom-css half-underline">About</h1>
      <p className="text-center mt-5">
        Mayur Ukande is a dedicated React.js developer specializing in creating
        dynamic, responsive web applications with JavaScript, HTML, CSS,
        Bootstrap, and React.js.
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
                <div className="col-6" style={{ height: "350px" }}>
                  <ul className="list-inline">
                    <li className="d-flex align-items-center py-2">
                      <span className="bullet bg-success" /> success
                    </li>
                  </ul>
                </div>
                <div className="col-6">2 of 2</div>
              </div>
            </div>
            <p>
              My expertise extends to building responsive and dynamic user
              interfaces using React.js, Bootstrap, and Strapi. With a keen eye
              for detail and a dedication to crafting seamless web experiences,
              I enjoy transforming complex requirements into elegant, efficient,
              and user-friendly solutions. Let's build something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
