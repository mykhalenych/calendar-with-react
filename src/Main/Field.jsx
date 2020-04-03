import React from "react";
import moment from "moment";
const Field = ({ day }) => {
  let arr = Array(24).fill("0");
  let currentDay = day;

  return arr.map((arr, index) => {
    const startOfWeek = moment()
      .startOf("isoWeek")
      .add(currentDay, "day");

    currentDay++;
    return (
      <div key={Math.random()} className="multicolumns__field">
        {startOfWeek.format("DD")}
      </div>
    );
  });
};
export default Field;
