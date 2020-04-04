// import React from "react";
// import Field from "./Field";
// import moment from "moment";
// import Redline from "../Main/Redline";

// const Multicolumns = ({ day, events, showPopup, handleDeleteTask })  => {
//   let arr = Array(7).fill("0");
//   let idForHour = day;

//   return (
//     <div className="multicolumns">
//       {arr.map(() => {
//         let idHour = moment()
//           .startOf("isoWeek")
//           .add(idForHour, "day")
//           .format("YYYY-MM-DD");
//         idForHour++;
//         const redline =
//           idHour === moment().format("YYYY-MM-DD") ? <Redline /> : null;
//             return (
//           <div key={Math.random()} className="multicolumns__line">
//             <Field
//               events={events}
//               idHour={idHour}
//               showPopup={showPopup}
//               handleDeleteTask={handleDeleteTask}
//             />
//             {redline}
//             {idHour}
//         console.log(idHour);

//         return (
//           <div key={Math.random()} className="multicolumns__line">
//             <Field day={day} />
//             {redline}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Multicolumns;

import React from "react";
import Field from "./Field";
import moment from "moment";
import Redline from "../Main/Redline";

const Multicolumns = ({ day, events, showPopup, handleDeleteTask }) => {
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
            />
            {redline}
          </div>
        );
      })}
    </div>
  );
};

export default Multicolumns;
