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
  return arr(0, 23).map(item => {
    const hour = `0${item}`.slice(-2)
    const id = `${idForHour}T${hour}`
    let dateMy = `${idForHour}T${item}:00`

    let eventFound = events.find( 
      event => {
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
      <div key={Math.random()} className="multicolumns__field"
      onClick={() => showPopup()}
      >
        {dateMy}
        {event}
      </div>
    );
  });

};

export default Field;

