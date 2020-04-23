import React from "react";

const Column = () => {
  let arr = Array(23).fill("0");

  return (
    <div className="column">
      {arr.map((item, hour) => {
        let newHour = hour + 1;
        return (
          <div key={newHour} className="columnHour">
            {newHour < 10 ? `0${newHour}:00` : `${newHour}:00`}
          </div>
        );
      })}
    </div>
  );
};

export default Column;
