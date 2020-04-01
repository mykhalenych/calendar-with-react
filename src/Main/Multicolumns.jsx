import React from "react";
import Field from "./Field";

const Multicolumns = ({ day }) => {
  let arr = Array(24).fill("0");
 
  return (
    <div className="multicolumns">
      {arr.map(() => {
        return (
          <div key={Math.random()} className="multicolumns__line">
            <Field day={day}/>
          </div>
        );
      })}
    </div>
  );
};

export default Multicolumns;
