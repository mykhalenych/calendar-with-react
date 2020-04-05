import React from "react"
import moment from "moment"
const Field = ({ idHour, events, showPopup, handleDeleteTask }) => {
const arr = (from, to) => {
    const result = []

    for (let i = from; i <= to; i++) {
        result.push(i)
    }
    return result;
}

  let idForHour = idHour; 
  console.log(idForHour)
  return arr(0, 23).map(item => {
    const hour = `0${item}`.slice(-2)
    const id = `${idForHour}T${hour}`
    let dateMy = `${idForHour}T${item}:00`

    let eventFound = events.find( 
      event => {
        // console.log(event.dataStart)
        console.log(id)

       return event.dataStart.slice(0, -3) === id}
    );

    let event;
    
    if(eventFound){
      
      let startHour =  moment(eventFound.dataStart, 'YYYY-MM-DD hh:mm').format("HH")
      let endHour =  moment(eventFound.dataEnd, 'YYYY-MM-DD hh:mm').format("HH")
      let startMinute = moment(eventFound.dataStart, 'YYYY-MM-DD hh:mm').format("mm")
      let endMinute = moment(eventFound.dataEnd, 'YYYY-MM-DD hh:mm').format("mm")
      let heightEvent = (+endHour * 60) - (+startHour * 60) + (+endMinute - +startMinute)
      event = (
        <div
          className="event"
          style={{height: `${heightEvent}px` }}
          //item - година, idForHour - день

          onClick={() => handleDeleteTask(eventFound.id)}
        >
          <span>{eventFound.title}</span>
          <span>
            {`${startHour}:${startMinute}`} - {`${endHour}:${endMinute}`}
          </span>
          <span>
            {eventFound.description}
          </span>
        </div>
      )    
    }

    return (
      <div key={Math.random()}className="multicolumns__field"
      onClick={() => showPopup()}
      >
        {dateMy}
        {event}
      </div>
    );
  });

};
export default Field

// import React from "react";
// import moment from "moment";
// const Field = ({ day }) => {
//   let arr = Array(24).fill("0");
//   let currentDay = day;

//   return arr.map((arr, index) => {
//     const startOfWeek = moment()
//       .startOf("isoWeek")
//       .add(currentDay, "day");

//     currentDay++;
//     return (
//       <div key={Math.random()} className="multicolumns__field">
//         {startOfWeek.format("DD")}
//       </div>
//     );
//   });
// };
// export default Field;

