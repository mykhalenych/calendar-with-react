import React from "react";
import Field from "./Field";
import moment from "moment";
import Redline from "../Main/Redline";
import PropTypes from 'prop-types';

const Multicolumns = ({ day, events, showPopup, handleDeleteTask, closePopup, showEventData }) => {
  let arr = Array(7).fill("0");
  let idForHour = day;

  return (
    <div className="multicolumns">
      {arr.map(() => {
        let idHour = moment()
          .startOf("isoWeek")
          .add(idForHour, "day")
          .format("YYYY-MM-DD");
        idForHour++;
        const redline =
          idHour === moment().format("YYYY-MM-DD") ? <Redline /> : null;
        return (
          <div key={Math.random()} className="multicolumns__line">
            <Field
              idHour={idHour}
              events={events}
              showPopup={showPopup}
              handleDeleteTask={handleDeleteTask}
              closePopup={closePopup}
              showEventData={showEventData}
            />
            {redline}
          </div>
        );
      })}
    </div>
  );
};
Multicolumns.propTypes = {
  idHour: PropTypes.number
};
export default Multicolumns;
