import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Head = ({ showPopup, getNextWeek, getPrevWeek, getCurrentDay }) => {
  return (
    <div className="head">
      <button className="head-create add-button" onClick={() => showPopup()}>
        <FontAwesomeIcon icon={faPlus} />
        Create
      </button>
      <button className="head-today" onClick={() => getCurrentDay()}>
        Today
      </button>
      <span className="head-prev" onClick={() => getPrevWeek()}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
      <span className="head-next" onClick={() => getNextWeek()}>
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
      <div className="head__row">1</div>
    </div>
  );
};

export default Head;
