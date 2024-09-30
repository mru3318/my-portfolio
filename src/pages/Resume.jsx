import React from "react";

function Resume() {
  return (
    <div className="container1">
      <h2 className="text-center mt-5 mb-5 custom-css half-underline custom-underline1">
        Resume
      </h2>
      <h2>Sumary</h2>
      <h3 className="color">Mayur Ukande</h3>
      <p>
        An experienced React.js developer with a strong background in
        JavaScript, HTML, and CSS. Skilled in building interactive and dynamic
        web applications with React.js, I am a fast learner who adapts quickly
        to new challenges. I am passionate about coding and enjoy working on
        user-centric projects.
        <br />
        <br />
        Email: mru3318@gmail.com <br />
        <br />
        Phone: (+91) 9021979595 <br />
        <br />
        Location: Nagpur, Maharashtra, India
      </p>
      <br />
      <h2>Education</h2>
      <h3 className="color">Batchlor of Computer Applications</h3>
      <h4>YCMOU | 2012 - 2015</h4>
      <p>Percentage : 73.89 %</p>

      <br />

      <h3 className="color">MSc. Computer Science</h3>
      <h4>Bharathiar University | 2015 - 2017</h4>
      <p>Percentage : 65.7 %</p>

      <h2>Skills</h2>
      <div class="skills">
        <ul>
          <li>Languages: JavaScript, HTML5, CSS3, ES6</li>
          <li>Frameworks: React.js, Bootstrap</li>
          <li>Version Control: Git, GitHub</li>
          <li>Tools: VS Code, Chrome DevTools</li>
          <li>APIs: REST, JSON</li>
          <li>Soft Skills: Teamwork, Problem Solving, Communication</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
