import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

class Head extends React.Component {
  render() {
    return (
      <div className="head">
        <button className="head-create add-button">
          <FontAwesomeIcon icon={faPlus} />
          Create
        </button>
        <button className="head-today">Today</button>
        <span className="head-prev">
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <span className="head-next">
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <div className="head__row">1</div>
      </div>
    );
  }
}

export default Head;
