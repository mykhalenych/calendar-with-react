import React from "react";
import Day from "./Day";

const Week = () => {
  let arr = Array(7).fill("0");
  return (
    <div className="week">
      {arr.map((index) => {
        return <Day key={Math.random()} index={index} />;
      })}
    </div>
  );
};

export default Week;

