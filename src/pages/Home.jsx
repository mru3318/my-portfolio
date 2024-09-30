import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import HomeImage from "../assets/images/main3.jpg";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center home-container">
        <img src={HomeImage} className="img-fluid home-image" alt="Home Img" />
        <div className="position-absolute top-50 start-50 translate-middle text-container">
          <h1 className="sansita-regular-italic focus-in-expand-fwd">
            Mayur Ukande
          </h1>
          <h3>
            <Typewriter
              options={{
                strings: ["I'm a", "React JS Developer", "Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          <button
            class="btn btn-primary btn-block rounded-pill btn-lg mt-3 bounce-top"
            style={{
              fontSize: "smaller",
              paddingLeft: "35px",
              paddingRight: "35px",
            }}
            onClick={() => navigate("/about")}
          >
            ABOUT ME
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
