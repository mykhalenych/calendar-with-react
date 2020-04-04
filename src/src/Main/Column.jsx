import React from "react";

class Column extends React.Component {
  render() {
    let arr = Array(23).fill("0");

    return (
      <div className="column" key={Math.random()}>
        {arr.map((item, hour) => {
          hour = hour + 1;
          return (item = (
            <div key={Math.random()} className="columnHour">
              {hour < 10 ? `0${hour}:00` : `${hour}:00`}
            </div>
          ));
        })}
      </div>
    );
  }
}

export default Column;
