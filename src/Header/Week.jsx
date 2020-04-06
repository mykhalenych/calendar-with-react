import React from "react";
import moment from "moment";

const Week = ({ day }) => {
  let currentDay = day;

  let arr = Array(7).fill("0");
  const weekDays = arr.map(() => {
    let activeDay;
    const startOfWeek = moment().startOf("isoWeek").add(currentDay, "day");
    if (moment().format("DD.MM.YY") === startOfWeek.format("DD.MM.YY")) {
      activeDay = "date-number active";
    } else {
      activeDay = "date-number";
    }

    currentDay++;
    return (
      <div key={Math.random()} className="date">
        <div className="week-day">{startOfWeek.format("ddd")}</div>
        <span className={activeDay}>{startOfWeek.format("DD")}</span>
      </div>
    );
  });

  return <div className="week">{weekDays}</div>;
};
export default Week;
