<<<<<<< HEAD
=======

>>>>>>> b42b955bbcc096ac494e460ccffd78fc137225a3
import React from "react";
import moment from "moment";

let hour = +moment().format("HH");
let minute = +moment().format("mm");
let totalMargin = hour * 60 + minute;
const Redline = () => {
  return (
    <div className="redline" style={{ marginTop: `${totalMargin}px` }}>
      <div className="redline__ball"></div>
    </div>
  );
};

export default Redline;
