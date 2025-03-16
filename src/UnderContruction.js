import React from "react";
import { Link } from "react-router-dom";
import slurtle from "./images/slurtle-gm.png";
import slurtleConstruction from "./images/slurtleconstruction.jpeg";
import logo from "./images/logotag.png";

export default function UnderConstruction() {
  return (
    <div className="Disclaimer container mb-5">
      <div className="page-contents">
        <div className="logo-container">
          {" "}
          <img src={logo} alt="ELI5 Logo" className="logo-image img-fluid" />
        </div>
        <div className="redirection-link m-3">
          <Link to="/">Return to ELI5 Homepage</Link>
        </div>

        <h6 className="mt-5">
          {" "}
          🛠️ The ELI5 review page is under construction. Check back soon for
          updates! 🛠️{" "}
        </h6>
        <img
          src={slurtleConstruction}
          alt="Slurtle Contruction logo"
          className="construction-image"
        />

        <div className="redirection-link m-5">
          <Link to="/">Return to ELI5 Homepage</Link>
          <div>
            <img
              src={slurtle}
              alt="ELI5 DAO mascot"
              className="disclaimers-mascot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
