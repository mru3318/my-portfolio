import React from "react";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";
import linkedin from "../assets/icons/linkedin.png";

function Footer() {
  return (
    <>
      <div className="mt-5 mb-4" style={{ textAlign: "center" }}>
        <h6>&#169; Copyright Mayur All Rights Reserved </h6>

        <button className="btn">
          <img
            src={facebook}
            alt="facebook"
            height="40px"
            style={{ marginRight: "10px" }}
          />
        </button>
        <button className="btn">
          <img src={instagram} alt="instagram" height="53px" />
        </button>
        <button className="btn">
          <img src={linkedin} alt="linkedin" height="53px" />
        </button>
      </div>
    </>
  );
}

export default Footer;
