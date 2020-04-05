import React from "react";
import moment from "moment";

const Week = ({ day }) => {
  let currentDay = day;

  let arr = Array(7).fill("0");
  const weekDays = arr.map(() => {
    const startOfWeek = moment().startOf("isoWeek").add(currentDay, "day");
    currentDay++;
    return (
      <div key={Math.random()} className="date">
        <span className="date-number">{startOfWeek.format("ddd")}</span>
        <div className="week-day">{startOfWeek.format("DD")}</div>
      </div>
    );
  });

  return <div className="week">{weekDays}</div>;
};
export default Week;
