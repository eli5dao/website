import React from "react";
import { Link } from "react-router-dom";
import colonyTested from "./images/colonytested.jpg";
import samudaiTested from "./images/samudaitested.jpg";
import commongroundTested from "./images/cgtested.jpg";
import daohausTested from "./images/daohaus.jpg";
import aragon from "./images/aragon.jpg";
import hats from "./images/hats.jpg";

export default function ToolsTested() {
  return (
    <div className="ToolsTested mt-5">
      <h5 className="mb-3">
        <strong>Tools 🛠️ Tested</strong>
      </h5>
      <div className="row ">
        <div className="col-md-4">
          <Link to="/underconstruction">
            <img
              src={colonyTested}
              alt="Colony tested logo"
              className="tools-image"
            />
          </Link>
        </div>
        <div className="col-md-4 ">
          <Link to="/underconstruction">
            <img
              src={samudaiTested}
              alt="samudai tested logo"
              className="tools-image"
            />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/underconstruction">
            <img
              src={commongroundTested}
              alt="common ground tested logo"
              className="tools-image"
            />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/underconstruction">
            <img
              src={daohausTested}
              alt="daohaus tested logo"
              className="tools-image"
            />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/underconstruction">
            <img src={aragon} alt="aragon logo" className="tools-image" />
          </Link>
        </div>
        <div className="col-md-4">
          <Link to="/underconstruction">
            <img src={hats} alt="hats logo" className="tools-image" />
          </Link>
        </div>
      </div>
    </div>
  );
}
