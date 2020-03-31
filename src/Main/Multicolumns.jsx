import React from "react";
import Field from "./Field";
class Multicolumns extends React.Component {
  render() {
    let arr = Array(23).fill("0");
    return (
      <div className="multicolumns">
        {arr.map(day => {
          return (
            <div className="multicolumns__line">
              <Field />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Multicolumns;
