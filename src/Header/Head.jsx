import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const Head = ({
  showPopup,
  getNextWeek,
  getPrevWeek,
  getCurrentDay,
  currentMounth,
}) => {
  return (
    <div className="head">
      <button className="head__create-btn add-button" onClick={showPopup}>
        <FontAwesomeIcon icon={faPlus} />
        Create
      </button>
      <button className="head__today" onClick={getCurrentDay}>
        Today
      </button>
      <div className="navigation">
        <span className="navigation__prev" onClick={getPrevWeek}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <span className="navigation__next" onClick={getNextWeek}>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
        <div className="navigation__mounth">{currentMounth}</div>
      </div>
    </div>
  );
};

export default Head;
